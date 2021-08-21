const ENDPOINT = 'http://localhost:3000'
import axios from 'axios'

export default function payment({ cart }) {
    return axios.post('http://localhost:3000/checkout/', { cart: cart })
        .then((req) => {
            const data = req.data.preferenceId
            return data
        })
        .catch(e => {
            console.error(e)
        })
}