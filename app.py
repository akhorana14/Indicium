
from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.HelloApiHandler import HelloApiHandler
from api.POST_functions import *
from api.GET_functions import *

import sys

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')


@app.route("/paper/id=<int:id>", methods=['GET'])
def displayPaper(id):
    return getPaper(id).get_dict()

@app.route("/user/id=<int:id>", methods=['GET'])
def displayUser(id):
    return getUser(id).get_dict()

@app.route("/user_signup", methods=['POST'])
def user_signup(username, password):
    user = create_user(username, password)
    if (user == 1): return 1
    return user.get_dict()

@app.route("/user_login", methods=['POST'])
def user_login(username, password):
    user = login(username, password)
    if (user == 1): return 1
    return user.get_dict()


'''
try:
    from api.PaperApiHandler import PaperApiHandler
    api.add_resource(PaperApiHandler, '/paper/*')
    api.add_resource(HelloApiHandler, '/flask/hello')
    
except Exception as e:
    print(e)
    exception_type, exception_object, exception_traceback = sys.exc_info()
    filename = exception_traceback.tb_frame.f_code.co_filename
    line_number = exception_traceback.tb_lineno

    print("Exception type: ", exception_type)
    print("File name: ", filename)
    print("Line number: ", line_number)

'''
