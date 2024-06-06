import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BetOptions from '../components/BetOptions';
import BetAmount from '../components/BetAmount';
import Dice from '../components/Dice';
import PlayerPoints from '../components/PlayerPoints';
import RollDiceButton from '../components/RollDiceButton';
import { rollDice, calculateResult, updatePoints } from '../services/api';
import { setBetAmount, setBetType, setDiceResult, setResult, setPoints, setLoading } from '../redux/reducers/gameReducer';
import './GamePage.css';

const GamePage = () => {
    const dispatch = useDispatch();
    const { points, betAmount, betType, dice1, dice2, result, loading } = useSelector(state => state.game);
    const [rolling, setRolling] = useState(false);
    const [disappear, setDisappear] = useState(false);
    const [insufficientPoints, setInsufficientPoints] = useState(false);

    const handleRoll = async () => {
        if (points < betAmount) {
            setInsufficientPoints(true);
            return;
        }

        dispatch(setLoading(true));
        setRolling(true);
        setDisappear(true);

        setTimeout(() => setDisappear(false), 500);

        const diceData = await rollDice();
        dispatch(setDiceResult(diceData));

        setTimeout(async () => {
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
        }, 3000);
    };

    return (
        <div className="container">
            <h1 className="casinoHeading">7 HEAVEN</h1>
            <div className="gameBox">
                <PlayerPoints points={points} />
                <BetOptions betType={betType} setBetType={(value) => dispatch(setBetType(value))} />
                <BetAmount betAmount={betAmount} setBetAmount={(value) => dispatch(setBetAmount(value))} points={points} />
                <RollDiceButton onRoll={handleRoll} disabled={insufficientPoints || loading} />
                <div className="diceContainer">
                    <Dice diceValue={dice1} rolling={rolling} setRolling={setRolling} />
                    <Dice diceValue={dice2} rolling={rolling} setRolling={setRolling} />
                </div>
                <div className="resultContainer">
                    {result && <h2 className={disappear ? 'disappear' : ''}>{result === 'win' ? 'You Win!' : 'You Lose!'}</h2>}
                </div>
                <div>
                {insufficientPoints && <p className="insufficientPoints">Please add more points to place this bet.</p>}

                </div>
            </div>
        </div>
    );
};

export default GamePage;
