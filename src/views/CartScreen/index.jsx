/* eslint-disable multiline-ternary */
/* eslint-disable jsx-quotes */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {
  addToCart,
  clearCart,
  decreaseCart,
  donation,
  getTotals,
  removeFromCart
} from '../../state/features/cartSlice';
import './index.css';
// import { MercadoPago } from '../DonationsScreen/MercadoPago';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import Swal from 'sweetalert2';

export const CartScreen = () => {
  // eslint-disable-next-line no-unused-vars
  const [donating, setDonating] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { search } = useLocation();

  const query = new URLSearchParams(search);
  const status = query.get('collection_status');
  if (status === 'rejected') {
    Swal.fire({
      icon: 'error',
      title: 'La transacción ha sido rechazada',
      timer: '2000'
    });
  } else if (status === 'approved') {
    Swal.fire({
      icon: 'success',
      title: 'La transacción ha sido exitosa',
      timer: '2000'
    });
    dispatch(clearCart());
  }

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleIncreaseCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleDonations = async () => {
    // const currentState = getState().login;
    // console.log(currentState.token);
    const payload = {products: [...cart.cartItems]}
    console.log(payload)
    dispatch(donation(payload));
    setDonating(true);
    // const myId = await axios
    //   .post('/payment', cart.cartItems[0])
    //   .then((res) => (window.location.href = res.data.body.init_point));

    // console.log(myId);
    setDonating(false);
  };

  return (
    <div className="px-16 py-8 cart-container">
      <h2 className="font-normal text-[30px] text-center">
        Carrito de donaciones
      </h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Tu carrito está vacío</p>
          <div className="continue-shopping">
            <Link to="/donaciones">
              <i className="bx bx-arrow-back" />
              <span>Agregar donaciones</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid items-center grid-cols-[3fr_1fr_1fr_1fr] gap-x-2 my-5">
            <h3 className="text-sm font-bold uppercase">Productos</h3>
            <h3 className="text-sm font-bold uppercase">Precio</h3>
            <h3 className="text-sm font-bold uppercase">Cantidad</h3>
            <h3 className="text-sm font-bold uppercase justify-self-end">
              Total
            </h3>
          </div>

          <div>
            {cart.cartItems?.map((producto) => (
              <div
                className="cart-item grid items-center grid-cols-[3fr_1fr_1fr_1fr] gap-x-2 border-t py-4 px-0 border-[rgb(187,187,187)]"
                key={producto.id}
              >
                <div className="cart-product flex items-center">
                  <img src={producto.image} alt={producto.title} className="w-1/4 mr-4" />
                  <div>
                    <h3 className="font-bold">{producto.title}</h3>
                    <p className="text-sm italic">{producto.description}</p>
                    <button onClick={() => handleRemoveFromCart(producto)} className="text-red-500 hover:text-red-600">Eliminar</button>
                  </div>
                </div>  

                <div className="precio">${producto.price.toLocaleString("es-AR")},00</div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(producto)}>
                    -
                  </button>
                  <div className="count">{producto.cartQuantity}</div>
                  <button onClick={() => handleIncreaseCart(producto)}>
                    +
                  </button>
                </div>
                <div className="cart-product-total-price justify-self-end">
  ${ (producto.price * producto.cartQuantity).toLocaleString("es-AR") },00
</div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button onClick={() => handleClearCart()} className="clear-cart">
              Limpiar carrito
            </button>
            <div className="cart-checkout">
            <div class="subtotal flex justify-between items-center">
  <span>Subtotal</span>
  <span class="amount font-bold text-lg">$ {cart.cartTotalAmount.toLocaleString("es-AR")},00</span>
</div>
              <button onClick={handleDonations}>Donar</button>

              <div className="continue-shopping">
                <Link to="/donaciones">
                  <i className="bx bx-arrow-back" />
                  <span>Agregar mas donaciones</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {donating && <MercadoPago product={cart.cartItems[0]} />} */}
    </div>
  );
};
