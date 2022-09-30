import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'antd'

// 目前只有这两种请求
interface API {
  instance: AxiosInstance
  get<T = any>(url: string, params: any, config?: AxiosRequestConfig): Promise<T>
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
}

const cancelMap = new WeakMap<Promise<any>, () => void>()
const prevMap = new Map<(...params: any[]) => Promise<any>, Promise<any>>()
const { protocol, host } = window.location
const baseURL: string = "http://127.0.0.1:6001/api/";
// const baseURL: string = "/api/";

function resultHandle(config: AxiosRequestConfig, operate: () => Promise<any>) {
  const source = axios.CancelToken.source()

  config.cancelToken = source.token

  const result = operate().then(resolveHandle).catch(rejectHandle)

  const cancel = () => {
    source.cancel()
    cancelMap.delete(result)
  }

  cancelMap.set(result, cancel)
  result.finally(cancel)

  return result
}

function resolveHandle(res: AxiosResponse<any>) {
  const { data, code, msg, result } = res.data;

  if (code === 300) {
    window.location.href = "/login";
  }

  return data || result
}

function rejectHandle(err: Error | string[]) {
  // if (err instanceof Error) {
    // message.error(err.message || '网络错误!')
    // return Promise.reject([err.message])
  // }

  return Promise.reject(err as string[])
}

axios.defaults.withCredentials = true;

const api = axios.create({
  withCredentials: true,
  baseURL,
  timeout: 0,
})

const exportApi: API = {
  instance: api,
  get: (url, config = {}) => resultHandle(config, () => api.get(url, config)),
  post: (url, data, config = {}) => resultHandle(config, () => api.post(url, data, config)),
}

export default exportApi;
