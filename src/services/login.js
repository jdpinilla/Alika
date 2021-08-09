const ENDPOINT = 'http://localhost:3000'
import Axios from 'axios'
export default function login({ email, password }) {
    return Axios({
        method: 'POST',
        data: {
            email,
            password,
        },
        withCredentials: true,
        url: `${ENDPOINT}/user/signin`,
    }).then(res => {
        const { data } = res
        return data
    });
}