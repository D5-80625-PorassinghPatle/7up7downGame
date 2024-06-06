import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dice1 from '../assets/dice_1.png';
import dice2 from '../assets/dice_2.png';
import dice3 from '../assets/dice_3.png';
import dice4 from '../assets/dice_4.png';
import dice5 from '../assets/dice_5.png';
import dice6 from '../assets/dice_6.png';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = ({ diceValue, rolling, setRolling }) => {
    const [currentImage, setCurrentImage] = useState(diceImages[0]);

    useEffect(() => {
        if (rolling) {
            const interval = setInterval(() => {
                setCurrentImage(diceImages[Math.floor(Math.random() * 6)]);
            }, 100);

            setTimeout(() => {
                clearInterval(interval);
                setCurrentImage(diceImages[diceValue - 1]);
                setRolling(false);
            }, 3000); // Adjusted to 3 seconds for the rolling animation
        }
    }, [rolling, diceValue, setRolling]);

    return (
        <motion.img
            src={currentImage}
            alt={`Dice showing ${diceValue}`}
            style={{ width: '100px', height: '100px' }}
            animate={{ rotate: rolling ? 360 : 0 }}
            transition={{ duration: 3, ease: 'easeInOut' }}
        />
    );
};

export default Dice;
