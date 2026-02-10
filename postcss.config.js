module.exports = ctx => ({
  map: ctx && ctx.options ? ctx.options.map : false,
  plugins: [require('autoprefixer')]
});
