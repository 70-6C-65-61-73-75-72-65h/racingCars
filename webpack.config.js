const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, options) => ({
  entry: ["./src/index.tsx", "./style/index.scss"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv(),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".svg"],
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@static": path.resolve(__dirname, "static"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@actions": path.resolve(__dirname, "src/actions"),
    },
  },
  watchOptions: { ignored: /node_modules/, aggregateTimeout: 300, poll: 500 },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          "webpack-import-glob-loader",
        ],
      },
      // images
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: env === "production" ? "[name]-[hash].[ext]" : "[name].[ext]",
          publicPath: "/static/images",
        },
      },
      // icons
      {
        test: /\.(svg)$/i,
        use: ["@svgr/webpack", "file-loader"],

        options: {
          name: env === "production" ? "[name]-[hash].[ext]" : "[name].[ext]",
          publicPath: (url, resourcePath, context) => {
            if (/images.*svg/.test(resourcePath)) {
              return `/static/images/${url}`;
            }

            return `/static/icons/${url}`;
          },
        },
      },
      // fonts
      {
        test: /\.(woff(2)?|ttf|eot)$/i,
        loader: "file-loader",
        options: {
          name: env === "production" ? "[name]-[hash].[ext]" : "[name].[ext]",
          publicPath: "/static/webfonts",
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },

  // optimization: { minimizer: [new UglifyJsPlugin()] },
});
