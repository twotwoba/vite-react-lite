import Cookies from 'js-cookie'

const prefixKey = `renshi-` // storage prefix key
const defaultCookieKey = 'token'

const inFifteenMinutes = new Date(new Date().getTime() + 120 * 60 * 1000)

/* ============================ Cookie Setting ============================ */
// 获取 cookie
export const getCookie = (cookieKey?: string) => Cookies.get(cookieKey || defaultCookieKey)
// 设置 cookie
export const setCookie = (cookieValue: string, cookieKey?: string) =>
    Cookies.set(cookieKey || defaultCookieKey, cookieValue, { expires: inFifteenMinutes })
// 移除 cookie
export const removeCookie = () => Cookies.remove(defaultCookieKey)

/* ============================ Storage Setting ============================ */
interface StorageParams {
    type?: 'localStorage' | 'sessionStorage'

    key: string | null
    value?: any
}

/**
 * 存入 storage
 */
export const setStorage = (params: StorageParams) => {
    const { type, key, value } = params
    const name = prefixKey + key
    const storageValue = {
        value,
        dataType: typeof value,
        dateTime: new Date().getTime()
    }
    if (type === 'sessionStorage') {
        window.sessionStorage.setItem(name, JSON.stringify(storageValue))
    } else {
        window.localStorage.setItem(name, JSON.stringify(storageValue))
    }
}
/**
 * 取出 storage 某个 key-value
 */
export const getStorage = (params: Omit<StorageParams, 'value'>): string | null => {
    const { type, key } = params
    const name = prefixKey + key
    let cache: string | null
    if (type === 'sessionStorage') {
        cache = window.sessionStorage.getItem(name)
    } else {
        cache = window.localStorage.getItem(name)
    }
    if (cache === null) return null
    let value: any
    try {
        const obj = JSON.parse(cache)
        if (obj.dataType === 'string') {
            value = obj.value
        } else if (obj.dataType === 'number') {
            value = Number(obj.value)
        } else if (obj.dataType === 'boolean') {
            value = JSON.parse(obj.value)
        } else if (obj.dataType === 'object') {
            value = obj.value
        }
    } catch (error) {
        return cache
    }
    return value
}
/**
 * 清除 storage 某个 key-value
 */
export const removeStorage = (params: Omit<StorageParams, 'value'>) => {
    const { type, key } = params
    const name = prefixKey + key
    if (type) {
        window.sessionStorage.removeItem(name)
    } else {
        window.localStorage.removeItem(name)
    }
}

/**
 * 清除 storage
 */
export const clearStorage = (params: Pick<StorageParams, 'type'>) => {
    const { type } = params
    if (type === 'sessionStorage') {
        window.sessionStorage.clear()
    } else {
        window.localStorage.clear()
    }
}
