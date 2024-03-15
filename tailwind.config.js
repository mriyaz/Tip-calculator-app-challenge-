/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'strong-cyan': 'hsl(172, 67%, 45%)',

        // Neutral colors
        'custom-very-dark-cyan': 'hsl(183, 100%, 15%)',
        'custom-dark-grayish-cyan': 'hsl(186, 14%, 43%)',
        'custom-grayish-cyan': 'hsl(184, 14%, 56%)',
        'custom-light-grayish-cyan': 'hsl(185, 41%, 84%)',
        'custom-very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
        'custom-white': 'hsl(0, 0%, 100%)',
      },
      fontSize: {
        // Custom font size for form inputs
        'custom-size': '24px',
      },
      fontFamily: {
        // Custom font family
        'custom': ['"Space Mono"', 'monospace'],
      },
      fontWeight: {
        // Custom font weight
        'custom-weight': 700, // Assuming you want to use 'bold' as the key for weight 700
      }


    },
  },
  plugins: [],
}

