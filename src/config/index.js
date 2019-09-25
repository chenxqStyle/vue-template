let baseUrl = "";
const env = process.env;

if (env.NODE_ENV == "development") {
  baseUrl = `http://localhost:3000`; //本地
} else if (env.NODE_ENV == "production") {
  baseUrl = `http://192.168.30.47`; //生产环境地址93
} else if (env.NODE_ENV == "test") {
  baseUrl = ``; //测试环境地址
}

export { baseUrl, env };
