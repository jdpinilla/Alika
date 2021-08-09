import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Information from '../pages/Information';
import Payment from '../pages/Payment.jsx';
import Success from '../pages/Success';
import NotFound from '../pages/NotFound';
import '../components/styles/App.css';
import CheckoutPage from '../pages/CheckoutPage';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import Product from '../pages/Product';
import About from '../pages/About';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import routes from '../helpers/routes'
import roles from '../helpers/roles'

import { UserContextProvider } from '../context/UserContext'
const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <UserContextProvider>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route exact path={routes.about} component={About} />
              <Route exact path={routes.shop} component={Shop} />
              <Route exact path={routes.shopId} component={Product} />
              <Route exact path={routes.checkout} component={CheckoutPage} />
              <Route exact path={routes.information} component={Information} />
              <Route exact path={routes.payment} component={Payment} />
              <Route exact path={routes.success} component={Success} />
              <PublicRoute exact path={routes.signin} component={Login} />
              <PublicRoute exact path={routes.signup} component={Register} />
              {/* <PrivateRoute hasRole={roles.admin} exact path="/admin" component={Admin} /> */}
              <PrivateRoute exact path={routes.profile} component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </UserContextProvider>
    </AppContext.Provider>
  );
};

export default App;
