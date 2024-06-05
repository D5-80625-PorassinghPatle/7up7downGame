import axios from 'axios';

const API_URL = 'http://localhost:5000/api/game';

export const rollDice = async () => {
    try {
        const response = await axios.post(`${API_URL}/roll`);
        return response.data;
    } catch (error) {
        console.error('Error rolling dice:', error);
        throw error;
    }
};

export const calculateResult = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/result`, data);
        return response.data;
    } catch (error) {
        console.error('Error calculating result:', error);
        throw error;
    }
};

export const updatePoints = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/update-points`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating points:', error);
        throw error;
    }
};
