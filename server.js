const fs = require('fs');
const path = require('path');
const {server, router} = require('./servidor/server.js');


router.get('/db', (req, res) => {
  const filePath = path.join(__dirname, "db", "db.json");
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(content, 'utf-8');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
});

  
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
