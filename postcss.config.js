module.exports = {
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    require('postcss-css-variables')({ /* ...options */ }),
    require('autoprefixer')({ /* ...options */ })
  ]
}
