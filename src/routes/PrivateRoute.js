import React, { useContext } from 'react'
import { Redirect, Route, } from 'react-router-dom'
import routes from '../helpers/routes'
import AppContext from '../context/AppContext';
import useUser from '../hooks/useUser';

export default function PrivateRoute({ hasRole: role, ...rest }) {

    const { jwt, hasRole } = useUser()
    if (!jwt) {
        console.log(jwt)
        return <Redirect to={routes.signin} />
    }

    if (role && hasRole(role)) return <Redirect to={routes.home} />


    return (
        <div>
            <Route {...rest} />
        </div>
    )
}
