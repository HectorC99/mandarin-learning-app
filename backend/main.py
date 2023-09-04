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
               'content': f'Answer the following query with the string "yes" or "no" (no punctuation), if "no", also provide an explaination:\n\nQ: Is this an acceptable translation (Mandarin : English) An acceptable translation is one that conveys the same meaning as the original sentence, and may not be a word-for-word translation : "{params["pinyin"]}" : "{params["english"]}"'
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