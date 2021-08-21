import React, { useEffect, useState } from 'react'
import getUser from '../services/getUser'
const Context = React.createContext({})

export function UserContextProvider({ children }) {
    const [jwt, setJWT] = useState(
        () => window.sessionStorage.getItem('jwt')
    )
    const [user, setUser] = useState({})
    const [preferenceId, setPreferenceId] = useState(null)

    useEffect(() => {
        console.log(jwt)
        if (jwt) {
            getUser({ jwt }).then(setUser)
        }
    }, [jwt])

    return <Context.Provider value={{ jwt, setJWT, user, preferenceId, setPreferenceId }}>
        {children}
    </Context.Provider>
}

export default Context