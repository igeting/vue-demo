import {get, post} from '@/utils/http'

//test
export const getUser = data => get('/getUser', data)
export const setUser = data => post('/setUser', data)

//login
export const login = data => post('/user/login', data)