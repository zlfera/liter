const path = require("path");
module.exports = {
    configureWebpack: {
        devtool: "source-map",
    },
    devServer: {
        // 自动打开浏览器

        open: true,
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [
                path.join(__dirname, "./src/assets/styles/variables.less"),
                path.join(__dirname, "./src/assets/styles/mixins.less"),
            ],
        },
    },
};
