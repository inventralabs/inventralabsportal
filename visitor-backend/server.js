const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Karthik@517420S',
  database: 'inventra_db'
});

app.get('/api/visit', (req, res) => {
  db.query('SELECT count FROM visitor_stats WHERE id = 1', (err, results) => {
    if (err) return res.status(500).send(err);

    const current = results[0].count;
    const updated = current + 1;

    db.query('UPDATE visitor_stats SET count = ? WHERE id = 1', [updated], (err2) => {
      if (err2) return res.status(500).send(err2);
      res.json({ count: updated });
    });
  });
});

app.listen(PORT, () => console.log(` Backend running on http://localhost:${PORT}`));
