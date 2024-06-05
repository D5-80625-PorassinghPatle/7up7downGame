import React from 'react';
import { Box, Button } from '@mui/material';

const BetOptions = ({ betType, setBetType }) => (
    <Box sx={{ mb: 2 }}>
        <Button 
            variant={betType === 'low' ? 'contained' : 'outlined'} 
            onClick={() => setBetType( 'low')}
            sx={{ mr: 1 }}
        >
            7 Low
        </Button>
        <Button 
            variant={betType === 'high' ? 'contained' : 'outlined'} 
            onClick={() => setBetType('high')}
        >
            7 Heaven 
        </Button>
    </Box>
);

export default BetOptions;
