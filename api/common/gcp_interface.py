from google.cloud import bigquery

class gcp_interface(object):

    def __init__(self):
        self.client = bigquery.Client()
        self.table_id = {"paper": "indicium-339016:purdue.papers", "user": "indicium-339016:purdue.users"}

    def get_query_results(self, query):
        query_job = self.client.query(query)
        return query_job.result()

    

    