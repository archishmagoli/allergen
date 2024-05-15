from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # allow for cross-origin requests (from the frontend)

@app.route('/process', methods=['POST'])
def api():
    data = request.form['allergies']

    return data


if __name__ == '__main__':
    app.run(debug=True)