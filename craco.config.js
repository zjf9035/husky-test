const path = require("path");
module.exports = {
  webpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  },
  // module: {
  //   rules: [
  //     {
  //       test: /.less$/,
  //       use: ["style-loader", "css-loader", "less-loader"],
  //     },
  //   ],
  // },
};
