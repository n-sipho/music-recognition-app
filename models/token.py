from database.db import Base, engine
from sqlalchemy import Column, Integer, String, DateTime

class Token(Base):
    __tablename__ = 'tokens'

    id = Column(Integer, primary_key=True)
    access_token = Column(String, index=True)
    user_id = Column(Integer)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow,
                        onupdate=datetime.utcnow)
