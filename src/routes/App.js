import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import '../components/styles/App.css'
const App = () => {
    return (

        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/shop' component={Shop} />
                    <Route exact path='/checkout/information' component={Information} />
                    <Route exact path='/checkout/payment' component={Payment} />
                    <Route exact path='/checkout/success' component={Success} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App

