/* eslint-disable multiline-ternary */
/* eslint-disable jsx-quotes */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart
} from '../../state/features/cartSlice';
import './index.css';
// import { MercadoPago } from '../DonationsScreen/MercadoPago';
import axios from 'axios';

export const CartScreen = () => {
  const [donating, setDonating] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
    setDonating(true);
    const myId = await axios
      .post('http://localhost:3001/payment', cart.cartItems[0])
      .then((res) => (window.location.href = res.data.body.init_point));

    console.log(myId);
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
            <h3 className="text-sm font-normal uppercase">Productos</h3>
            <h3 className="text-sm font-normal uppercase">Precio</h3>
            <h3 className="text-sm font-normal uppercase">Cantidad</h3>
            <h3 className="text-sm font-normal uppercase justify-self-end">
              Total
            </h3>
          </div>

          <div>
            {cart.cartItems?.map((producto) => (
              <div
                className="cart-item grid items-center grid-cols-[3fr_1fr_1fr_1fr] gap-x-2 border-t py-4 px-0 border-[rgb(187,187,187)]"
                key={producto.id}
              >
                <div className="cart-product">
                  <img src={producto.image} alt={producto.title} />
                  <div>
                    <h3>{producto.title}</h3>
                    {/* <p>{producto.description}</p> */}
                    <button onClick={() => handleRemoveFromCart(producto)}>
                      Eliminar
                    </button>
                  </div>
                </div>

                <div className="precio">{producto.price}</div>
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
                  ${producto.price * producto.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button onClick={() => handleClearCart()} className="clear-cart">
              Limpiar carrito
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
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
