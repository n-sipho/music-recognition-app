from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
# from .. import database, schemas, models
from database.db import db_session
from database.user import create_user, get_user
from schemas.user import UserCreate, UserResponse, UserLogin
from models.user import User

router = APIRouter(prefix='/api/v1/auth', tags=['auth'])


@router.post("/register", response_model=UserResponse)
def register_user(payload: UserCreate, db: Session = Depends(db_session)):
    try:
        return create_user(db=db, user=payload)
    except Exception as e:
        raise e
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=f"An error occurred: {str(e)}")


@router.post("/login", response_model=UserResponse)
def login(user: UserLogin, db: Session = Depends(db_session)):
    return get_user(db=db, user=user)

# @router.get("/auth/{user_id}", response_model=schemas.UserResponse)
# def read_user(user_id: int, db: Session = Depends(get_db)):
#     db_user = crud.get_user(db=db, user_id=user_id)
#     if db_user is None:
#         raise HTTPException(status_code=404, detail="User not found")
#     return db_user
