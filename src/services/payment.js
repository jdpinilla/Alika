const ENDPOINT = 'http://localhost:3000'
import Axios from 'axios'

export default function payment({ order }) {
    return Axios({
        method: 'GET',
        data: {
            order
        },
        withCredentials: true,
        url: `${ENDPOINT}/checkout/`
    }).then(res => {
        const { data } = res
        console.log(data)
        return data
    })
        .catch(e => console.log(e))
}