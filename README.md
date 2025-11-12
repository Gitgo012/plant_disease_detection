This branch contains the code and resources for a plant disease classification project using Convolutional Neural Networks (CNNs) with TensorFlow/Keras.

## Dataset

The model was trained and evaluated on a custom dataset containing images of healthy and diseased plant leaves. The dataset is organized into `Train`, `Validation`, and `Test` directories, with subdirectories for each class (e.g., 'Healthy', 'Powdery', 'Rust').

*   **Training Set**: Contains images used to train the model.
*   **Validation Set**: Used for monitoring training performance and tuning hyperparameters.
*   **Test Set**: Used for final evaluation of the model's performance on unseen data.

## Model Architecture

The classification model is a Convolutional Neural Network (CNN) built using TensorFlow's Keras API. It consists of several convolutional layers, max-pooling layers, a flatten layer, a dense layer, and a dropout layer to prevent overfitting. The final layer uses a softmax activation function for multi-class classification.

## Technologies Used

*   Python 3.x
*   TensorFlow 2.x
*   Keras
*   Numpy
*   Matplotlib
*   Seaborn
*   Scikit-learn


### Data Setup

1.  **Download the dataset**: Place your plant disease image dataset in a directory (e.g., `data`) within your project structure.
2.  **Directory Structure**: The dataset should be organized as follows:
    ```
    data/
    ├── Train/
    │   ├── Healthy/
    │   ├── Powdery/
    │   └── Rust/
    ├── Validation/
    │   ├── Healthy/
    │   ├── Powdery/
    │   └── Rust/
    └── Test/
        ├── Healthy/
        ├── Powdery/
        └── Rust/
    ```


## Model Training and Evaluation

The model was trained for `EPOCHS = 25` epochs with `BATCH_SIZE = 32`. Early stopping, model checkpointing, and learning rate reduction on plateau were used to optimize training and prevent overfitting.

### Evaluation Results

After training, the model achieved the following performance on the test set:

*   **Test Loss**: 0.2654
*   **Test Accuracy**: 0.9333

Detailed classification reports and confusion matrices are generated to provide insights into class-wise performance.

## Usage (for predictions)

To make predictions on new images:

1.  Load the trained model (`plant_model_final.keras`).
2.  Load the class names (`class_names.json`).
3.  Use the `predict_image_path` function to get predictions for an image file.
