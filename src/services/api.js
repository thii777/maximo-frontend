import axios from 'axios'

const api = axios.create({
    baseURL: 'https://somosomaximo.herokuapp.com'
})

export default api