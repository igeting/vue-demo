import qs from 'qs'
import axios from 'axios'

const contentTypes = {
    xml: 'text/xml;charset=utf-8',
    json: 'application/json;charset=utf-8',
    form: 'multipart/form-data;charset=utf-8',
    formdata: 'ipart/form-data;charset=utf-8',
    urlencoded: 'application/x-www-form-urlencoded;charset=utf-8',
}

let instance = null
const Axios = () => {
    let baseURL = process.env.base_url || '/api'
    let token = sessionStorage.getItem("token")
    instance = axios.create({
        baseURL: baseURL,
        timeout: 10 * 1000,
        headers: {
            'Content-Type': contentTypes.json,
            'X-Authorization': token ? token : '',
        },
    })
}
Axios()

//request interceptors
instance.interceptors.request.use(
    config => {
        config.headers = {
            'Content-Type': contentTypes.json,
        }
        const token = sessionStorage.getItem("token")
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

//response interceptors
instance.interceptors.response.use(
    response => {
        //todo
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        if (error.status) {
            switch (error.status) {
                case 500: {
                    //todo
                    break;
                }
                default: {
                    //todo
                }
            }
        }
        return Promise.reject(error)
    }
)

const request = (options = {}) => {
    return new Promise((resolve, reject) => {
        instance.request(options).then(res => {
            if (res.status === 200) {
                resolve(res)
            } else {
                reject(res)
            }
        }).catch(err => {
            reject(err)
        })
    })
}

const get = (url, params = {}, headers = {}, config = {}) => {
    return request({
        url,
        method: 'get',
        params,
        headers,
        ...config,
    })
}

const del = (url, params = {}, headers = {}, config = {}) => {
    return request({
        url,
        method: 'delete',
        params,
        headers,
        ...config,
        paramsSerializer: params => {
            return qs.stringify(params, {indices: false})
        },
    })
}

const put = (url, data = {}, headers = {}, config = {}) => {
    return request({
        url,
        method: 'put',
        data,
        headers,
        ...config,
    })
}


const post = (url, data = {}, headers = {}, config = {}) => {
    return request({
        url,
        method: 'post',
        data,
        headers,
        ...config,
    })
}


const form = (url, data = {}, headers = {}, config = {}) => {
    return request({
        url,
        method: 'post',
        data: qs.stringify(data),
        headers,
        ...config,
    })
}

[instance, request, get, del, put, post, form].forEach(x => {
    x.getCancelToken = () => {
        return axios.CancelToken
    }
})

export {instance as axios, request, get, del, put, post, form}

export default instance
