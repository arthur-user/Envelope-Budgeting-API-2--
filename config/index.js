require('dotenv').config();

const { Pool } = require('pg');

// Use DATABASE_URL if it's available (Render will provide this in production)
const connectionString = process.env.DATABASE_URL;

const isProduction = process.env.NODE_ENV === 'production';

// Create a new Pool to manage database connections
const db = new Pool({
  connectionString: connectionString,
  ssl: isProduction, // Enable SSL for production (required by Render's PostgreSQL)
});

module.exports = { db };
