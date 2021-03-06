from .common.Paper import Paper
from .common.User import User
from .common.gcp_interface import gcp_interface

gcp = gcp_interface()

def login(username, password):
    user = gcp.login_user(username, password)
    if (user == None):
        return 1
    return user 

def create_user(username, password):
    user = gcp.create_user(username, password)
    return user if user else 1

def createResearchPaper(author_id, title, link, abstract, num_papers):
    return gcp.create_paper(author_id, title, link, abstract, num_papers)    

def getAbstract(id):
    return gcp.get_paper_abstract(id)

def getPaper(id):
    return gcp.get_paper(id)
