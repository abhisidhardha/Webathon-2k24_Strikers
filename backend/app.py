import hashlib
import sqlite3
from flask import Flask, request, jsonify

app = Flask(__name__)

# Connect to the database (or create it if it doesn't exist)
conn = sqlite3.connect('users.db', check_same_thread=False)
c = conn.cursor()

# Create a table to store user data if it doesn't exist
c.execute('''CREATE TABLE IF NOT EXISTS users
             (username TEXT PRIMARY KEY, password TEXT, email TEXT)''')

# Function to sign up a new user
def signup(username, password, email):
    # Hash the password
    hashed_password = hashlib.sha256(password.encode()).hexdigest()

    # Check if the username already exists
    c.execute("SELECT * FROM users WHERE username=?", (username,))
    existing_user = c.fetchone()

    if existing_user:
        return "Username already exists"
    else:
        # Insert the new user data into the database
        c.execute("INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
                  (username, hashed_password, email))
        conn.commit()
        return "Sign up successful"

# Function to log in a user
def login(username, password):
    # Hash the provided password
    hashed_password = hashlib.sha256(password.encode()).hexdigest()

    # Check if the username and password match a user in the database
    c.execute("SELECT * FROM users WHERE username=? AND password=?", (username, hashed_password))
    user = c.fetchone()

    if user:
        return "Login successful"
    else:
        return "Invalid username or password"

# API routes
@app.route('/signup', methods=['POST'])
def signup_route():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')
    result = signup(username, password, email)
    return jsonify({'message': result})

@app.route('/login', methods=['POST'])
def login_route():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    result = login(username, password)
    return jsonify({'message': result})

if __name__ == '__main__':
    app.run(debug=True)