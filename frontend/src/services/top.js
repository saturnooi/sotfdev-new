import axios from 'axios'
const userURL = `${process.env.Path}/user`

export default {
    gettop() {
        try {
            return axios.get(`${baseURL}/`).then()
        } catch (e) {
            throw e
        }
    },
}