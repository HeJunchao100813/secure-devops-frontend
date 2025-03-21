const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

app.get('/', (req, res) => {
  res.send('Welcome to Secure DevOps Backend!');
});

app.get('/user', (req, res) => {
  const name = req.query.name;
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  db.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
