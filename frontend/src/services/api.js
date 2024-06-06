// services/api.js
const API_URL = 'http://localhost:5000/api/game';

export const rollDice = async () => {
    try {
        const response = await fetch(`${API_URL}/roll-dice`);
        if (!response.ok) throw new Error('Failed to roll dice');
        return response.json();
    } catch (error) {
        console.error('Error rolling dice:', error);
    }
};

export const calculateResult = async (data) => {
    try {
        const response = await fetch(`${API_URL}/calculate-result`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to calculate result');
        return response.json();
    } catch (error) {
        console.error('Error calculating result:', error);
    }
};

export const updatePoints = async (data) => {
    try {
        const response = await fetch(`${API_URL}/update-points`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to update points');
        return response.json();
    } catch (error) {
        console.error('Error updating points:', error);
    }
};
