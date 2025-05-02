module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
}
  
const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    purgecss({
      content: ['./docs/**/*.html', './docs/**/*.js'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
