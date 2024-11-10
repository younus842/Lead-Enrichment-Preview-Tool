from flask import Flask, request, jsonify
import requests

response = requests.get('https://gorest.co.in/public-api/users')
print(response.status_code)

myData = response.json()


app = Flask(__name__)


@app.route("/api/enrich")
def home():
  return myData['data']


if __name__ == "__main__":
  app.run(debug=True)





