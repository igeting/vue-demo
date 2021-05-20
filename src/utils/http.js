import qs from 'qs'
import axios from 'axios'

/*if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://localhost:9090'
} else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = 'http://localhost:9090'
} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'http://localhost:9090'
} else {
    axios.defaults.baseURL = 'http://localhost:9090'
}*/

/*axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;
axios.defaults.baseURL = process.env.VUE_APP_BASEURL*/

const contentTypes = {
    xml: 'text/xml;charset=utf-8',
    json: 'application/json;charset=utf-8',
    form: 'multipart/form-data;charset=utf-8',
    formdata: 'ipart/form-data;charset=utf-8',
    urlencoded: 'application/x-www-form-urlencoded;charset=utf-8',
}

const instance = axios.create({
    baseURL: '/api',
    timeout: 10 * 1000,
})

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

export const get = (url, params = {}, config = {}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: params,
            headers: {
                ...config,
                'Content-Type': contentTypes.urlencoded,
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const form = (url, data = {}, config = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, qs.stringify(data), {
            headers: {
                ...config,
                'Content-Type': contentTypes.formdata,
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const post = (url, data = {}, config = {}) => {
    return new Promise((resolve, reject) => {
        instance.post(url, data, {
            headers: {
                ...config,
                'Content-Type': contentTypes.json,
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const request = options => {
    return new Promise((resolve, reject) => {
        instance.request(options).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export default instance