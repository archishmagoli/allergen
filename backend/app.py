from flask import Flask, flash, request, redirect, url_for
from flask_cors import CORS, cross_origin
from process import process
from werkzeug.utils import secure_filename
import base64

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route('/process', methods=['POST'])
@cross_origin()
def main():
    uploadedFile = request.files
    data = dict(uploadedFile)
    uploaded = data['nutritionLabel']
    allergies = request.form.get('allergies')
    output = process(allergies, uploaded)

    return output

