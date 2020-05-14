// module.exports = {
// 	css: {
// 		loaderOptions: {
// 			postcss: {
// 				// 这里的选项会传递给 postcss-loader
// 				plugins: [
// 					require("postcss-px-to-viewport")({
// 						unitToConvert: "px",
// 						viewportWidth: 750,
// 						unitPrecision: 3,
// 						propList: [
// 							"*"
// 						],
// 						viewportUnit: "vw",
// 						fontViewportUnit: "vw",
// 						selectorBlackList: [],// 匹配类名 不做转化
// 						minPixelValue: 1,
// 						mediaQuery: false,
// 						replace: true,
// 						exclude: /(\/|\\)(node_modules)(\/|\\)/,
// 						landscape:false,
// 				        landscapeUnit:"vw",
// 				        landscapeWidth:568
// 					})
// 				]
// 			}
// 		}
// 	}

// }

const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const Timestamp = new Date().getTime();
const path = require("path");
const FileManagerPlugin = require("filemanager-webpack-plugin");

const resolve = dir => {
	return path.join(__dirname, dir);
};
let filename_sub = "djplaza-" + process.env.NODE_ENV;
let filename = filename_sub + "-" + Timestamp;
module.exports = {
	publicPath: "./",
	assetsDir: "./static",
	outputDir: filename,
	productionSourceMap: false,
	lintOnSave: true,
	css: {
		loaderOptions: {
			postcss: {
				// 这里的选项会传递给 postcss-loader
				plugins: [
					autoprefixer(),
					pxtorem({
						rootValue: 37.5, // 如果开发过程需要直接使用750设计稿尺寸，此处写75
						propList: ["*"],
						selectorBlackList: ["van-"]
					})
				]
			}
		}
	},
	configureWebpack: {
		output: {
			filename: `[name].${process.env.NODE_ENV}.${Timestamp}.js`,
			chunkFilename: `[name].${process.env.NODE_ENV}.${Timestamp}.js`
		}
	},
	chainWebpack: config => {
		config.resolve.alias.set("@style", resolve("src/assets/style"));
		config.resolve.alias.set("@components", resolve("src/components"));
		config.resolve.alias.set("@img", resolve("src/assets/img"));
		if (process.env.NODE_ENV !== "dev") {
			config.plugin("zip").use(FileManagerPlugin, [{
				onEnd: {
					delete: ["*.zip"],
					archive: [{
						source: "./" + filename,
						destination: "./" + filename + ".zip"
					}]
				}
			}]);
		}
	}
};