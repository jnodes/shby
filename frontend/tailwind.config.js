/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Cormorant Garamond', 'Georgia', 'serif'],
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                xl: 'var(--radius-lg)',
                '2xl': 'var(--radius-xl)',
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    light: 'hsl(var(--primary-light))',
                    glow: 'hsl(var(--primary-glow))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    light: 'hsl(var(--secondary-light))',
                    dark: 'hsl(var(--secondary-dark))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    dark: 'hsl(var(--accent-dark))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
            },
            backgroundImage: {
                'gradient-primary': 'var(--gradient-primary)',
                'gradient-gold': 'var(--gradient-gold)',
                'gradient-teal': 'var(--gradient-teal)',
                'gradient-subtle': 'var(--gradient-subtle)',
                'gradient-overlay': 'var(--gradient-overlay)',
            },
            boxShadow: {
                'elegant': 'var(--shadow-elegant)',
                'gold': 'var(--shadow-gold)',
                'heavy': 'var(--shadow-heavy)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'fade-in': {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-in-right': {
                    from: { opacity: '0', transform: 'translateX(40px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.6s ease-out',
                'slide-in-right': 'slide-in-right 0.6s ease-out',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};