from api.common.Paper import Paper
from api.common.gcp_interface import gcp_interface
from common import *

gcp = gcp_interface()

def GetResearchPaperList():
    return gcp.get_all_papers()


def GetAbstract(id: int):
    # Gets the abstract of a paper from the database
    return gcp.get_paper_abstract(id)




