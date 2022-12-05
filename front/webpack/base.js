const webpack = require("webpack");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(xml|mp3|ogg|mp4)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(gif|png|jpe?g|svg|data|wasm)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: { noEmit: false },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  devServer: {
    proxy: {
      "/api": "http://localhost:3000", // bannybunny 프로젝트의 node server 포트번호
    },
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, "../"), // 성공적으로 다시 빌드 한 후 webpack의 output.path에있는 모든 빌드 폴더를 제거 및 정리
    }),
    new CopyWebpackPlugin({
      // CopyWebpackPlugin: 그대로 복사할 파일들을 설정하는 플러그인
      patterns: [
        // { from: "./src/images", to: "./images" },
        { from: "./src/models", to: "./models" },
        { from: "./src/videos", to: "./videos" },
        { from: "./src/webGl/Build", to: "./Build" },
        { from: "./src/webGl/StreamingAssets", to: "./StreamingAssets" },
      ],
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
    }),
    new HtmlWebpackPlugin({
      template: "./index.html", // 빌드한 결과물을 HTML 파일로 생성해주는 Plugin
    }),
    new Dotenv(), // .env에 있는 변수를 가져오는 Plugin
    new MiniCssExtractPlugin(), // 별도로 css 파일을 만들어서 빌드하는 Plugin
  ],
};
