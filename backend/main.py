from flask import Flask, request
from flask_cors import CORS
from flask_restful import Resource, Api
from decouple import config
import openai
import os

openai.organization = "org-9BDdApfdksfAJ2XsyNYvGTjI"
openai.api_key = config('OPENAI_API_KEY')
openai.Model.list()

#App object
app = Flask(__name__)
CORS(app)
api = Api(app)

class Lessons(Resource):

   def completion(self, params):
      return openai.ChatCompletion.create(
         model="gpt-3.5-turbo",
         messages=[
            {
               'role': 'user',
               'content': f'Answer the following query with the exact string response "yes" or "no", if "no" explain why:\n\nQ: Is this an acceptable translation (Mandarin : English) excluding punctuation: "{params["pinyin"]}" : "{params["english"]}"'
            }
         ]
      )

   def get(self):
      return 'hello :D'
   
   def post(self):
      data = request.get_json()
      return self.completion(data)

api.add_resource(Lessons, '/')

if __name__ == '__main__':
   app.run(debug=True)