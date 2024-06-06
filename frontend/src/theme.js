import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark', // Enable dark mode
        // You can customize other palette properties here
        primary: {
            main: '#11212A', // Example primary color
        },
        secondary: {
            main: '#f50057', // Example secondary color
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif', // Example typography configuration
    },
    // You can add other theme properties as needed
});

export default theme;
