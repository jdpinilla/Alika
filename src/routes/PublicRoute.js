import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AppContext from '../context/AppContext';
import useUser from '../hooks/useUser';
export default function PublicRoute(props) {

    const { hasRole } = useContext(AppContext);
    const { jwt } = useUser()
    if (jwt) return <Redirect to="/profile" />

    return (
        <div>
            <Route {...props} />
        </div>
    )
}
