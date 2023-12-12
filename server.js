import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '/dist'), { index: false }));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening on port 3000');
});
