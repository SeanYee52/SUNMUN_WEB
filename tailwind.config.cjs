module.exports = {
  content: [
    // Add paths to all your files that contain Tailwind classes
    './docs/*.html', // Broader search if templates are scattered
  ],
  theme: {
    extend: {
        fontFamily: { sans: ['Inter var'] },
    }
  },
  variants: {
    extend: {
     fontWeight: ['hover'],
    }
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/aspect-ratio'),
  ]
}