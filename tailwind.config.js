/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#00ff84', // Neon Green from template
                'dark-bg': '#0a0a0a', // Deep black/gray
                'card-bg': '#1a1a1a', // Slightly lighter for cards
                'text-gray': '#a1a1aa',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Professional font
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
