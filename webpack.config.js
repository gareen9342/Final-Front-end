const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
  // 21T
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  // 72G
  devServer: {
    host: "localhost", // 개발 서버의 url
    port: port, // basically 3000
    open: true, // 서버 실행시 브라우저 자동 실행할건지
    hot: true,
    historyApiFallback: true,
  },
};
