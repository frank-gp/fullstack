DROP DATABASE IF EXISTS  demo_typeorm;

CREATE DATABASE demo_typeorm;

-- Connect to the newly created database
\c demo_typeorm;

-- Drop the table if it exists
DROP TABLE IF EXISTS usersTable;

-- Create a table
CREATE TABLE users_table (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample data
INSERT INTO users_table (name, email, age, active) VALUES 
    ('User Name', 'user1@example.com', 23, true),
    ('User Name', 'user2@example.com', 23, true),
    ('User Name', 'user3@example.com', 23, true),;

-- Display the data in the table
SELECT * FROM users_table;
