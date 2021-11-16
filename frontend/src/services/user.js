import axios from 'axios'
const userURL = `${process.env.Path}/user`


export default {
    login(username, password) {
        try {
            return axios.post(`${baseURL}/auth/login`, { username, password })
        } catch (e) {
            throw e
        }
    },
}