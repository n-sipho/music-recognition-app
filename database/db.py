from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

DATABASE_URI = os.getenv('DATABASE_URL')
engine = create_engine(DATABASE_URI)

Session = sessionmaker(bind=engine, autocommit=False, autoflush=False)
# session = Session()

Base = declarative_base()



def db_session():
    db = Session()
    try:
        yield db
    finally:
        db.close()
