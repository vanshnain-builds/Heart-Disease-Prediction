# CardioLens Frontend

React + Vite frontend for the Heart Disease Prediction project.

## Run

```bash
cd frontend
npm install
npm run dev
```

The frontend expects the prediction API at `http://localhost:8000` by default. For a deployed backend, create `frontend/.env`:

```text
VITE_API_URL=https://your-backend.example.com
```

## Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

The model file is loaded from `model/heart_disease_model.pkl` in the repository root.
