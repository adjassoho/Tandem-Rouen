import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "var(--primary)",
                "background-light": "var(--background-light)",
                "background-dark": "var(--background-dark)",
                "surface-dark": "var(--surface-dark)",
                "gold-accent": "#d4a00b",
                "gold": "#D4AF37",
                "background-card": "#231e19",
                "secondary-text": "#b9a89d",
                "surface-accent": "#2a261c",
            },
            fontFamily: {
                "display": ["var(--font-display)", "serif"],
                "sans": ["var(--font-sans)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            animation: {
                "shimmer": "shimmer 3s infinite",
                "fade-in-up": "fadeInUp 1s ease-out forwards",
                "pulse-gold": "pulse-gold 2s infinite",
                "subtle-pulse": "subtle-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "slideIn": "slideIn 0.5s ease-out",
            },
            keyframes: {
                shimmer: {
                    "0%": { backgroundPosition: "-100% 0" },
                    "100%": { backgroundPosition: "100% 0" },
                },
                fadeInUp: {
                    "from": { opacity: "0", transform: "translateY(20px)" },
                    "to": { opacity: "1", transform: "translateY(0)" },
                },
                "pulse-gold": {
                    "0%": { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0.4)" },
                    "70%": { boxShadow: "0 0 0 10px rgba(212, 175, 55, 0)" },
                    "100%": { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0)" },
                },
                "subtle-pulse": {
                    "0%, 100%": { opacity: "1", transform: "scale(1)" },
                    "50%": { opacity: "0.8", transform: "scale(1.1)" },
                },
                slideIn: {
                    "0%": { transform: "translateX(100%)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                }
            },
            boxShadow: {
                'glow': '0 0 15px -3px rgba(212, 98, 17, 0.3)',
                'gold-glow': '0 0 15px -3px rgba(212, 175, 55, 0.2)',
            }
        },
    },
    plugins: [],
};
export default config;
