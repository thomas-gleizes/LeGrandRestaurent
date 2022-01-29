import os

# Database initialization (pas utile pour ce projet
if os.environ.get('DATABASE_URL') is None:
    pass
else:
    SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']
