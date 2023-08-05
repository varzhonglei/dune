import axios from "axios"
import { getToken } from "../auth"
import { merge } from "lodash"
import { RES_TYPE } from "../../typing"
import { addToast } from "../../components/alert"

export function initialAxios () {
  axios.interceptors.request.use(async config => {
    const newConfig = merge({}, config)
    const token = getToken()
    newConfig.headers.Authorization = token
    return newConfig
  })
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response) {
        if (error.response?.data?.type === RES_TYPE.error) {
          addToast({
            text: error.response?.data?.message,
            type: 'danger'
          })
        }
      } else if (error.request) {
        // 请求发出但没有收到响应，可能是网络问题
        // 处理请求超时或网络错误
        // 执行你想要的操作，比如显示错误提示等
      } else {
        // 其他错误
        // 处理其他错误
        // 执行你想要的操作，比如显示错误提示等
      }
      return Promise.reject(error) // 继续抛出错误，可在调用处进行捕获处理
    }
  )
}