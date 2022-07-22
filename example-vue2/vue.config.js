module.exports = {
  lintOnSave: false,
  transpileDependencies: ["realreport"],
  chainWebpack: (config) => {
    const fontsRule = config.module.rule("fonts");

    // 기존 로더를 클리어
    fontsRule.uses.clear();

    config.module
      .rule("fonts")
      .test(/\.(ttf|otf|eot|woff|woff2)$/)
      .use("base64-inline-loader")
      .loader("base64-inline-loader")
      .tap((options) => {
        // modify the options...
        return options;
      })
      .end();
  },
};
