from pydantic import BaseModel

class CreateToken(BaseModel):
    access_token: str
    user_id: int

    class Config:
        orm_mode = True
        use_enum_values = True