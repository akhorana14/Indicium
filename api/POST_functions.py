from common import Paper
from common import User
def login(username, password):
    # query database
    # GET from query when == username && == password
    user = User(username)
    if (user == None):
        return 1

    return 0 #return 1 if there's an error

def create(email, password):
    #query to see if username in the database
    #if (exists database):
    #   return 1
    user = User(username = email, password = password, papers_owned = 0)
    # POST to database
    return user

def createResearchPaper(author, pdf, abstract, numTokens):
    for (int i = 0; i < numTokens; i++):
        paper = Paper(official_author = author, desciption = abstract, current_owner = author)
        #query to database

def getAbstract(uniqueid):
    #query using id
    return paper.abstract