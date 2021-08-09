import { useCallback, useContext } from "react";
import Context from "../context/UserContext";
import loginService from '../services/login'

export default function useUser() {
    const { jwt, setJWT } = useContext(Context)
    const [state, setState] = useState({ loading: false, error: true })

    const login = useCallback(({ email, password },) => {
        setState({ loading: true, error: false })
        loginService({ email, password })
            .then(jwt => {
                setState({ loading: false, error: true })
                console.log(jwt)
                setJWT
            })
            .catch(err => {
                setState({ loading: false, error: true })
                console.error(err)
            })
    }, [setJWT])

    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT])
    return {
        login,
        logout

    }
}