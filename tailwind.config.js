/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // breakpoints
    screens: {
      sm: '500px',
      md: '640px',
      lg: '1024px',
    },

    extend: {
      height: {
        header: 'var(--header-height)'
      },
      minHeight: {
        footer: 'var(--footer-height)',
      },
      width: {
        "sidebar-extend": 'var(--sidebar-extend)',
        "sidebar-shrink": 'var(--sidebar-shrink)'
      },
      colors: {
        main: "var(--color-main)",
        pri: "var(--color-pri)",
        sec: "var(--color-sec)",
        "danger-bg": "var(--color-danger-bg",
        "danger-text": "var(--color-danger-text)",
      }
    },
  },
  plugins: [],
}