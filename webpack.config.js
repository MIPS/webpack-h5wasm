/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
"use strict";

const path = require("path");
// const CopyPlugin = require("copy-webpack-plugin");

/**@type {import('webpack').Configuration}*/
const extConfig = {
  name: "extConfig",
  target: "node", // vscode extensions run in a Node.js-context 📖 -> https://webpack.js.org/configuration/node/

  entry: "./index.ts", // the entry point of this extension, 📖 -> https://webpack.js.org/configuration/entry-context/
  output: {
    // the bundle is stored in the 'dist' folder (check package.json), 📖 -> https://webpack.js.org/configuration/output/
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
    devtoolModuleFilenameTemplate: "../[resource-path]",
  },
  devtool: "source-map",
  resolve: {
    // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                //module: "es6", // override `tsconfig.json` so that TypeScript emits native JavaScript modules.
              },
            },
          },
        ],
      },
    ],
  },
  // plugins: [
  //     new CopyPlugin({
  //         patterns: [
  //             {
  //                 from: __dirname + '/node_modules/better-sqlite3/build/Release',
  //                 to: 'Release',
  //             },
  //         ],
  //     }),
  // ],
};

module.exports = [extConfig];
