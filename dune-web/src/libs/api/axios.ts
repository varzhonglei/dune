import axios from "axios"
import { getToken } from "../auth"
import { merge } from "lodash"

export function initialAxios () {
  axios.interceptors.request.use(async config => {
    const newConfig = merge({}, config)
    const token = getToken()
    newConfig.headers.Authorization = token
    return newConfig
  })
}