from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
# from .. import database, schemas, models
from database.db import db_session
from database.user import create_user
from schemas.user import UserCreate, UserResponse
from models.user import User

router = APIRouter()


@router.post("/auth/create-account", response_model=UserResponse)
def create_account(user: UserCreate, db: Session = Depends(db_session)):
    try:
        return create_user(db=db, user=user)
    except Exception as e:
        raise e
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"An error occurred: {str(e)}")

# @router.get("/auth/", response_model=list[schemas.UserResponse])
# def read_users(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
#     return crud.get_users(db=db, skip=skip, limit=limit)

# @router.get("/auth/{user_id}", response_model=schemas.UserResponse)
# def read_user(user_id: int, db: Session = Depends(get_db)):
#     db_user = crud.get_user(db=db, user_id=user_id)
#     if db_user is None:
#         raise HTTPException(status_code=404, detail="User not found")
#     return db_user
