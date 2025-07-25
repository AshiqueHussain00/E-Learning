/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  theme: {
    fontWeight: {
      thin: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    colors: {
      soft_primary: '#84D187',
      primary: '#00B207',
      hard_primary: '#2C742F',
      warning: '#FF8A00',
      danger: '#EA4B48',
      "light-branding-success": "#00B207",
      "branding-success": '#2C742F',
      "branding-warning": '#FF8A00',
      pink: '#C2185B',

      "green-gray-scale": {
        50: "#EDF2EE",
        400: '#7A997C',
        500: '#618062',
        600: "#406B42",
        700: "#2B572E",
        900: '#002603',
      },
      red: {
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d'
      },
      blue: {
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a'
      },
      green: {
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b'
      },
      yellow: {
        50: '#FCC900',
        100: '#FFFDE7',
        200: '#FFF9C4',
        300: '#FFF59D',
        400: '#FFF176',
        500: '#FFEB3B',
        600: '#FDD835',
        700: '#FBC02D',
        800: '#F9A825',
        900: '#F57F17',
      },
      white: {
        100: '#ffffff',
        200: '#f9fafb',
        300: '#f3f4f6',
        400: '#e5e7eb',
        500: '#d1d5db',
        600: '#9ca3af',
        700: '#6b7280',
        800: '#4b5563',
        900: '#374151'
      },
      black: {
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717'
      },
      gray: {
        50: '#EDF2EE',
        100: '#E6E6E6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#808080',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#1A1A1A'
      },
      greenGray: {
        100: '#edf2f7',
        200: '#e2e8f0',
        300: '#cbd5e0',
        400: '#a0aec0',
        500: '#718096',
        600: '#4a5568',
        700: '#2d3748',
        800: '#1a202c',
        900: '#171923'
      },
    },
    screens: {
      dxs: '300px',
      xxs: '400px',
      xsm: '458px',
      xs: '500px',
      ssm: '600px',
      sm: '640px',
      md: '768px',
      smd: '800px',
      mmd: '860px',
      xmd: '930px',
      lg: '1024px',
      xlg: '1110px',
      xl: '1280px',
      xxl: '1390px',
      '1490px': '1490px',
    },
    extend: {
      animation: {
        html: 'htmlAnimation 2s ease-in-out forwards',
        css: 'cssAnimation 2s ease-in-out forwards',
        javascript: 'javascriptAnimation 2s ease-in-out forwards',
        viteReact: 'viteReactAnimation 2s ease-in-out forwards',
        tailwind: 'tailwindAnimation 2s ease-in-out forwards',
        sql: 'sqlAnimation 2s ease-in-out forwards',
        python: 'pythonAnimation 2s ease-in-out forwards',
        machineLearning: 'machineLearningAnimation 2s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        htmlAnimation: {
          '0%': { width: '0%' },
          '100%': { width: '90%' },
        },
        cssAnimation: {
          '0%': { width: '0%' },
          '100%': { width: '85%' },
        },
        javascriptAnimation: {
          '0%': { width: '0%' },
          '100%': { width: '70%' },
        },
        viteReactAnimation: {
          '0%': { width: '0%' },
          '100%': { width: '75%' },
        },
        tailwindAnimation: {
          '0%': { width: '0%' },
          '100%': { width: '80%' },
        },
        sqlAnimation: {
          '0%': { width: '0%' },
          '100%': { width: '60%' },
        },
        pythonAnimation: {
          '0%': { width: '0%' },
          '100%': { width: '65%' },
        },
        machineLearningAnimation: {
          '0%': { width: '0%' },
          '100%': { width: '50%' },
        },
      },
    },
  },
  plugins: [
    // Add any additional plugins here
  ]
};