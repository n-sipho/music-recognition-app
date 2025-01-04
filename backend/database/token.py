from sqlalchemy.orm import Session
from schemas.token import CreateToken
from models.token import Token


def create_token(db: Session, token: CreateToken):
    db_token = Token(token=token.access_token, user_id=token.user_id)
    db.add(db_token)
    db.commit()
    db.refresh(db_token)
    return db_token

def get_token(db: Session, token: str):
    return db.query(Token).filter(Token.access_token == token).first()