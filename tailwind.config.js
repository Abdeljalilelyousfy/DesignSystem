/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // ─── Font Families ────────────────────────────────────────────────
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter:  ['Inter', 'sans-serif'],
        sans:   ['Inter', 'sans-serif'],
      },

      // ─── Font Sizes ───────────────────────────────────────────────────
      fontSize: {
        'heading-5xl': ['72px', { lineHeight: '80px', letterSpacing: '-1px'   }],
        'heading-4xl': ['64px', { lineHeight: '72px', letterSpacing: '-1px'   }],
        'heading-3xl': ['56px', { lineHeight: '64px', letterSpacing: '-1px'   }],
        'heading-2xl': ['48px', { lineHeight: '56px', letterSpacing: '-1px'   }],
        'heading-xl':  ['40px', { lineHeight: '48px', letterSpacing: '-1px'   }],
        'heading-l':   ['32px', { lineHeight: '40px', letterSpacing: '-1px'   }],
        'heading-m':   ['24px', { lineHeight: '32px', letterSpacing: '-0.5px' }],
        'heading-s':   ['20px', { lineHeight: '28px', letterSpacing: '-0.5px' }],
        'heading-xs':  ['16px', { lineHeight: '24px', letterSpacing: '-0.5px' }],
        'heading-2xs': ['14px', { lineHeight: '20px', letterSpacing: '0px'    }],
        'text-xl': ['18px', { lineHeight: '26px', letterSpacing: '0px' }],
        'text-l':  ['16px', { lineHeight: '24px', letterSpacing: '0px' }],
        'text-m':  ['14px', { lineHeight: '20px', letterSpacing: '0px' }],
        'text-s':  ['12px', { lineHeight: '16px', letterSpacing: '0px' }],
        'text-xs': ['10px', { lineHeight: '14px', letterSpacing: '0px' }],
      },

      // ─── Font Weights ─────────────────────────────────────────────────
      fontWeight: {
        regular:  '400',
        semibold: '600',
      },

      // ─── Line Heights ─────────────────────────────────────────────────
      lineHeight: {
        '14': '14px', '16': '16px', '20': '20px', '24': '24px',
        '26': '26px', '28': '28px', '32': '32px', '36': '36px',
        '40': '40px', '48': '48px', '56': '56px', '64': '64px',
        '72': '72px', '80': '80px',
      },

      // ─── Letter Spacing ───────────────────────────────────────────────
      letterSpacing: {
        'tight-1':  '-1px',
        'tight-05': '-0.5px',
        'normal':   '0px',
      },

      // ─── Breakpoints ──────────────────────────────────────────────────
      // Source: Figma WDS.Foundations: Layout and Breakpoints (node 254-6897)
      // 4 breakpoints: Mobile(S/393) TabletPortrait(M/768) TabletLandscape(L/1024) Desktop(XL/1440)
      screens: {
        's':  '393px',   // Mobile
        'm':  '768px',   // Tablet Portrait  — 8-col grid, 32px margin
        'l':  '1024px',  // Tablet Landscape — 12-col grid
        'xl': '1440px',  // Desktop          — 12-col grid, 80px margin
      },

      // ─── Box Shadows ──────────────────────────────────────────────────
      // Source: Figma WDS.Foundations: Semantic color (node 310-6103)
      // Surface elevation levels — L0 (flat) → L1 (subtle) → L2 (elevated)
      boxShadow: {
        'l0': 'none',
        // L1: subtle — two layered shadows
        'l1': '0 0 4px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.10)',
        // L2: elevated — two layered shadows
        'l2': '0 0 10px rgba(0,0,0,0.08), 0 12px 24px rgba(0,0,0,0.10)',
      },

      // ─── Spacing ──────────────────────────────────────────────────────
      // Source: Figma WDS.Foundations: Spacing (node 247-2093)
      // 8-point system — base 8px × multiplier
      // Token names match Figma t-shirt sizing (2xs → 12xl)
      spacing: {
        '2xs':  '2px',   // ×0.25
        'xs':   '4px',   // ×0.5
        's':    '8px',   // ×1
        'm':    '12px',  // ×1.5
        'l':    '16px',  // ×2
        'xl':   '24px',  // ×3
        '2xl':  '32px',  // ×4
        '3xl':  '40px',  // ×5
        '4xl':  '48px',  // ×6
        '5xl':  '56px',  // ×7
        '6xl':  '64px',  // ×8
        '7xl':  '72px',  // ×9
        '8xl':  '80px',  // ×10
        '9xl':  '88px',  // ×11
        '10xl': '96px',  // ×12
        '11xl': '104px', // ×13
        '12xl': '112px', // ×14
      },

      // ─── Colors ───────────────────────────────────────────────────────
      // Source: Figma WDS.Foundations: Color (node 310-5905)
      // Semantic tokens live in colors.css as CSS custom properties
      colors: {
        // Primitive palette — Brand
        brand: {
          100: '#d5e0eb',
          200: '#aac1d6',
          300: '#80a2c2',
          400: '#5583ad',
          500: '#2b6499',
          600: '#22507a',
          700: '#1a3c5c',
          800: '#11283d',
          900: '#09141f',
        },
        // Primitive palette — BrandSecondary (same hue, available for theming)
        'brand-secondary': {
          100: '#d5e0eb',
          200: '#aac1d6',
          300: '#80a2c2',
          400: '#5583ad',
          500: '#2b6499',
          600: '#22507a',
          700: '#1a3c5c',
          800: '#11283d',
          900: '#09141f',
        },
        // Primitive palette — Neutral
        neutral: {
          50:  '#f1f2f4',
          100: '#e1e4e9',
          150: '#d2d6dd',
          200: '#c2c8d1',
          250: '#b2bac6',
          300: '#a3acba',
          350: '#939eae',
          400: '#8390a2',
          450: '#748297',
          500: '#64748b',
          550: '#5a687d',
          600: '#505d6f',
          650: '#3c4553',
          700: '#323945',
          750: '#272e37',
          800: '#1d2229',
          850: '#13161b',
          900: '#090b0d',
        },
        // Primitive palettes — Chromatic
        blue: {
          100: '#d6ddff', 200: '#adbbff', 300: '#8599ff', 400: '#5c77ff',
          500: '#3355ff', 600: '#2944cc', 700: '#1f3399', 800: '#142266', 900: '#0a1133',
        },
        purple: {
          100: '#e4d6ff', 200: '#c9adff', 300: '#ad85ff', 400: '#925cff',
          500: '#7733ff', 600: '#5f29cc', 700: '#471f99', 800: '#301466', 900: '#180a33',
        },
        violet: {
          100: '#f1d6ff', 200: '#e4adff', 300: '#d685ff', 400: '#c95cff',
          500: '#bb33ff', 600: '#9629cc', 700: '#701f99', 800: '#4b1466', 900: '#250a33',
        },
        red: {
          100: '#facccc', 200: '#f59999', 300: '#ef6666', 400: '#ea3333',
          500: '#e50000', 600: '#b70000', 700: '#890000', 800: '#5c0000', 900: '#2e0000',
        },
        pink: {
          100: '#ffd6dd', 200: '#ffadbb', 300: '#ff8599', 400: '#ff5c77',
          500: '#ff3355', 600: '#cc2944', 700: '#991f33', 800: '#661422', 900: '#330a11',
        },
        orange: {
          100: '#ffe6cc', 200: '#ffcc99', 300: '#ffb366', 400: '#ff9933',
          500: '#ff8000', 600: '#cc6600', 700: '#994d00', 800: '#663300', 900: '#331a00',
        },
        yellow: {
          100: '#fff5cc', 200: '#ffeb99', 300: '#ffe066', 400: '#ffd633',
          500: '#ffcc00', 600: '#cca300', 700: '#997a00', 800: '#665200', 900: '#332900',
        },
        green: {
          100: '#ccebd6', 200: '#99d6ad', 300: '#66c285', 400: '#33ad5c',
          500: '#009933', 600: '#007a29', 700: '#005c1f', 800: '#003d14', 900: '#001f0a',
        },
        teal: {
          100: '#ccf5f5', 200: '#99ebeb', 300: '#66e0e0', 400: '#33d6d6',
          500: '#00cccc', 600: '#00a3a3', 700: '#007a7a', 800: '#005252', 900: '#002929',
        },
        cyan: {
          100: '#cceeff', 200: '#99ddff', 300: '#66ccff', 400: '#33bbff',
          500: '#00aaff', 600: '#0088cc', 700: '#006699', 800: '#004466', 900: '#002233',
        },
        // Semantic tokens (CSS-var–backed, light mode defaults)
        // Full light/dark definitions live in src/styles/colors.css
        content: {
          primary:          'var(--color-content-primary)',
          secondary:        'var(--color-content-secondary)',
          tertiary:         'var(--color-content-tertiary)',
          'primary-inverse':'var(--color-content-primary-inverse)',
          disabled:         'var(--color-content-disabled)',
          brand:            'var(--color-content-brand)',
          info:             'var(--color-content-info)',
          warning:          'var(--color-content-warning)',
          error:            'var(--color-content-error)',
          success:          'var(--color-content-success)',
        },
        background: {
          primary:   'var(--color-bg-primary)',
          hover:     'var(--color-bg-hover)',
          pressed:   'var(--color-bg-pressed)',
          selected:  'var(--color-bg-selected)',
          disabled:  'var(--color-bg-disabled)',
          inverse:   'var(--color-bg-inverse)',
          brand:     'var(--color-bg-brand)',
          info:      'var(--color-bg-info)',
          'info-subtle':    'var(--color-bg-info-subtle)',
          warning:          'var(--color-bg-warning)',
          'warning-subtle': 'var(--color-bg-warning-subtle)',
          error:            'var(--color-bg-error)',
          'error-subtle':   'var(--color-bg-error-subtle)',
          success:          'var(--color-bg-success)',
          'success-subtle': 'var(--color-bg-success-subtle)',
        },
        border: {
          primary:   'var(--color-border-primary)',
          secondary: 'var(--color-border-secondary)',
          tertiary:  'var(--color-border-tertiary)',
          disabled:  'var(--color-border-disabled)',
          brand:     'var(--color-border-brand)',
          focus:     'var(--color-border-focus)',
          info:      'var(--color-border-info)',
          warning:   'var(--color-border-warning)',
          error:     'var(--color-border-error)',
          success:   'var(--color-border-success)',
        },
      },
    },
  },
  plugins: [],
}
