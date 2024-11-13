require('dotenv').config();

const { Pool } = require('pg'); 

// Change to development as necessary
const isProduction = process.env.NODE_ENV === 'production';

// Use DATABASE_URL if available (Render is going to automatically provide this in production)
// else, manually construct the connection string for the purpose of local development
const connectionString = isProduction ? process.env.DATABASE_URL : 
    `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

// Create a new Pool to manage database connections
const db = new Pool({
  connectionString: connectionString,
  ssl: isProduction, // Enable SSL for production (required by Render's PostgreSQL)
});

module.exports = { db };
