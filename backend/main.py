from flask import Flask, request
from flask_cors import CORS
from PIL import Image
import pytesseract
from textblob import TextBlob

app = Flask(__name__)
CORS(app) # allow for cross-origin requests (from the frontend)

@app.route('/process', methods=['POST'])
def api():
    allergies = request.form['allergies']
    pytesseract.pytesseract.tesseract_cmd = r'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'

    # Get the image from the request
    image = request.files['nutritionLabel']

    # Open the image
    img = Image.open(image)

    # Convert the image to black and white (grayscale)
    img = img.convert('L')
    
    # Get original dimensions
    width, height = img.size
    
    # Resize the image (note the corrected method call)
    img = img.resize((width * 2, height * 2))
    
    # Perform OCR using pytesseract
    text = pytesseract.image_to_string(img)

    # Spell checking using TextBlob
    blob = TextBlob(text)
    corrected_text = blob.correct()

    allergens_in_label = []
    
    return 'Hi'


if __name__ == '__main__':
    app.run(debug=True)