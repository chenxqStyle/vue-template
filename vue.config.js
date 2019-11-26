module.exports = {
	css: {
		loaderOptions: {
			postcss: {
				// 这里的选项会传递给 postcss-loader
				plugins: [
					require("postcss-px-to-viewport")({
						unitToConvert: "px",
						viewportWidth: 750,
						unitPrecision: 3,
						propList: [
							"*"
						],
						viewportUnit: "vw",
						fontViewportUnit: "vw",
						selectorBlackList: [],// 匹配类名 不做转化
						minPixelValue: 1,
						mediaQuery: false,
						replace: true,
						exclude: /(\/|\\)(node_modules)(\/|\\)/,
						landscape:false,
				        landscapeUnit:"vw",
				        landscapeWidth:568
					})
				]
			}
		}
	}
}