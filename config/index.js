require('dotenv').config()

const { Pool } = require('pg')

const isProduction = process.env.NODE_ENV === 'production'

// If in production, use the full DATABASE_URL, otherwise manually build the connection string
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

// Create a new Pool to manage database connections
const db = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: isProduction, // Enable SSL in production (required for Render PostgreSQL)
})

module.exports = { db }
