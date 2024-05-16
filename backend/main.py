from flask import Flask, request
from flask_cors import CORS
from PIL import Image
import pytesseract

app = Flask(__name__)
CORS(app) # allow for cross-origin requests (from the frontend)

@app.route('/process', methods=['POST'])
def api():
    allergies = request.form['allergies']
    pytesseract.pytesseract.tesseract_cmd = r'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'

    # Get the image from the request
    image = request.files['image']
    image = Image.open(image)
    text = pytesseract.image_to_string(image)

    return 'Hi'


if __name__ == '__main__':
    app.run(debug=True)