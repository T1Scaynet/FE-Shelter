import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, donation } from '../../state/features/cartSlice';
import { toast } from 'sonner';

/* eslint-disable jsx-quotes */
export const DonationCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.login.user);
  // const cart = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    if (isLogged) {
      dispatch(addToCart(product));
      navigate('/carrito');
    } else {
      toast.error('Para agregar productos al carrito, necesitas iniciar sesión.', {
        style: {
          height: '5rem',
          fontSize: '1rem',
          display: 'flex',
          justifyContent: 'space-evenly',
          paddingLeft: '2.5rem'
        }
      }); // Mostrar un alert indicando que se necesita estar logueado
      navigate('/ingresar'); // Agregar un botón para iniciar sesión o registrarse
    }
  };

  return (
    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 max-w-[400px] h-full bg-slate-100">
      <h3 className="text-xl font-bold mb-2 text-center">{product.title}</h3>
      <img
        alt="Home"
        src={product.image}
        className="h-56 w-full rounded-md object-cover mt-4"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>
            <dd className="text-sm text-gray-500">Precio: ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</dd>
          </div>

          <p className="text-base mt-4 mb-2">{product.description}</p>

          <div className="flex justify-evenly mt-4">
            {/* <button
              onClick={handleDonations}
              className="bg-[#7C58D3] text-white px-4 py-2 rounded hover:bg-purple-600 hover:text-white"
            >
              Donar
            </button> */}
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-[#7C58D3] text-white px-4 py-2 rounded hover:bg-purple-600 hover:text-white"
            >
              Agregar donación
            </button>
          </div>
        </dl>
      </div>
    </div>
  );
};
