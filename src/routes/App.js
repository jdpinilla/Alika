import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import '../components/styles/App.css'
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Route component={Home} />

            </BrowserRouter>
        </>
    )
}

export default App

