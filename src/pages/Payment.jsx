import React, { useContext, useEffect, useState } from 'react';
// import {useParams} from 'react-router-dom'
import AppContext from '../context/AppContext';
import axios from 'axios';
import {useMercadopago} from 'react-sdk-mercadopago'
import useUser from '../hooks/useUser';
const Payment = () => {
  const {preferenceId} = useUser()

  // useEffect(() => {
  //   axios.post('http://localhost:3000/checkout/', {cart:cart}).then(req => {
  //   setPreferenceId(req.data.preferenceId)  
  //   })
  // }
    
  //   ,[])

    const mercadopago = useMercadopago.v2('TEST-c892e191-c7db-4c99-a5fb-1ad1fdf5159f', {
      locale: 'es-CO'
    })

    useEffect(() => {
      if(mercadopago ) {
        mercadopago.checkout({
          preference:{
            id:preferenceId
          },
          render:{
            container:'.Payment-button',
            label:'Button'
          }
        })
      }
      console.log(preferenceId)
    }, [preferenceId])

  // useEffect(() => {
  //   if(preferenceId) {
  //     const script = document.createElement('script');
  //     script.type ='text/javascript'
  //     script.src = 
  //     "https://sdk.mercadopago.com/js/v2";
  //     script.setAttribute('data-preference-id', preferenceId);
  //     const form = document.getElementById(FORM_ID);
  //     form.appendChild(script);
  //   }
  //   const mp = new MercadoPago('',
  //     {locale: 'es-CO'})
  // }, [preferenceId])

  

  return (
    <div className="Payment" style={{height:'100vh'}}>
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {/* {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))} */}
        <div className="Payment-button">
          MercadoPago Button
          {/* <form id={FORM_ID} /> */}
          {/* <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          /> */}
          
        </div>  
      </div>
    </div>
  );
};

export default Payment;
