const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "errordb.cuicv41zhcyy.us-east-1.rds.amazonaws.com",
    user: "errorDB",
    password: "sampleDB",
    database: "error-form"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

app.post('/submit-report', (req, res) => {
    const { firstName, lastName, email, message } = req.body;
    console.log('Received values:', { firstName, lastName, email, message });
    const sql = "INSERT INTO reports (`firstname`, `lastname`, `email`, `message`) VALUES (?, ?, ?, ?)";
    const values = [ firstName, lastName, email, message ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error inserting data into database:', err);
            return res.json("Error");
        } 
        else {
            console.log('Report submitted successfully');
            return res.json(data);
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', () => {
    db.end((err) => {
      if (err) {
        console.error('Error closing MySQL connection:', err);
      } else {
        console.log('MySQL connection closed.');
        process.exit();
      }
    });
  });
