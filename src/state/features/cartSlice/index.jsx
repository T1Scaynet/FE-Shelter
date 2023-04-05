import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'sonner';
import Swal from 'sweetalert2';

// Toast message Config
const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-left',
  showConfirmButton: false,
  background: '#fffefd',
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

// Updating localStorage cartItems function
const updateLocalStorage = (state) => {
  localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
};

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart (state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        Toast.fire({
          icon: 'success',
          title: `${action.payload.title} sumado al carrito`
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        Toast.fire({
          icon: 'success',
          title: `${action.payload.title} agregado al carrito`
        });
      }
      updateLocalStorage(state);
    },
    removeFromCart (state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
      updateLocalStorage(state);
      Toast.fire({
        icon: 'info',
        title: `${action.payload.title} eliminado del carrito`
      });
    },
    decreaseCart (state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
        Toast.fire({
          icon: 'info',
          title: ` ${action.payload.title} eliminado del carrito`
        });
      }
      updateLocalStorage(state);
    },
    clearCart (state, action) {
      state.cartItems = [];
      Toast.fire({
        icon: 'info',
        title: 'Donaciones eliminadas del carrito'
      });
      updateLocalStorage(state);
    },
    getTotals (state, action) {
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0
        }
      );
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    }
  }
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } =
  cartSlice.actions;

export const donation = (payload) => {
  return async () => {
    try {
      const donations = await axios.post('/payment', payload);
      // navigate(donations.data.body.init_point);
      window.location.href = donations.data.body.init_point;
      return donations;
    } catch (error) {
      toast.error('Intente nuevamente');
    }
  };
};

export default cartSlice.reducer;
