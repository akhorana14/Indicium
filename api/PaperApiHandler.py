from flask_restful import Api, Resource, reqparse
from .POST_functions import *
from .GET_functions import *

class PaperApiHandler(Resource):
  def get(self):
    #parser = reqparse.RequestParser()
    #parser.add_argument('type', type=str)
    #parser.add_argument('id', type=int)
    #args = parser.parse_args()
    print("Test")
    #, args['id'])  
    #paper = getPaper(args['id'])

    return {
      'resultStatus': 'SUCCESS'#,
      #'paper': paper.get_dict()
    }
  
  def post(self):
    print(self)
    parser = reqparse.RequestParser()
    parser.add_argument('id', type=int)
    args = parser.parse_args()

    print(args)
    # note, the post req from frontend needs to match the strings here (e.g. 'type and 'message')

    request_id = args['id']
    # ret_status, ret_msg = ReturnData(request_type, request_json)
    # currently just returning the req straight
    ret_status = request_type
    ret_msg = request_json

    if ret_msg:
      message = "Your Message Requested: {}".format(ret_msg)
    else:
      message = "No Msg"
    
    final_ret = {"status": "Success", "message": message}

    return final_ret

