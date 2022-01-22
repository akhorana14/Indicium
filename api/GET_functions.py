from .common.Paper import Paper
from .common.User import User
from .common.gcp_interface import gcp_interface

gcp = gcp_interface()

def GetResearchPaperList():
    return gcp.get_all_papers()


def GetAbstract(id: int):
    # Gets the abstract of a paper from the database
    return gcp.get_paper_abstract(id)




