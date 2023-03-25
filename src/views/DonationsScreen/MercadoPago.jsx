/* eslint-disable jsx-quotes */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FORM_ID = 'payment-form';

export const MercadoPago = ({ product }) => {
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    console.log(product);
    axios.post('http://localhost:3001/payment', product).then((res) => {
      setPreferenceId(res.data.body.id);
    });
  }, [product]);

  useEffect(() => {
    if (preferenceId) {
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src =
        'https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js';
      script.setAttribute('data-preference-id', preferenceId);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
    }
  }, [preferenceId]);

  return (
    <>
      <form id={FORM_ID} method="GET" />
    </>
  );
};
