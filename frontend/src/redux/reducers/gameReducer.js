import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    points: 5000,
    betAmount: 100,
    betType: '7',
    dice1: null,
    dice2: null,
    result: '',
    loading: false,
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setBetAmount(state, action) {
            state.betAmount = action.payload;
        },
        setBetType(state, action) {
            state.betType = action.payload;
        },
        setDiceResult(state, action) {
            state.dice1 = action.payload.dice1;
            state.dice2 = action.payload.dice2;
        },
        setResult(state, action) {
            state.result = action.payload;
        },
        setPoints(state, action) {
            state.points = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
    },
});

export const { setBetAmount, setBetType, setDiceResult, setResult, setPoints, setLoading } = gameSlice.actions;
export default gameSlice.reducer;
