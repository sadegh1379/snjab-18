module.exports = {
  rules: [
    {
      test: /\.(ts|tsx|js|jsx)$/,
      exclude: /node_modules/,
      use: "ts-loader",
    },
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    fallback: {
      os: require.resolve("os-browserify/browser"),
    },
  },
};
