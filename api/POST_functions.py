from common import Paper
from common import User
from common import gcp_interface

gcp = gcp_interface()

def login(username, password):
    # query database
    # GET from query when == username && == password
    user = User(username)
    if (user == None):
        return 1

    return 0 #return 1 if there's an error

def create_user(username, password):
    
    exits = False

    user = None

    # exits = gcp.userExits(username)

    # if exits: return 1

    # create user in database with unique ID and no papers owned
    # user = gcp.createUser(username, password)

    return user if user else 0

def createResearchPaper(author, pdf, abstract, num_papers):
    # TODO lol, idk off the top of my head how to do this 
    return 0

def getAbstract(id):
    #query using id
    # return gcp.getPaper(uniqueid).abstract
    return 0