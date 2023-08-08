from flask import Flask
from flask_cors import CORS
from flask_restful import Resource, Api
from openai import *

#App object
app = Flask(__name__)
api = Api(app)

class Lessons(Resource):
   def get(self):
      return 'lessons'

api.add_resource(Lessons, '/lessons')

if __name__ == '__main__':
   app.run