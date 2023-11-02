const express = require('express');
const router = express.Router();
const sql = require('mssql');

// Define a route to fetch data from the table
router.get('/fetch-data', async (req, res) => {
  try {
    const pool = await sql.connect();

    // Modify the query to select data from your specific table
    const result = await pool.request().query('SELECT * FROM StudentTb1'); // Replace 'YourTableName'

    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching data from SQL Server:', error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

module.exports = router;
