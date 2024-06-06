import React from 'react';
import { Box, Button } from '@mui/material';

const BetOptions = ({ betType, setBetType }) => (
    <Box sx={{ mb: 2 }}>
        <Button 
            variant={betType === '7 low' ? 'contained' : 'outlined'} 
            onClick={() => setBetType( '7 low')}
            sx={{ mr: 1 }}
        >
            7 Low
        </Button>
        <Button 
            variant={betType === '7 heaven' ? 'contained' : 'outlined'} 
            onClick={() => setBetType('7 heaven')}
            sx={{ mr: 1 }}

        >
            7 Heaven 
        </Button>
        <Button 
            variant={betType === '7 up' ? 'contained' : 'outlined'} 
            onClick={() => setBetType('7 up')}
            sx={{ mr: 1 }}

        >
            7 High
        </Button>
    </Box>
);

export default BetOptions;
