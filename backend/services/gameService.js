// services/gameService.js

export const rollDice = () => {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    return { dice1, dice2 };
};

export const calculateResult = (betAmount, betType, dice1, dice2) => {
    const sum = dice1 + dice2;
    let result = 'lose';
    let pointsChange = -betAmount;
    console.log(betAmount, betType, dice1, dice2);

    if ((betType === '7 up' && sum > 7) || (betType === '7 low' && sum < 7)) {
        result = 'win';
        pointsChange = betAmount * 2;
    } else if (betType === '7 heaven' && sum === 7) {
        result = 'win';
        pointsChange = betAmount * 5;
    }

    console.log(result);

    return { result, pointsChange };
};

export const updatePoints = (currentPoints, pointsChange) => {
    const newPoints = currentPoints + pointsChange;
    return { newPoints };
};
