class Paper(object):

    def __init__(self, id = None, title = None, desciption = None, official_author = None, 
                 current_owner = None, previous_owners = None, is_on_sale = None, price = None,
                 link = None):
        self.id = id
        self.title = title
        self.desciption = desciption
        self.official_author = official_author
        self.current_owner = current_owner
        self.previous_owners = previous_owners
        self.is_on_sale = is_on_sale
        self.price = price
        self.link = link

    def get_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'desciption': self.desciption,
            'official_author': self.official_author,
            'current_owner': self.current_owner,
            'previous_owners': self.previous_owners,
            'is_on_sale': self.is_on_sale,
            'price': self.price,
            'link': self.link
        }
    
    def login(username, password):
        


    