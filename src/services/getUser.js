const ENDPOINT = 'http://localhost:3000'
import Axios from 'axios'

export default function getUser({ jwt }) {
    return Axios({
        method: 'GET',
        headers: {
            "Authorization": 'Bearer ' + jwt,
        },
        withCredentials: true,
        url: `${ENDPOINT}/user/profile`,
    }).then(res => {
        const { data } = res
        console.log(data)
        return data
    });
}