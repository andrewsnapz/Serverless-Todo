const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "/src/index.js"),
  },
  output: {
    filename: "static/js/build.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: path.resolve(__dirname, "dist"),
    assetModuleFilename: () => {
      return `static/media/[name].[hash][ext][query]`;
    },
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|woff|woff2|eot|ttf|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "/src/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/app.css",
      chunkFilename: "static/css/app.map.css",
    }),
  ],
};
