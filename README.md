# **Diabetes Prediction Web Application**
# Overview :
A web application to determine whether a person has diabetes or not, using the XG Boost model to predict the diabetes outcome when the following data is entered: glucose, blood pressure, skin thickness, insulin, body mass index (BMI), diabetes pedigree function, age.

# Project advantages :
* User interface: A simple interface for easy input of health data.
* XGBoost model: The XGBoost model, known for its high accuracy in predictions, is used.
* Instant prediction: Provides instant prediction results based on user inputs.

 # Technologies Used :
* Frontend: HTML, CSS, JavaScript.
* Backend: Python, Flask.
* Machine learning: logistic regression, KNN, SVM, random forest, decision tree, XGBoost, and XGBoost was chosen as the best model in terms of precision, recall, and, ROC-AUC for predicting diabetes outcomes in a web application.

 # Project steps : 
 ### 1. Data Import:
+ Download the Diabetes dataset from Kaggle.

### 2. Data Analysis:
* Explore data and analyze different features.
* Creating visualizations to highlight the relationships between different features and the outcome. 

### 3. Data processing and cleaning: 
* Data cleaning by removing the unimportant feature that does not have a significant impact on the result.

### 4. Model Building:
* Try different algorithms like: Logistic regression, KNN, SVM, Random forest, Decision tree, XGBoost.
*  Each model is evaluated based on precision, recall, and roc-auc, and the best model in terms of precision, recall, and roc-auc is selected for use in predicting the outcome in the web application based on user input.
  
### 5. Model improvement:
* Improving the model using techniques such as cross-validation and feature engineering.
* Compare the different models and choose the one that provides the best result.

### 6. Model Deployment:
* Save the Best Model: Save the trained model to a file (using joblib or pickle).
* Create a Flask Web Application: Develop a web application using Flask to serve the model.
* Build User Interface: Create an interface using HTML and CSS for users to input their health data.
* Integrate Model with Web App: By uploading the saved model in the Flask application and using it to generate predictions based on user inputs.
* Running the model: By testing it with data input to make a prediction of the result.
 
# Project Objective:
* Developing a web application using the XGBoost model to predict diabetes based on a set of input data with high prediction accuracy.
# XG-Boost Results:
## Train Data
* #### Accuracy: 0.80
* #### ROC AUC Score: 0.80
* #### Confusion Matrix:
    
| Actual \ Predicted | 0 | 1 |
| ------------- | ------------- |------------- |
| 0  | (TN) 145 |  (FP) 46 |
| 1  | (FN) 29 |  (TP) 162 |

* #### Performance Metrics for Model Classification:
 
|Class  | Precision | Recall | F1-score | Support | 
| ------------- | ------------- |------------- |------------- |------------- |
| 0  | 0.83 | 0.76 | 0.79 | 191 |
| 1  | 0.78 | 0.85 | 0.81 | 191 |

## Test Data 
* #### Accuracy Score: 0.81
* #### ROC AUC Score: 0.82
* #### Confusion Matrix:

| Actual \ Predicted | 0 | 1 |
| ------------- | ------------- |------------- |
| 0  | (TN) 122 |  (FP) 32 |
| 1  | (FN) 11 |  (TP) 66 |

* #### Performance Metrics for Model Classification:
 
|Class  | Precision | Recall | F1-score | Support | 
| ------------- | ------------- |------------- |------------- |------------- |
| 0  | 0.92 | 0.79 | 0.85 | 154 |
| 1  | 0.67 | 0.86 | 0.75 | 77 |

## Dataset Link /
### The dataset for this project can be found [here](https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database/data)

# Web application images and prediction results: 
### 1. Data entry form 
![img1](https://github.com/user-attachments/assets/73599998-64c1-44c9-ae61-e6da9d7c6515)


 
 
