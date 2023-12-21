/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Cinzel: 'Cinzel serif',
            },
            width: {
                main: '1320px',
            },
            backgroundColor: {
                main: '#4A60A1',
            },
            colors: {
                primary_900: '#0F1320',
                primary_800: '#1E2640',
                primary_700: '#2C3A61',
                primary_600: '#3B4D81',
                primary_500: '#4A60A1',
                primary_400: '#6E80B4',
                primary_300: '#92A0C7',
                primary_200: '#B7BFD9',
                primary_100: '#DBDFEC',
                primary_50: '#EDEFF6',
            },
        },
    },
    plugins: [],
};
