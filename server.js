const express = require('express');
const cors = require('cors');
const sql = require('mssql');
const dataRoute = require('./routes/data'); // Import your data route

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());

const config = {
  server: 'DESKTOP-M00JICK\\SQLEXPRESS',
  authentication: {
    type: 'default', 
    options: {
      userName: '', // Leave this empty for Windows authentication
      password: '', // Leave this empty for Windows authentication
    },
  },
  options: {
    // Other options
    database: 'First_Test',
    trustServerCertificate: false, // Set to false for remote servers, true for local
    connectTimeout: 30000, 
  },
};

sql.connect(config)
  .then(() => console.log('Connected to SQL Server'))
  .catch(err => console.error('Error connecting to SQL Server', err));

// Mount the data route under the '/api' prefix
app.use('/api', dataRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
