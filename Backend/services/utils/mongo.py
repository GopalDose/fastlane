from pymongo import MongoClient
from django.conf import settings

def get_mongo_client():
    return MongoClient("mongodb+srv://gopaldose12345:fastlane@cluster0.540em.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

def get_mongo_db():
    client = get_mongo_client()
    return client["Fastlane"]
