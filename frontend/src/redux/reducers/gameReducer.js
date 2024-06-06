// redux/reducers/gameReducer.js
const initialState = {
    points: 5000,
    betAmount: 100,
    betType: '7 up',
    dice1: null,
    dice2: null,
    result: null,
    loading: false,
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BET_AMOUNT':
            return { ...state, betAmount: action.payload };
        case 'SET_BET_TYPE':
            return { ...state, betType: action.payload };
        case 'SET_DICE_RESULT':
            return { ...state, dice1: action.payload.dice1, dice2: action.payload.dice2 };
        case 'SET_RESULT':
            return { ...state, result: action.payload };
        case 'SET_POINTS':
            return { ...state, points: action.payload };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};

export const setBetAmount = (amount) => ({ type: 'SET_BET_AMOUNT', payload: amount });
export const setBetType = (type) => ({ type: 'SET_BET_TYPE', payload: type });
export const setDiceResult = (result) => ({ type: 'SET_DICE_RESULT', payload: result });
export const setResult = (result) => ({ type: 'SET_RESULT', payload: result });
export const setPoints = (points) => ({ type: 'SET_POINTS', payload: points });
export const setLoading = (loading) => ({ type: 'SET_LOADING', payload: loading });

export default gameReducer;
