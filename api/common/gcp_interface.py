from random import random
from google.cloud import bigquery
from User import User
from Paper import Paper
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
        os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = r'MaskMandator-a0512b925076.json'
        self.client = bigquery.Client()
        self.table_id = {"paper": "indicium-339016:purdue.papers", "user": "indicium-339016:purdue.users"}

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

    def generate_unique_user_id(self) -> int:
        random_id = int(random() * 100000)
        while self.user_id_exits(random_id):
            random_id = int(random() * 100000)
        return random_id

    def create_user(self, username: str, password: str) -> User:
        if self.user_exits(username):
            return None
        user_id = self.generate_unique_user_id()
        papersOwned = ""
        query = "INSERT INTO {} (id, username, papers_owned, password) VALUES ({}, '{}', '{}', '{}')".format(self.table_id["user"], user_id, username, papersOwned, password)
        query_job = self.client.query(query)
        query_job.result()
        return User(user_id, username, papersOwned, password)

    def get_paper(self, id: int) -> Paper:
        query = "SELECT * FROM {} WHERE id = {}".format(self.table_id["paper"], id)
        query_job = self.client.query(query)
        return Paper(query_job.result().rows[0][0], query_job.result().rows[0][1], query_job.result().rows[0][2], query_job.result().rows[0][3], query_job.result().rows[0][4], query_job.result().rows[0][5], query_job.result().rows[0][6], query_job.result().rows[0][7], query_job.result().rows[0][8])

    def get_all_papers(self) -> List[Paper]:
        query = "SELECT * FROM {}".format(self.table_id["paper"])
        query_job = self.client.query(query)
        return [Paper(row[0], row[1], row[2], row[3], row[4], row[5].split(" "), row[6], row[7], row[8]) for row in query_job.result().rows]

    def get_paper_abstract(self, id: int) -> str:
        query = "SELECT abstract FROM {} WHERE id = {}".format(self.table_id["paper"], id)
        query_job = self.client.query(query)
        return query_job.result().rows[0][0]

    