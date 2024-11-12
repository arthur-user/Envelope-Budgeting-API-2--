const { Pool } = require('pg');

// Use DATABASE_URL if available (render provides this in production)
const connectionString = process.env.DATABASE_URL;

const db = new Pool({
  connectionString: connectionString,
  ssl: process.env.NODE_ENV === 'production', // Ensure SSL is enabled for production
});

module.exports = { db };
