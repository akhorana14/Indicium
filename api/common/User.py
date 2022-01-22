class User(object):

    def __init__(self, id = None, username = None, fullname = None, papers_owned = None, password = None):
        self.id = id
        self.username = username
        self.fullname = fullname
        self.papers_owned = papers_owned
        self.password = password

    def get_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'fullname': self.fullname
            'papers_owned': self.papers_owned,
            'password': self.password
        }
    