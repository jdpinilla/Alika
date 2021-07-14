import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import '../components/styles/App.css'
const App = () => {
    return (
        <AppContext.Provider value={useInitialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App

