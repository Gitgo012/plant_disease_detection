import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np

MODEL_PATH = "saved_model/my_cnn_model.keras"  
model = tf.keras.models.load_model(MODEL_PATH)

# Example classes — replace with your own labels
classes = [
    "Apple Scab",
    "Apple Black Rot",
    "Apple Cedar Rust",
    "Apple Healthy",
    "Blueberry Healthy",
    "Cherry Powdery Mildew",
    "Cherry Healthy",
    "Corn Gray Leaf Spot",
    "Corn Common Rust",
    "Corn Northern Leaf Blight",
    "Corn Healthy"
]


def predict_image(image_path: str):
    img = image.load_img(image_path, target_size=(128, 128))
    img_array = image.img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    predictions = model.predict(img_array)
    predicted_class = np.argmax(predictions, axis=1)[0]
    confidence = np.max(predictions)

    return {
        "prediction": classes[predicted_class],
        "confidence": round(float(confidence) * 100, 2)
    }
