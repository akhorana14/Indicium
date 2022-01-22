from typing import List
from pandas import array


class User(object):

    def __init__(self, id: int = None, username: str = None, papers_owned: List[int] = None, password: str = None,
                 wallet: str = None):
        self.id = id
        self.username = username
        self.papers_owned = papers_owned
        self.password = password
        self.wallet = wallet

    def get_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'papers_owned': self.papers_owned,
            'password': self.password,
            'wallet': self.wallet
        }
    