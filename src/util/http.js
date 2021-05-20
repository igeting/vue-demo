import axios from 'axios'
import qs from 'qs'

/*if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://localhost:9090'
} else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = 'http://localhost:9090'
} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'http://localhost:9090'
} else {
    axios.defaults.baseURL = 'http://localhost:9090'
}*/

axios.defaults.timeout = 10 * 1000

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use(
    config => {
        //todo
        const token = sessionStorage.getItem("token")
        token && (config.headers.Authorization = token)
        return config
    },
    error => {
        return Promise.error(error)
    })

axios.interceptors.response.use(
    response => {
        //todo
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        return Promise.reject(error)
        /*if (error.response.status) {
            switch (error.response.status) {
                case 401: {
                    //todo
                    break;
                }

                default: {
                    //todo
                }
            }
            return Promise.reject(error.response);
        }*/
    }
)

export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: params}).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data)).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export const json = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}