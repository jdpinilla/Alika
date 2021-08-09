import { useState, useCallback } from 'react';
import initialState from '../initialState';
import loginService from '../services/login'
const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const hasRole = (role) => user?.role === role

  // const login = useCallback(({ email, password },) => {
  //   setState({
  //     ...state,
  //     loading: true,
  //     error: false
  //   })
  //   loginService({ email, password })
  //     .then(jwt => {
  //       console.log(jwt)
  //       setState({
  //         ...state,
  //         loading: false,
  //         error: false,
  //         jwt: jwt,
  //       })
  //     })
  //     .catch(err => {
  //       setState({
  //         ...state,
  //         loading: false,
  //         error: true
  //       })
  //       console.error(err)
  //     })
  // }, [setState])

  // const logout = useCallback(() => {
  //   setJWT(null)
  // }, [setState])

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter(
        (_item, indexCurrent) => indexCurrent !== indexToRemove
      ),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
    hasRole,
    // login,
    // isLoginLoaded: state.loading,
    // hasLoginError: state.error,
  };
};

export default useInitialState;
