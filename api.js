const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'data.json');
    const data = await fs.promises.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    res.status(200).json(jsonData);
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
    res.status(500).json({ error: 'Erro ao ler o arquivo' });
  }
};
