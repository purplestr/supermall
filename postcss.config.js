module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 375, //视窗的宽度，对应的是我们设计稿的宽度
      viewportHeight: 667, //视窗的高度，对应的是我们设计稿的高度
      unitPrecision: 5, //指定’px‘转换为视窗单位值得小数位数
      viewportUnit: 'vw', //指定需要转换成的视窗单位
      selectorBlackList: ['ignore', 'tab-bar' ,'tar-bar-item'], //指定不转换的类
      minPixelValue: 1, //小于或等于’1px‘不转换为视窗单位
      mediaQuery: false, //允许在媒体查询中不转换’px‘
      exclude: [/TabBar/]
    },
  }

}