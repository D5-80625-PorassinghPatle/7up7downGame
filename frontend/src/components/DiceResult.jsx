import React from 'react';
import { Box, Typography } from '@mui/material';

const DiceResult = ({ dice1, dice2, loading }) => (
    <Box sx={{ mb: 2 }}>
        {loading ? (
            <Typography variant="h6">Rolling...</Typography>
        ) : (
            <Typography variant="h6">
                Dice Results: {dice1} and {dice2}
            </Typography>
        )}
    </Box>
);

export default DiceResult;
