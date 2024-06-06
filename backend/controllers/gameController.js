// controllers/gameController.js
import { rollDice, calculateResult, updatePoints } from '../services/gameService.js';

export const rollDiceHandler = (req, res) => {
    const dice = rollDice();
    res.json(dice);
};

export const calculateResultHandler = (req, res) => {
    const { betAmount, betType, dice1, dice2 } = req.body;
    const result = calculateResult(betAmount, betType, dice1, dice2);
    res.json(result);
};

export const updatePointsHandler = (req, res) => {
    const { currentPoints, pointsChange } = req.body;
    const points = updatePoints(currentPoints, pointsChange);
    res.json(points);
};
