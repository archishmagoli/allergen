from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # allow for cross-origin requests (from the frontend)

@app.route('/api', methods=['GET'])
def api():
    return jsonify({'message': 'Hello, World!'})


if __name__ == '__main__':
    app.run(debug=True)