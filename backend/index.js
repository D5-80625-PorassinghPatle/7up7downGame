import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import gameRoutes from './routes/gameRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/game', gameRoutes);

app.get('/', (req, res) => {
    res.send('Dice Game API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
