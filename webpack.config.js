const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  // jsx 사용하기 위해 resolve 를 사용 뒤에 jsx 안붙혀줘도 됨
  resolve : {
    extensions : ['.js','.jsx']
  },
  entry: "./src/index",
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
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  devServer: {
    host: "localhost", // 개발 서버의 url
    port: port, // basically 3000
    open: false, // 서버 실행시 브라우저 자동 실행할건지
    hot: true,
    historyApiFallback: true,
  },
};
