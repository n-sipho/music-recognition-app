from sqlalchemy.orm import Session
from utils.password import secure_pwd
from models import *
from schemas import *
from fastapi import HTTPException, status, Request
from config import setting
from datetime import date, datetime, timedelta, time
from typing import Union, Any, Optional
import jwt
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt, JWTError
from config import setting
import os

ACCESS_TOKEN_EXPIRE_MINUTES = os.getenv('ACCESS_TOKEN_EXPIRE_MINUTES')
REFRESH_TOKEN_EXPIRE_MINUTES = os.getenv('REFRESH_TOKEN_EXPIRE_MINUTES')
secret_key = os.getenv('SECRET_KEY')
algorithm = os.getenv('ALGORITHM')
refresh_secret_key = os.getenv('REFRESH_SECRET_KEY')


def create_access_token(subject: Union[str, Any], expires_delta: int = None) -> str:
    if expires_delta is not None:
        expires_delta = datetime.utcnow() + expires_delta
    else:
        expires_delta = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode = {"exp": expires_delta, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode, secret_key, algorithm)
    return encoded_jwt


def create_refresh_token(subject: Union[str, Any], expires_delta: int = None) -> str:
    if expires_delta is not None:
        expires_delta = datetime.utcnow() + expires_delta
    else:
        expires_delta = datetime.utcnow(
        ) + timedelta(minutes=REFRESH_TOKEN_EXPIRE_MINUTES)

    to_encode = {"exp": expires_delta, "sub": str(subject)}
    encoded_jwt = jwt.encode(
        to_encode, refresh_secret_key, algorithm)
    return encoded_jwt


def decodeJWT(jwtoken: str):
    try:
        payload = jwt.decode(
            jwtoken, secret_key, algorithm)
        return payload
    except InvalidTokenError:
        return None


class JWTBearer(HTTPBearer):
    def __init__(self, auto_error: bool = True):
        super(JWTBearer, self).__init__(auto_error=auto_error)

    async def __call__(self, request: Request) -> Optional[str]:
        credentials: HTTPAuthorizationCredentials = await super(JWTBearer, self).__call__(request)
        if credentials:
            if not credentials.scheme == "Bearer":
                raise HTTPException(
                    status_code=403, detail="Invalid authentication scheme.")
            token = credentials.credentials
            if not self.verify_jwt(token):
                raise HTTPException(
                    status_code=403, detail="Invalid token or expired token.")
            return token
        else:
            raise HTTPException(
                status_code=403, detail="Invalid authorization code.")

    def verify_jwt(self, jwtoken: str) -> bool:
        try:
            payload = decodeJWT(jwtoken)
            return True
        except jwt.ExpiredSignatureError:
            return False
        except jwt.JWTError:
            return False
