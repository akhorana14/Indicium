class Paper(object):

    def __init__(self, id = None, title = None, desciption = None, official_author = None, 
                 current_author = None, previous_owners = None, is_on_sale = None, price = None,
                 link_to_paper = None):
        self.id = id
        self.title = title
        self.desciption = desciption
        self.official_author = official_author
        self.current_author = current_author
        self.previous_owners = previous_owners
        self.is_on_sale = is_on_sale
        self.price = price
        self.link_to_paper = link_to_paper
        pass

    def get_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'desciption': self.desciption,
            'official_author': self.official_author,
            'current_author': self.current_author,
            'previous_owners': self.previous_owners,
            'is_on_sale': self.is_on_sale,
            'price': self.price,
            'link_to_paper': self.link_to_paper
        }
        pass

    