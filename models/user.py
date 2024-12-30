from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from database.db import Base, engine


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(String, unique=True)  # Enforce email uniqueness
    password = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow,
                        onupdate=datetime.utcnow)


# Create the table in the database
Base.metadata.create_all(engine)
