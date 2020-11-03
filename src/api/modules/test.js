import request from "@/utils/service";
import apiList from "../urlList";

// 机构服务
const test = param => {
  return request.post(apiList.common.logo, param);
};

export default {
  // 机构服务
  test,
};

// 调用 this.$Api.test()
