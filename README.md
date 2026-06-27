# ❤️ Heart Disease Prediction using Machine Learning

![Python](https://img.shields.io/badge/Python-3.14-blue?logo=python&logoColor=white)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-Machine%20Learning-F7931E?logo=scikitlearn&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-Data%20Analysis-150458?logo=pandas&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-Numerical%20Computing-013243?logo=numpy&logoColor=white)
![Jupyter Notebook](https://img.shields.io/badge/Jupyter-Notebook-F37626?logo=jupyter&logoColor=white)


## 📖 Project Overview

Heart Disease Prediction is a supervised Machine Learning project that predicts whether a patient is likely to have heart disease based on various clinical and medical parameters.

The project demonstrates the complete Machine Learning workflow, beginning with data loading and preprocessing, followed by exploratory data analysis (EDA), feature scaling, model training, evaluation, and prediction on new patient data.

This project is intended as a beginner-friendly implementation of binary classification using **Logistic Regression** while following standard machine learning practices.

---

# ❗ Problem Statement

Heart disease is one of the leading causes of death worldwide. Early identification of individuals at risk can significantly improve treatment planning and reduce mortality.

Healthcare professionals often analyze multiple medical parameters before diagnosing heart disease. This process can be time-consuming and may vary depending on clinical experience.

The objective of this project is to develop a Machine Learning model capable of predicting whether a patient is likely to have heart disease using medical attributes such as age, blood pressure, cholesterol level, chest pain type, maximum heart rate, ECG results, and other clinical measurements.

The developed model can assist healthcare professionals by providing quick and reliable predictions that support medical decision-making.

---

# 🎯 Objectives

* Predict heart disease using Supervised Machine Learning.
* Understand the dataset through Exploratory Data Analysis.
* Clean and preprocess medical data.
* Train a Logistic Regression classification model.
* Evaluate model performance using standard evaluation metrics.
* Predict heart disease for new patient data.
* Save the trained model for future deployment.

---

# 📂 Repository Structure

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
│   ├── age_distribution.png
│   ├── chest_pain_distribution.png
│   ├── confusion_matrix.png
│   ├── correlation_heatmap.png
│   ├── gender_distribution.png
│   └── heart_disease_distribution.png
│
├── requirements.txt
├── LICENSE
└── README.md
```

---

# 📊 Dataset

The project uses the **Heart Disease Dataset**, which contains medical records of patients used for predicting the presence of heart disease.

### Dataset Information

* Total Records: **1025**
* Total Features: **13**
* Target Variable: **Heart Disease**
* Task Type: **Binary Classification**

### Features Used

| Feature  | Description                     |
| -------- | ------------------------------- |
| age      | Age of the patient              |
| sex      | Gender                          |
| cp       | Chest Pain Type                 |
| trestbps | Resting Blood Pressure          |
| chol     | Cholesterol Level               |
| fbs      | Fasting Blood Sugar             |
| restecg  | Resting ECG Results             |
| thalach  | Maximum Heart Rate Achieved     |
| exang    | Exercise Induced Angina         |
| oldpeak  | ST Depression                   |
| slope    | Slope of ST Segment             |
| ca       | Number of Major Vessels         |
| thal     | Thalassemia                     |
| target   | Heart Disease (0 = No, 1 = Yes) |

---

# 🔄 Methodology

The project follows a standard Machine Learning pipeline.

### Step 1 : Import Libraries

Import all required libraries for data manipulation, visualization, machine learning, and model evaluation.

### Step 2 : Load Dataset

Read the Heart Disease dataset using Pandas.

### Step 3 : Data Inspection

Analyze:

* Dataset Shape
* Column Information
* Data Types
* Statistical Summary

### Step 4 : Data Preprocessing

* Check Missing Values
* Remove Duplicate Records
* Verify Data Types

### Step 5 : Exploratory Data Analysis (EDA)

Visualize the dataset using:

* Heart Disease Distribution
* Age Distribution
* Gender Distribution
* Chest Pain Distribution
* Correlation Heatmap

### Step 6 : Feature Selection

Separate the dataset into:

* Features (X)
* Target Variable (y)

### Step 7 : Train-Test Split

Split the dataset into training and testing sets using an 80:20 ratio.

### Step 8 : Feature Scaling

Standardize feature values using **StandardScaler**.

### Step 9 : Model Training

Train a **Logistic Regression** classifier.

### Step 10 : Model Evaluation

Evaluate the model using:

* Accuracy Score
* Confusion Matrix
* Precision
* Recall
* F1-Score

### Step 11 : Prediction

Predict heart disease for new patient data.

### Step 12 : Save Model

Save the trained model using **Joblib**.

---

# 📈 Exploratory Data Analysis

The following visualizations were generated during the analysis.

* Heart Disease Distribution
* Age Distribution
* Gender Distribution
* Chest Pain Type Distribution
* Correlation Heatmap
* Confusion Matrix

All generated figures are available inside the **results/** directory.

---

# ⚙️ Data Preprocessing

The dataset was preprocessed using the following techniques:

* Missing Value Analysis
* Duplicate Record Removal
* Feature Selection
* Train-Test Split
* Standardization using StandardScaler

These preprocessing steps improve model performance and reduce bias during training.

---

# 🤖 Machine Learning Model

## Algorithm Used

**Logistic Regression**

### Why Logistic Regression?

* Efficient binary classification algorithm.
* Easy to understand and interpret.
* Fast model training.
* Works well on structured datasets.
* Suitable for medical prediction problems.

---

# 📊 Results

The trained model successfully learned the relationship between patient medical attributes and the target variable.

### Evaluation Metrics

* Accuracy Score
* Confusion Matrix
* Precision
* Recall
* F1-Score

### Model Accuracy

**XX.XX%**

> Replace **XX.XX%** with the accuracy obtained after training.

---

# 🔮 Prediction Example

### Example Input

```text
Age = 52
Sex = Male
Chest Pain Type = 2
Blood Pressure = 130
Cholesterol = 230
Maximum Heart Rate = 150
```

### Example Output

```text
Prediction:
Heart Disease Detected

Probability:
88.17%
```

---

# 🖼️ Output Visualizations

The repository includes the following generated outputs:

* Heart Disease Distribution
* Age Distribution
* Gender Distribution
* Chest Pain Distribution
* Correlation Heatmap
* Confusion Matrix

These images are available in the **results/** folder.

---

# 🛠️ Technologies Used

* Python
* Pandas
* NumPy
* Matplotlib
* Seaborn
* Scikit-learn
* Joblib
* Jupyter Notebook

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/vanshnain-builds/Heart-Disease-Prediction.git
```

Move into the project directory

```bash
cd Heart-Disease-Prediction
```

Install dependencies

```bash
pip install -r requirements.txt
```

Launch Jupyter Notebook

```bash
jupyter notebook
```

Open

```text
notebook/heart_disease_prediction.ipynb
```

Run all notebook cells sequentially.

---

# 📦 Requirements

```text
pandas
numpy
matplotlib
seaborn
scikit-learn
joblib
```

---

# 🚀 Future Improvements

* Compare multiple Machine Learning algorithms.
* Hyperparameter tuning using GridSearchCV.
* Feature Engineering.
* Deploy using Streamlit.
* Build a Flask REST API.
* Explain predictions using SHAP.
* Train on larger datasets for improved generalization.

---

# 📜 License

This project is created for educational and learning purposes.

---

# 👨‍💻 Author

**Vansh Nain**

**B.Tech – Artificial Intelligence & Machine Learning**

**KIET Group of Institutions**

### Areas of Interest

* AI Engineering
* Machine Learning
* Data Science
* Deep Learning


---

## 🌟 Support

If you found this project useful, consider giving it a ⭐ on GitHub.
