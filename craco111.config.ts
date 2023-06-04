import * as webpack from "webpack";
import path from "path";

const config: webpack.Configuration = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src/"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
};
export default config;
