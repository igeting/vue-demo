import {get, post} from '@/utils/http'

export const getUser = data => get('/getUser', data)
export const setUser = data => post('/setUser', data)