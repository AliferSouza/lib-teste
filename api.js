const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const filePath = path.join(__dirname, 'data.json');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      res.status(500).json({ error: 'Erro ao ler o arquivo' });
    } else {
      const jsonData = JSON.parse(data);
      res.status(200).json(jsonData);
    }
  });
};
