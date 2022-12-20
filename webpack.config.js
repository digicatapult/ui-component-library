module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    loaders: [
      // Typescript
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },
}
