/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shine': 'shine 8s ease-in-out infinite',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 0 rgba(16, 185, 129, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' }
        }
      },
      colors: {
        primary: '#081716',
        'gradient-start': '#90FFEE',
        'gradient-end': '#03855C',
        'customStart': '#79F5E9',
        'customEnd': '#02C394',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        clash: ['ClashDisplayVariable', 'sans-serif'],
      },
      backgroundColor: {
        'conic-fill': 'conic-gradient(from 0deg, rgba(0, 0, 0, 0) 48%, #093728 78%, #093728 100%)',
        'button-gradient': `conic-gradient(
          from 181deg at 50% 50%,
          #0F2A23 45deg,
          rgba(67, 194, 160, 0) 281.25deg,
          rgba(10, 56, 47, 0.4) 360deg
        )`,
      },

      backgroundImage: {
        'complex-gradient': 
      'linear-gradient(180deg, rgba(15, 53, 43, 0.3) 0%, #2E5D51 100%), conic-gradient(from 181.06deg at 50% 50%, rgba(47, 140, 137, 0.4) 0deg, rgba(0, 0, 0, 0) 172.66deg, #35826E 281.25deg, rgba(47, 140, 137, 0.4) 360deg)',
      },

      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
      }
    },
  },
  plugins: [ 
  
  ],
}

