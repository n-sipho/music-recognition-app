from pydantic import BaseModel
from datetime import datetime


class UserBase(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str
    created_at: datetime = datetime.utcnow()
    updated_at: datetime = datetime.utcnow()

    class Config:
        orm_mode = True
        use_enum_values = True


class UserCreate(UserBase):
    pass

    class Config:
        orm_mode = True
        use_enum_values = True


class UserLogin(BaseModel):
    email: str
    password: str

    class Config:
        orm_mode = True
        use_enum_values = True


class UserResponse(BaseModel):
    email: str
    id: int

    class Config:
        orm_mode = True
        use_enum_values = True
