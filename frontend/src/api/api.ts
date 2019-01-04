import axios, { AxiosResponse } from 'axios'

interface Response<T> {
  code: number,
  message: string,
  data: T,
}

export class RequestError extends Error {
  public code: number = -1

  constructor(code: number, message?: string) {
    super(message)
    this.code = code
  }
}

const NETWORK_ERR = new RequestError(-1, '网络错误')

const checkResponse = (res: AxiosResponse<Response<any>>) => {
  if (!res || !res.data) {
    throw NETWORK_ERR
  }
  if (0 !== res.data.code) {
    throw new RequestError(res.data.code, res.data.message)
  }
}

const get = async<T> (url: string, params?: {[s: string]: any}, headers?: {[s: string]: any}): Promise<T> => {
  let res: AxiosResponse<Response<T>>
  try {
    res = await axios.get<Response<T>>(url, { params, headers })
  } catch (e) {
    res = e.response
  }
  checkResponse(res)
  return res.data.data
}

const post = async<T> (url: string, params?: {[s: string]: any}, headers?: {[s: string]: any}): Promise<T> => {
  let res: AxiosResponse<Response<T>>
  try {
    res = await axios.post<Response<T>>(url, { ...params }, { headers })
  } catch (e) {
    res = e.response
  }
  checkResponse(res)
  return res.data.data
}

export default {
  get,
  post,
}
