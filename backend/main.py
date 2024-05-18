from flask import Flask, request
from flask_cors import CORS
from PIL import Image
import pytesseract
from textblob import TextBlob
from fuzzywuzzy import process

app = Flask(__name__)
CORS(app) # allow for cross-origin requests (from the frontend)

@app.route('/process', methods=['POST'])
def api():
    allergies = request.form['allergies']
    allergies = allergies.split(',')
    allergies = [allergy.strip() for allergy in allergies]

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
    for allergen in allergies:
        if fuzzy_search(allergen, corrected_text):
            allergens_in_label.append(allergen)
    
    if len(allergens_in_label) > 0:
        return ', '.join(allergens_in_label)
    else:
        return ''


def fuzzy_search(query, string_list, threshold=80):
    """
    Perform fuzzy search to check if the query matches any item in the string list.
    
    Args:
    - query (str): The query string to search for.
    - string_list (list): The list of strings to search within.
    - threshold (int): The threshold for the fuzzy match (default is 80).
    
    Returns:
    - bool: True if a fuzzy match is found, False otherwise.
    """
    # Get the best match from the string list
    best_match, score = process.extractOne(query, string_list)
    
    # Check if the match score is above the threshold
    if score >= threshold:
        return True
    else:
        return False

if __name__ == '__main__':
    app.run(debug=True)