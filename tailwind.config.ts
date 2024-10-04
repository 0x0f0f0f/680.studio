import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  prefix: '',
  theme: {
    zIndex: {
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
      auto: 'auto',
      '25': '25',
      '75': '75',
      '100': '100',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-text-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-text-shadow-color)',
        lg: '0 8px 24px var(--tw-text-shadow-color)',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      keyframes: {
        blur: {
          '0%': {
            filter: 'blur(5px)',
            opacity: '0',
            transform: 'translate(0, 15px)',
          },
          '100%': { filter: 'blur(0px)' },
        },
        'blur-20': {
          '0%': {
            filter: 'blur(5px)',
            opacity: '0',
            transform: 'translate(0, 15px)',
          },
          '100%': { filter: 'blur(0px)', opacity: '20' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        pulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 var(--pulse-color)' },
          '50%': { boxShadow: '0 0 0 8px var(--pulse-color)' },
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)',
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)',
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)',
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)',
          },
        },
        slide: {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        pulse: 'pulse var(--duration) ease-out infinite',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        slide: 'slide var(--speed) ease-in-out infinite alternate',
        blur: 'blur 0.8s ease-in-out',
        'blur-20': 'blur 0.8s ease-in-out',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%', // add required value here
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      const shadowColor = 'rgba(0, 0, 0, 0.7)'
      const shadowClasses = {
        'text-shadow': {
          textShadow: `${shadowColor} 0 2px 4px`,
        },
        'text-shadow-sm': {
          textShadow: `${shadowColor} 0 1px 2px`,
        },
        'text-shadow-lg': {
          textShadow: `${shadowColor} 0 8px 24px`,
        },
      }
      Object.entries(shadowClasses).forEach(([className, styles]) => {
        addUtilities({ [className]: styles })
      })
    },
  ],
} satisfies Config

export default config
