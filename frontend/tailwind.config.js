/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './mdx-components.jsx'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                sans: ["var(--var-outfit)", "var(--var-inter)", "sans-serif"],
                outfit: ["var(--var-outfit)", "sans-serif"],
                inter: ["var(--var-inter)", "sans-serif"],
                fredoka: ["var(--var-fredoka)", "sans-serif"],
            },
            colors: {
                hydro: {
                    light: "#8761f1",
                    dark: "#6749b9",
                    textDark: "#cfc7ff",
                    textLight: "#ffffff",
                }
            }
        },
    },
    plugins: [],
}
