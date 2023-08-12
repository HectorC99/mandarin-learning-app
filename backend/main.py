from flask import Flask
from flask_cors import CORS
from flask_restful import Resource, Api
from openai import *

#App object
app = Flask(__name__)
api = Api(app)

fakeDatabase = {
   'lessons': [
      {
         'id': 1,
         'name': 'lesson1',
         'description': 'description1'
      },
      {
         'id': 2,
         'name': 'lesson2',
         'description': 'description2'
      },
      {
         'id': 3,
         'name': 'lesson3',
         'description': 'description3'
      }
   ]
}

class Lessons(Resource):
   def get(self):
      return fakeDatabase['lessons']

api.add_resource(Lessons, '/')

if __name__ == '__main__':
   app.run(debug=True)