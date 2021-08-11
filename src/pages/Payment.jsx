import React, { useContext, useEffect, useState } from 'react';
// import {useParams} from 'react-router-dom'
import AppContext from '../context/AppContext';
import payment from '../services/payment';
import axios from 'axios';
const Payment = () => {
  const { state } = useContext(AppContext);
  const [preferenceId, setPreferenceId] = useState(null)
  const { cart } = state;
  // const {id} = useParams()
  const FORM_ID = 'payment-form'

  useEffect(() => {
    axios.post('http://localhost:3000/checkout/', {cart:cart}).then(req => {
      setPreferenceId(req.data.preferenceId)
    })}
    ,[])
  
  useEffect(() => {
    if(preferenceId) {
      const script = document.createElement('script');
      script.type ='text/javascript'
      script.src = 
      "https://sdk.mercadopago.com/js/v2";
      script.setAttribute('data-preference-id', preferenceId);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
    }
  }, [preferenceId])


  return (
    <div className="Payment" style={{height:'100vh'}}>
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          MercadoPago Button
          <form id={FORM_ID} />
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
