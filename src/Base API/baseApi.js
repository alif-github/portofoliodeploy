import axios from 'axios'

export const doGet = (url) => {
    const method = "GET"
    return axios({url,method})
}