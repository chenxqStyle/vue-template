//引入axios
import axios from 'axios'
import { Message } from "element-ui"  // 弹框组件
import {baseURL} from '../config'
let cancel, promiseArr = {}
const CancelToken = axios.CancelToken;
// axios.defaults.baseURL = BM_config.api;
// axios.defaults.baseURL = baseURL
axios.defaults.baseURL = 'http://localhost:3000'
//设置默认请求头
axios.defaults.headers = {
  // 'X-Requested-With': 'XMLHttpRequest',
  // 'Content-Type': 'application/x-www-form-urlencoded'
  // "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
   'Content-Type':'application/json;charset=UTF-8',
  //  'Content-Type':BM_config.headerContent
}
// axios.defaults.timeout = BM_config.timeout;
axios.defaults.withCredentials = true;
//请求拦截器
axios.interceptors.request.use(config => {
  //发起请求时，取消掉当前正在进行的相同请求
  // if (promiseArr[config.url]) {
  //     promiseArr[config.url]('操作取消')
  //     promiseArr[config.url] = cancel
  // } else {
  //     promiseArr[config.url] = cancel
  // }
  return config
}, error => {
  return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  let data;
  // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
  if (response.data == undefined) {
    data = response.request.responseText;
  } else {
    data = response.data;
  }
  return data;
}, err => {
  // 此处可做公共的错误处理
  return Promise.resolve(err.response)
})

export default {
  //get请求
  get(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      }).catch((error) => {
        reject(error);
      })
    })
  },
  //post请求
  post(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      }).catch((error) => {
        reject(error);
      })
    })
  }
}