let configUrl = {};
const env = process.env;

if (env.NODE_ENV == "development") {
  configUrl = {
    baseUrl: `/testApi/test`, //本地
    web: `/testApi/test`, //网站
  };
} else if (env.NODE_ENV == "production") {
  configUrl = {
    baseUrl: `http://192.168.30.47`, //本地
    web: `http://192.168.30.47`, //网站
  };
} else if (env.NODE_ENV == "test") {
  configUrl = {
    baseUrl: `http://192.168.30.47`, //本地
    web: `http://192.168.30.47`, //网站
  };
}

export { configUrl, env };
