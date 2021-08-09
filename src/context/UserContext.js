import React, { useEffect, useState } from 'react'
import getUser from '../services/getUser'
const Context = React.createContext({})

export function UserContextProvider({ children }) {
    const [jwt, setJWT] = useState(
        () => window.sessionStorage.getItem('jwt')
    )
    const [user, setUser] = useState({})

    useEffect(() => {
        console.log(jwt)
        if (jwt) {
            getUser({ jwt }).then(setUser)
            console.log(user)
        }
    }, [jwt])

    return <Context.Provider value={{ jwt, setJWT, user }}>
        {children}
    </Context.Provider>
}

export default Context