import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true,
  },
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: "cross-fetch",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
  },
  target: "node",
  mode: "production",
  performance: {
    hints: false,
  },
};

export default config;
