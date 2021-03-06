from ast import Str
from random import random
from google.cloud import bigquery
from .User import User
from .Paper import Paper
from typing import List
import os


"""
Example stuff

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r'MaskMandator-a0512b925076.json'

# Construct a BigQuery client object.
client = bigquery.Client()


query =
    SELECT * FROM `maskmandator-294920.purdue.purdue` WHERE id = 1

"""

class gcp_interface(object):

    def __init__(self):
        os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r"/home/akash/Downloads/indicium-339016-6890be5f9725.json"
        self.client = bigquery.Client()
        self.table_id = {"paper": "indicium-339016.purdue.papers", "user": "indicium-339016.purdue.users"}

    def get_query_results(self, query):
        query_job = self.client.query(query)
        return query_job.result()

    def user_exits(self, username: str) -> bool:
        query = "SELECT * FROM {} WHERE username = '{}'".format(self.table_id["user"], username)
        query_job = self.client.query(query)
        return query_job.result().total_rows > 0

    def user_id_exits(self, id: int) -> bool:
        query = "SELECT * FROM {} WHERE id = {}".format(self.table_id["user"], id)
        query_job = self.client.query(query)
        return query_job.result().total_rows > 0

    def paper_id_exits(self, id: int) -> bool:
        query = "SELECT * FROM {} WHERE id = {}".format(self.table_id["paper"], id)
        query_job = self.client.query(query)
        return query_job.result().total_rows > 0

    def generate_unique_user_id(self) -> int:
        random_id = int(random() * 100000)
        while self.user_id_exits(random_id):
            random_id = int(random() * 100000)
        return random_id

    def generate_unique_paper_id(self) -> int:
        random_id = int(random() * 100000)
        while self.paper_id_exits(random_id):
            random_id = int(random() * 100000)
        return random_id

    def create_user(self, username: str, password: str) -> User:
        self.delete_duplicate_users()
        if self.user_exits(username):
            return None
        user_id = self.generate_unique_user_id()
        papersOwned = ""
        wallet = "100.00"
        query = "INSERT INTO {} (id, username, password, papersOwned, wallet) VALUES ({}, '{}', '{}', '{}', '{}')".format(self.table_id["user"], user_id, username, password, papersOwned, wallet)
        query_job = self.client.query(query)
        query_job.result()
        return User(user_id, username, papersOwned, password, wallet)

    def create_paper(self, author_id: int, title: str, link: str, abstract: str, num_papers: int) -> int:
        ids = []
        if not self.user_id_exits(author_id):
            return None
        title = title
        abstract = abstract
        official_author = author_id
        current_owner = author_id
        previous_owners = " ".join([str(author_id)])
        is_on_sale = False
        price = "0.00"
        link = link
        for i in range(num_papers):
            id = self.generate_unique_paper_id()
            ids.append(id)
            query = "INSERT INTO {} (id, title, abstract, official_author, current_owner, previous_owners, is_on_sale, price, link) VALUES ({}, '{}', '{}', {}, {}, '{}', '{}', '{}', '{}')".format(self.table_id["paper"], id, title, abstract, official_author, current_owner, previous_owners, is_on_sale, price, link)
            query_job = self.client.query(query)
            query_job.result()
        return ids

    def get_paper(self, id: int) -> Paper:
        query = "SELECT * FROM {} WHERE id = {}".format(self.table_id["paper"], id)
        query_job = self.client.query(query)
        for row in query_job:
            return Paper(row[0], row[1], row[2], row[3], row[4], row[5].split(" "), row[6], row[7], row[8])

    def get_user(self, id: int) -> User:
        query = "SELECT * FROM {} WHERE id = {}".format(self.table_id["user"], id)
        query_job = self.client.query(query)
        for row in query_job:
            return User(row[0], row[1], row[2], row[3], row[4])

    def get_all_papers(self) -> List[Paper]:
        query = "SELECT * FROM {}".format(self.table_id["paper"])
        query_job = self.client.query(query)
        return [Paper(row[0], row[1], row[2], row[3], row[4], row[5].split(" "), row[6], row[7], row[8]) for row in query_job]

    def get_paper_abstract(self, id: int) -> str:
        query = "SELECT abstract FROM {} WHERE id = {}".format(self.table_id["paper"], id)
        query_job = self.client.query(query)
        return query_job[0][0]

    def login_user(self, username: str, password: str) -> bool:
        query = "SELECT * FROM {} WHERE username = '{}' AND password = '{}'".format(self.table_id["user"], username, password)
        query_job = self.client.query(query)
        # if no user exists with that username and password return None
        if query_job.result().total_rows == 0:
            return None
        

        for row in query_job:
            return User(row[0], row[1], row[2], row[3], row[4])

    # get all papers that are marked is_on_sale from database and return a list of paper objects
    def get_all_on_sale_papers(self) -> List[Paper]:
        query = "SELECT * FROM {} WHERE is_on_sale = 'True'".format(self.table_id["paper"])
        query_job = self.client.query(query)
        return [Paper(row[0], row[1], row[2], row[3], row[4], row[5].split(" "), row[6], row[7], row[8]) for row in query_job]


    #given a id increment the wallet by a given amount
    #take the id's wallet, cast it to a float, add the amount, cast it back to a string,
    # and update the user's wallet in the database
    def increment_wallet(self, id: int, amount: float) -> bool:
        query = "SELECT wallet FROM {} WHERE id = {}".format(self.table_id["user"], id)
        query_job = self.client.query(query)
        for row in query_job:
            wallet = float(row[0])
            wallet += amount
            query = "UPDATE {} SET wallet = '{}' WHERE id = {}".format(self.table_id["user"], str(wallet), id)
            query_job = self.client.query(query)
            query_job.result()
            return True
        return False

    #given a id decrement the wallet by a given amount
    #take the id's wallet, cast it to a float, add the amount, cast it back to a string,
    # and update the user's wallet in the database
    def decrement_wallet(self, id: int, amount: float) -> bool:
        query = "SELECT wallet FROM {} WHERE id = {}".format(self.table_id["user"], id)
        query_job = self.client.query(query)
        for row in query_job:
            wallet = float(row[0])
            wallet -= amount
            query = "UPDATE {} SET wallet = '{}' WHERE id = {}".format(self.table_id["user"], str(wallet), id)
            query_job = self.client.query(query)
            query_job.result()
            return True
        return False

    # given a paper id and a buyer user id, update the current owner of the paper to the buyer user id, 
    # add the buyer id to the previous owners list, and set the is_on_sale to false,
    # and decrement the buyer's wallet by the price of the paper, and increment the seller's wallet by 95% price of the paper
    # and increment the paper's official author's wallet by 5% of the price of the paper
    def buy_paper(self, paper_id: int, buyer_id: int) -> bool:
        paper = self.get_paper(paper_id)
        seller_id = paper.current_owner
        # if buyer balance is less than paper price return false
        if float(self.get_user(buyer_id).wallet) < float(paper.price):
            return False
        if paper.current_owner == buyer_id:
            return False
        query = "UPDATE {} SET current_owner = {}, previous_owners = CONCAT(previous_owners, ' ', '{}'), is_on_sale = 'False', price = '{}' WHERE id = {}".format(self.table_id["paper"], buyer_id, buyer_id, paper.price, paper_id)
        query_job = self.client.query(query)
        self.increment_wallet(paper.official_author, float(paper.price) * 0.05)
        self.increment_wallet(seller_id, float(paper.price) * 0.95)
        self.decrement_wallet(buyer_id, float(paper.price))
        return True


    #delete all duplicate users from the database
    def delete_duplicate_users(self) -> None:
        query = "DELETE FROM {} WHERE id NOT IN (SELECT MIN(id) FROM {} GROUP BY username)".format(self.table_id["user"], self.table_id["user"])
        query_job = self.client.query(query)
        query_job.result()

    def get_user_id_from_username(self, username: str) -> int:
        query = "SELECT id FROM {} WHERE username = '{}'".format(self.table_id["user"], username)
        query_job = self.client.query(query)
        for row in query_job:
            return row[0]

    # get all papers that are that are currently owned by a given user
    def get_all_papers_owned_by_user(self, user_id: int) -> List[Paper]:
        query = "SELECT * FROM {} WHERE current_owner = {}".format(self.table_id["paper"], user_id)
        query_job = self.client.query(query)
        return [Paper(row[0], row[1], row[2], row[3], row[4], row[5].split(" "), row[6], row[7], row[8]) for row in query_job]

    # change paper for sale to true and set price to the given price
    def make_paper_for_sale(self, paper_id: int, price: Str) -> bool:
        query = "UPDATE {} SET is_on_sale = 'True', price = '{}' WHERE id = {}".format(self.table_id["paper"], price, paper_id)
        query_job = self.client.query(query)
        return query_job.result().total_rows > 0

    # set all user wallets to "100.00" where the user's current balance is < 100
    def set_all_user_wallets(self) -> None:
        query = "UPDATE {} SET wallet = '100.00' WHERE wallet < '100.00'".format(self.table_id["user"])
        query_job = self.client.query(query)
        query_job.result()
