import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import gameRoutes from './routes/gameRoutes.js';
import path from "path";

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/game', gameRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
})

app.get('/', (req, res) => {
    res.send('Dice Game API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
