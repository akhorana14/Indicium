from common import Paper
from common import User
from common import gcp_interface

gcp = gcp_interface()

def login(username, password):
    user = gcp.loginUser(username, password)
    if (user == None):
        return 1
    return user 

def create_user(username, password):
    user = gcp.createUser(username, password)
    return user if user else 1

def createResearchPaper(author, pdf, abstract, num_papers):
    # TODO lol, idk off the top of my head how to do this 
    return 0

def getAbstract(id):
    return gcp.get_paper_abstract(id)