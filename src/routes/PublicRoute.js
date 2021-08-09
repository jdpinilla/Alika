import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AppContext from '../context/AppContext';
export default function PublicRoute(props) {

    const { hasRole, state } = useContext(AppContext);
    const { jwt } = state
    if (jwt) return <Redirect to="/profile" />

    return (
        <div>
            <Route {...props} />
        </div>
    )
}
