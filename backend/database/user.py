# from sqlalchemy.orm import Session
# from models.user import User
# from schemas.user import UserCreate, UserLogin
# from fastapi import HTTPException
# from utils.password import hash_password, verify_password
# from pydantic import EmailStr


# def create_user(db: Session, user: UserCreate):
#     existing_user = db.query(User).filter(User.email == user.email).first()
#     if existing_user:
#         raise HTTPException(status_code=400, detail="Email already registered")

#     encrypted_password = hash_password(user.password)
#     db_user = User(first_name=user.first_name, last_name=user.last_name,
#                    email=user.email, password=encrypted_password)

#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user


# def get_user(db: Session, email: EmailStr):
#     # existing_user = db.query(User).filter(User.email == email).first()
#     # if verify_password(user.password, existing_user.password):
#         # return existing_user
#     # else:
#     #     raise HTTPException(status_code=400, detail="Invalid credentials")
#     # return db.query(User).filter(User.email == user.email).first()
#     return db.query(User).filter(User.email == email).first()

    
# # def get_users(db: Session, skip: int = 0, limit: int = 10):
# #     return db.query(User).offset(skip).limit(limit).all()
