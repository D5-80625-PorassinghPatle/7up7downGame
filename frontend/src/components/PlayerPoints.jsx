import React from 'react';
import { Typography } from '@mui/material';

const PlayerPoints = ({ points }) => (
    <Typography variant="h5" sx={{ mb: 2 }}>
        Points: {points}
    </Typography>
);

export default PlayerPoints;
