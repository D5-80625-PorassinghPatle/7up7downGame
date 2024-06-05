import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import BetOptions from '../components/BetOptions';
import BetAmount from '../components/BetAmount';
import DiceResult from '../components/DiceResult';
import PlayerPoints from '../components/PlayerPoints';
import RollDiceButton from '../components/RollDiceButton';
import { rollDice, calculateResult, updatePoints } from '../services/api';
import { setBetAmount, setBetType, setDiceResult, setResult, setPoints, setLoading } from '../redux/reducers/gameReducer';

const GamePage = () => {
    const dispatch = useDispatch();
    const { points, betAmount, betType, dice1, dice2, result, loading } = useSelector(state => state.game);

    const handleRoll = async () => {
        dispatch(setLoading(true));
        const diceData = await rollDice();
        dispatch(setDiceResult(diceData));

        const resultData = await calculateResult({
            betAmount,
            betType,
            dice1: diceData.dice1,
            dice2: diceData.dice2,
        });

        dispatch(setResult(resultData.result));

        const pointsData = await updatePoints({
            currentPoints: points,
            pointsChange: resultData.pointsChange,
        });

        dispatch(setPoints(pointsData.newPoints));
        dispatch(setLoading(false));
    };

    return (
        <div className='game-container1'>
        <Container maxWidth="sm" sx={{ py: 3 }}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                <PlayerPoints points={points} />
                <BetOptions betType={betType} setBetType={(value) => dispatch(setBetType(value))} />
                <BetAmount betAmount={betAmount} setBetAmount={(value) => dispatch(setBetAmount(value))} />
                <RollDiceButton onRoll={handleRoll} />
                <DiceResult dice1={dice1} dice2={dice2} loading={loading} />
                {result && (
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        {result === 'win' ? 'You Win!' : 'You Lose!'}
                    </Typography>
                )}
            </Paper>
        </Container>
        </div>
    );
};

export default GamePage;
