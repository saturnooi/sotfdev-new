import axios from 'axios'
const userURL = `${process.env.Path}/user`


export default {
    login(username, password) {
        try {
            return axios.post(`${baseURL}/user/login`, { username, password })
        } catch (e) {
            throw e
        }
    },
}