import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/gameReducer';

export const store = configureStore({
    reducer: {
        game: gameReducer,
    },
});
