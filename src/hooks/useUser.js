import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import loginService from '../services/login'
import paymentService from "../services/payment";
import axios from "axios";
export default function useUser() {
    const { jwt, setJWT, user, preferenceId, setPreferenceId } = useContext(Context)
    const [state, setState] = useState({ loading: false, error: true })

    const hasRole = (role) => user?.role === role
    const login = useCallback(({ email, password }) => {
        setState({ loading: true, error: false })
        loginService({ email, password })
            .then(jwt => {
                window.sessionStorage.setItem('jwt', jwt)
                setState({ loading: false, error: true })
                setJWT(jwt)
            })
            .catch(err => {
                window.sessionStorage.removeItem('jwt')
                setState({ loading: false, error: true })
                console.error(err)
            })
    }, [setJWT])

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('jwt')
        setJWT(null)
    }, [setJWT])

    const payment = useCallback(({ cart }) => {
        paymentService({ cart })
            .then(id => {
                setPreferenceId(id)
            })
            .catch(err => {
                console.log(err)
            })

    }, [setPreferenceId])

    return {
        login,
        logout,
        jwt,
        user,
        isLoginLoaded: state.loading,
        hasLoginError: state.error,
        hasRole,
        payment,
        preferenceId
    }
}