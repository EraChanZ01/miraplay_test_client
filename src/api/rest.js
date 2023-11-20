import http from './interceptor'

export const loginUser = (date) => http.post(`/auth/login`, date)
export const registerUser = (date) => http.post(`/auth/register`, date)
export const getGames = (date) => http.post(`/game/`, date)
export const checkAuth = (date) => http.get(`/auth/checkAuth`, date)