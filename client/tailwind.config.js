/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#F84464', // BookMyShow-like pink/red
                    hover: '#E53B5A',
                    light: '#FCE7EB',
                },
                dark: '#333333',
                base: '#f4f4f4',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
