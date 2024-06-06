import express from 'express';
import { rollDiceHandler, calculateResultHandler, updatePointsHandler } from '../controllers/gameController.js';

const router = express.Router();

router.get('/roll-dice', rollDiceHandler);
router.post('/calculate-result', calculateResultHandler);
router.post('/update-points', updatePointsHandler);

export default router;
