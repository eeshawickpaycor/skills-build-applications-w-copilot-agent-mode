import express from 'express';
import cors from 'cors';
import { connectDB } from './db';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API is running!' });
});

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});
