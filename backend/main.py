from pathlib import Path
from typing import Any

import joblib
import numpy as np
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

BASE_DIR = Path(__file__).resolve().parents[1]
MODEL_PATH = BASE_DIR / "model" / "heart_disease_model.pkl"

app = FastAPI(
    title="Heart Disease Prediction API",
    description="REST API for the Heart Disease Prediction ML model.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

FEATURES = [
    "age", "sex", "cp", "trestbps", "chol", "fbs", "restecg",
    "thalach", "exang", "oldpeak", "slope", "ca", "thal"
]

model: Any = None


class PatientInput(BaseModel):
    age: int = Field(..., ge=1, le=120)
    sex: int = Field(..., ge=0, le=1)
    cp: int = Field(..., ge=0, le=3)
    trestbps: int = Field(..., ge=50, le=250)
    chol: int = Field(..., ge=80, le=700)
    fbs: int = Field(..., ge=0, le=1)
    restecg: int = Field(..., ge=0, le=2)
    thalach: int = Field(..., ge=50, le=250)
    exang: int = Field(..., ge=0, le=1)
    oldpeak: float = Field(..., ge=0, le=10)
    slope: int = Field(..., ge=0, le=2)
    ca: int = Field(..., ge=0, le=4)
    thal: int = Field(..., ge=0, le=3)


@app.on_event("startup")
def load_model() -> None:
    global model
    if not MODEL_PATH.exists():
        raise RuntimeError(f"Model not found at {MODEL_PATH}")
    model = joblib.load(MODEL_PATH)


@app.get("/")
def root():
    return {"name": "Heart Disease Prediction API", "status": "ok"}


@app.get("/health")
def health():
    return {"status": "healthy" if model is not None else "degraded", "model_loaded": model is not None}


@app.get("/metadata")
def metadata():
    return {
        "features": FEATURES,
        "algorithm": "Logistic Regression",
        "target": "target",
        "target_labels": {"0": "Lower likelihood", "1": "Higher likelihood"},
    }


@app.post("/predict")
def predict(patient: PatientInput):
    if model is None:
        raise HTTPException(status_code=503, detail="Prediction model is not loaded")

    values = [[getattr(patient, feature) for feature in FEATURES]]
    array = np.asarray(values, dtype=float)

    try:
        prediction = int(model.predict(array)[0])
        probability = None
        if hasattr(model, "predict_proba"):
            probability = float(model.predict_proba(array)[0][1])

        if probability is None:
            probability = float(prediction)

        return {
            "prediction": prediction,
            "label": "Higher likelihood of heart disease" if prediction == 1 else "Lower likelihood of heart disease",
            "probability": round(probability * 100, 2),
            "disclaimer": "For educational screening only. This is not a medical diagnosis.",
        }
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {exc}") from exc
