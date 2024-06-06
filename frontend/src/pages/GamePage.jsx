import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
        <div style={styles.container}>
            <div style={styles.gameBox}>
                <PlayerPoints points={points} />
                <BetOptions betType={betType} setBetType={(value) => dispatch(setBetType(value))} />
                <BetAmount betAmount={betAmount} setBetAmount={(value) => dispatch(setBetAmount(value))} />
                <RollDiceButton onRoll={handleRoll} />
                <DiceResult dice1={dice1} dice2={dice2} loading={loading} />
                {result && <h2>{result === 'win' ? 'You Win!' : 'You Lose!'}</h2>}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        backgroundImage: 'url(https://i.pinimg.com/564x/8f/d4/a4/8fd4a4d12c6f10567f8422b1c964ee13.jpg)', // Change this to the path of your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    gameBox: {
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%',
    },
};

export default GamePage;
