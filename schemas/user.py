from pydantic import BaseModel
from datetime import datetime


class UserBase(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str
    created_at: datetime = datetime.utcnow()
    updated_at: datetime = datetime.utcnow()


class UserCreate(UserBase):
    pass


class UserResponse(UserBase):
    id: int

    class Config:
        orm_mode = True
