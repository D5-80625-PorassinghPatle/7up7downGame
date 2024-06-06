import React from 'react';
import { Box, Button } from '@mui/material';

const BetAmount = ({ betAmount, setBetAmount }) => (
    <Box sx={{ mb: 2 }}>
        <Button 
            variant={betAmount === 100 ? 'contained' : 'outlined'} 
            onClick={() => setBetAmount(100)}
            sx={{ mr: 1 }}
        >
            100
        </Button>
        <Button 
            variant={betAmount === 200 ? 'contained' : 'outlined'} 
            onClick={() => setBetAmount(200)}
            sx={{ mr: 1 }}
        >
            200
        </Button>
        <Button 
            variant={betAmount === 500 ? 'contained' : 'outlined'} 
            onClick={() => setBetAmount(500)}
        >
            500
        </Button>
    </Box>
);

export default BetAmount;
