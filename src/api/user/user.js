import {get, post, json} from '../../util/http'

export const getUser = params => get('/getUser', params)
export const setUser = data => json('/setUser', data)