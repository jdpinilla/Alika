import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Information from '../pages/Information'
import Payment from '../pages/Payment.jsx'
import Success from '../pages/Success'
import NotFound from '../pages/NotFound'
import '../components/styles/App.css'
import CheckoutPage from '../pages/CheckoutPage'
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
const App = () => {
    const initialState = useInitialState();
    return (
        < AppContext.Provider value={initialState}>

            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/shop' component={Shop} />
                        <Route exact path='/checkout' component={CheckoutPage} />
                        <Route exact path='/checkout/information' component={Information} />
                        <Route exact path='/checkout/payment' component={Payment} />
                        <Route exact path='/checkout/success' component={Success} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>

    )
}

export default App

