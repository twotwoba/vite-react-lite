import axios from 'axios'
import qs from 'qs'

import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const http = axios.create({
    baseURL: '/', // could using a variable like import.meta.env.VITE_AXIOS_BASE_URL,
    timeout: 1000 * 16
})

// Add a request interceptor
http.interceptors.request.use(
    function (config: InternalAxiosRequestConfig) {
        // Do something before request is sent

        if (config.method === 'get') {
            config.paramsSerializer = {
                serialize: params =>
                    qs.stringify(params, {
                        arrayFormat: 'repeat'
                    })
            }
        }
        return config
    },
    function (error: AxiosError) {
        // Do something with request error
        return Promise.reject(error)
    }
)

// Add a response interceptor
http.interceptors.response.use(
    function (response: AxiosResponse) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response
    },
    function (error: AxiosError) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error)
    }
)

export default http
