import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello World! Server is working.');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Test server is running on http://0.0.0.0:${PORT}`);
});
