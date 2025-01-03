import bcrypt

def hash_password(password):
    hashed_bytes = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    return hashed_bytes.decode()

def verify_password(password, stored_hash):
    return bcrypt.checkpw(password.encode(), stored_hash.encode())
