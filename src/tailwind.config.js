/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        container: {
            center: true,
            screens: {
                'sm': "640px",
                'md': "768px",
                'lg': "1024px",
                'xl': "1280px",
                '2xl': "1400px"
            }
        },
        extend: {
            colors: {
                border: '#e7e0eb',
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                }
            }
        }
    }
}
