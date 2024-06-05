import React from 'react';
import { Button } from '@mui/material';

const RollDiceButton = ({ onRoll }) => (
    <Button 
        variant="contained" 
        color="primary" 
        onClick={onRoll}
        sx={{ mb: 2 }}
    >
        Roll Dice
    </Button>
);

export default RollDiceButton;
