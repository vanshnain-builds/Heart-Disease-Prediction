# ❤️ Heart Disease Prediction using Machine Learning

A Machine Learning project that predicts the likelihood of heart disease using **Logistic Regression**. This project demonstrates the complete supervised machine learning workflow, from data preprocessing and exploratory data analysis (EDA) to model training, evaluation, and prediction on new patient data.

---

## 📖 Project Overview

Heart disease is one of the leading causes of death worldwide. Early prediction can assist healthcare professionals in identifying high-risk patients and making informed decisions.

This project uses a **Logistic Regression** classifier trained on a heart disease dataset to predict whether a patient is likely to have heart disease based on several medical attributes.

The project covers the complete machine learning pipeline, including:

* Data Loading
* Data Inspection
* Data Cleaning
* Exploratory Data Analysis (EDA)
* Feature Engineering
* Feature Scaling
* Model Training
* Model Evaluation
* Prediction on New Patient Data
* Model Saving

---

## 🎯 Objectives

* Develop a supervised machine learning model for heart disease prediction.
* Analyze and visualize the dataset using Exploratory Data Analysis (EDA).
* Preprocess the data for improved model performance.
* Train and evaluate a Logistic Regression model.
* Predict heart disease using new patient information.
* Save the trained model for future deployment.

---

## 📂 Repository Structure

```text
Heart-Disease-Prediction/
│
├── data/
│   └── heart.csv
│
├── model/
│   └── heart_disease_model.pkl
│
├── notebook/
│   └── heart_disease_prediction.ipynb
│
├── results/
│   ├── heart_disease_distribution.png
│   ├── age_distribution.png
│   ├── gender_distribution.png
│   ├── chest_pain_distribution.png
│   ├── correlation_heatmap.png
│   └── confusion_matrix.png
│
├── requirements.txt
└── README.md
```

---

## 📊 Dataset Information

The dataset contains medical information collected from patients and is used to predict the presence of heart disease.

### Features

| Feature  | Description                          |
| -------- | ------------------------------------ |
| age      | Age of the patient                   |
| sex      | Gender (1 = Male, 0 = Female)        |
| cp       | Chest Pain Type                      |
| trestbps | Resting Blood Pressure               |
| chol     | Serum Cholesterol                    |
| fbs      | Fasting Blood Sugar                  |
| restecg  | Resting Electrocardiographic Results |
| thalach  | Maximum Heart Rate Achieved          |
| exang    | Exercise Induced Angina              |
| oldpeak  | ST Depression                        |
| slope    | Slope of Peak Exercise ST Segment    |
| ca       | Number of Major Vessels              |
| thal     | Thalassemia                          |
| target   | Heart Disease (0 = No, 1 = Yes)      |

---

## 📈 Exploratory Data Analysis

The following visualizations were performed:

* Heart Disease Distribution
* Age Distribution
* Gender Distribution
* Chest Pain Type Distribution
* Correlation Heatmap
* Confusion Matrix

These analyses provide insights into the dataset and help understand feature relationships before model training.

---

## ⚙️ Data Preprocessing

The dataset was preprocessed by:

* Checking missing values
* Removing duplicate records
* Separating input features and target variable
* Splitting data into training and testing sets
* Standardizing numerical features using **StandardScaler**

---

## 🤖 Machine Learning Model

**Algorithm Used**

* Logistic Regression

### Why Logistic Regression?

* Suitable for binary classification problems.
* Fast and computationally efficient.
* Easy to interpret.
* Performs well on structured tabular datasets.

---

## 📊 Model Evaluation

The trained model was evaluated using:

* Accuracy Score
* Confusion Matrix
* Classification Report

  * Precision
  * Recall
  * F1-Score

---

## 🔮 Prediction

The trained model can predict whether a new patient is likely to have heart disease.

Example output:

```text
Prediction: Heart Disease Detected
Probability of Heart Disease: 88.17%
```

---

## 🛠️ Technologies Used

* Python
* Pandas
* NumPy
* Matplotlib
* Seaborn
* Scikit-learn
* Joblib
* Jupyter Notebook

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/vanshnain-builds/Heart-Disease-Prediction.git
```

Move into the project directory:

```bash
cd Heart-Disease-Prediction
```

Install the required packages:

```bash
pip install -r requirements.txt
```

Launch Jupyter Notebook:

```bash
jupyter notebook
```

Open:

```text
notebook/heart_disease_prediction.ipynb
```

Run all cells sequentially.

---

## 📦 Requirements

```
pandas
numpy
matplotlib
seaborn
scikit-learn
joblib
```

---

## 📌 Future Improvements

* Compare multiple classification algorithms such as Random Forest, Support Vector Machine, K-Nearest Neighbors, and XGBoost.
* Perform hyperparameter tuning using GridSearchCV.
* Improve feature engineering and feature selection.
* Deploy the model using Streamlit or Flask.
* Integrate Explainable AI techniques such as SHAP for model interpretability.

---

## 📜 License

This project is intended for educational and learning purposes.

---

## 👨‍💻 Author

**Vansh Nain**

B.Tech – Artificial Intelligence & Machine Learning

KIET Group of Institutions

Interests:

* Artificial Intelligence
* Machine Learning
* Data Science
* AI Engineering

---

### ⭐ If you found this project useful, consider giving it a star on GitHub!
