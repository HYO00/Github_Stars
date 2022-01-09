const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //설치한 웹팩 html 플러그인을 불러온다.

module.exports = {
  //entry 시작파일 output 결과물
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), //현재경로 하위 dist 폴더를 의미
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ], //option으로 template  기존의 만들어 놨던 파일을 이용해서 html 파일을 만들어준다.
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
};
