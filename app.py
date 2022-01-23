
from flask import Flask, request, jsonify, send_from_directory
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

@app.route("/get_all_on_sale_papers", methods=['GET'])
def displayOnSalePapers():
    return {"data": [x.get_dict() for x in gcp.get_all_on_sale_papers()]}

@app.route("/get_profile_papers/id=<int:id>", methods=['GET'])
def getProfilePapers(id):
    return {"data": [x.get_dict() for x in gcp.get_all_papers_owned_by_user(id)]}

@app.route("/user/id=<int:id>", methods=['GET'])
def displayUser(id):
    return GetUser(id).get_dict()

@app.route("/user_signup", methods=['POST'])
def user_signup():
    request_body = request.get_json()
    print(request_body)
    username = request_body['username']
    password = request_body['password']
    print(username, ", ", password)
    user = create_user(username, password)
    if (user == 1):
        return 1
    return user.get_dict()
    # return {"hi": "hi"}

@app.route("/user_login", methods=['POST'])
def user_login():
    request_body = request.get_json()
    print(request_body)
    username = request_body['username']
    password = request_body['password']
    user = login(username, password)
    if (user == 1):
        return {'data': 'Failed'}
    return user.get_dict()

@app.route("/create_paper", methods=['POST'])
def create_paper():
    request_body = request.get_json()
    author_id = request_body['author_id']
    title = request_body['title']
    link = request_body['link']
    abstract = request_body['abstract']
    num_papers = int(request_body['num_papers'])
    return [x.get_dict() for x in createResearchPaper(author_id, title, link, abstract, num_papers)]


@app.route("/buy", methods=['POST'])
def buyPaper():
    request_body = request.get_json()
    buyer_id = request_body['buyer_id']
    paper_id = request_body['paper_id']
    result = gcp.buy_paper(paper_id, buyer_id)
    return {
        "result": result
        }

@app.route("/sell", methods=['POST'])
def sellPaper():
    request_body = request.get_json()
    paper_id = request_body['paper_id']
    result = gcp.make_paper_for_sale(paper_id)
    return {
        "result": result
        }
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
