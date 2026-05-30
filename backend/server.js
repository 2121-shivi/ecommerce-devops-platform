const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root123',
    database: 'ecommerce'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
    res.json({
        application: 'E-Commerce Platform',
        status: 'Running',
        database: 'Connected',
        version: '2.1'
    });
});

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(results);
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
