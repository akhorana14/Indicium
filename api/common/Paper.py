from typing import List


class Paper(object):

    def __init__(self, id: int = None, title: str = None, abstract: str = None, official_author: int = None, 
                 current_owner: int = None, previous_owners: List[int] = None, is_on_sale: bool = None, price: str = None,
                 link: str = None):
        self.id = id
        self.title = title
        self.abstract = abstract
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
            'abstract': self.abstract,
            'official_author': self.official_author,
            'current_owner': self.current_owner,
            'previous_owners': self.previous_owners,
            'is_on_sale': self.is_on_sale,
            'price': self.price,
            'link': self.link
        }

    #write print function
    def print_paper(self):
        print("Paper ID: ", self.id)
        print("Title: ", self.title)
        print("Abstract: ", self.abstract)
        print("Official Author: ", self.official_author)
        print("Current Owner: ", self.current_owner)
        print("Previous Owners: ", self.previous_owners)
        print("Is On Sale: ", self.is_on_sale)
        print("Price: ", self.price)
        print("Link: ", self.link)
    
    def login(username, password):
        return 0


    