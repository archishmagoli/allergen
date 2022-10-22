from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from PIL import Image
import pytesseract
import numpy as np
import inflect 
import re

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route('/process', methods=['POST'])
@cross_origin()
def process():
    # uploadedFile = request.files['nutritionLabel']
    uploadedFile = request.files.get('nutritionallabel')
    allergies = request.form.get('allergies')
    return allergies
