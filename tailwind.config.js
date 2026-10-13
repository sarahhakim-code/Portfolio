/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        universe: {
          DEFAULT: '#0a0a0a',
          card: '#121217',
          light: '#18181f',
          border: '#24242d',
        },
        neon: {
          red: '#ff1f3d',
          cyan: '#00e5ff',
          yellow: '#ffe600',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Anton', 'sans-serif'],
        sans: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'comic': '4px 4px 0px 0px #000000',
        'comic-red': '4px 4px 0px 0px #ff1f3d',
        'comic-cyan': '4px 4px 0px 0px #00e5ff',
        'comic-yellow': '4px 4px 0px 0px #ffe600',
        'comic-lg': '8px 8px 0px 0px #000000',
        'comic-lg-red': '8px 8px 0px 0px #ff1f3d',
        'comic-lg-cyan': '8px 8px 0px 0px #00e5ff',
        'glow-red': '0 0 25px rgba(255, 31, 61, 0.55)',
        'glow-cyan': '0 0 25px rgba(0, 229, 255, 0.55)',
      },
      animation: {
        'marquee-left': 'marqueeLeft 25s linear infinite',
        'marquee-right': 'marqueeRight 25s linear infinite',
        'glitch': 'glitch 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
