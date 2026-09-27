import type { Config } from 'tailwindcss';

/**
 * Design tokens are driven by CSS variables defined in app/globals.css so brand
 * colours can be re-themed centrally (see data/site.config.ts for brand values).
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--brand)',
          50: 'var(--brand-50)',
          100: 'var(--brand-100)',
          600: 'var(--brand-600)',
          700: 'var(--brand-700)',
          800: 'var(--brand-800)',
          900: 'var(--brand-900)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          600: 'var(--accent-600)',
          700: 'var(--accent-700)',
        },
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        surface: 'var(--surface)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-h1': ['clamp(2.25rem, 1.6rem + 3.2vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'fluid-h2': ['clamp(1.75rem, 1.3rem + 2vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'fluid-h3': ['clamp(1.25rem, 1.05rem + 0.9vw, 1.75rem)', { lineHeight: '1.2' }],
      },
      maxWidth: {
        content: '1440px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 24, 40, 0.04), 0 8px 24px rgba(16, 24, 40, 0.06)',
        'card-hover': '0 2px 4px rgba(16, 24, 40, 0.06), 0 16px 40px rgba(16, 24, 40, 0.12)',
        header: '0 1px 0 rgba(16, 24, 40, 0.06), 0 6px 20px rgba(16, 24, 40, 0.06)',
      },
      borderRadius: {
        card: '0.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
