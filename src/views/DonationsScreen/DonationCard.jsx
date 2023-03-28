import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../state/features/cartSlice';

/* eslint-disable jsx-quotes */
export const DonationCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleTestPayment = async () => {
  //   const sendInfo = await axios.post('http://localhost:3001/payment', product);
  //   const paymentId = sendInfo.then((res) => res.body.id);
  // };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/carrito');
  };

  return (
    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 max-w-[400px] h-auto bg-slate-100">
      <img
        alt="Home"
        src={product.image}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <p>{product.title}</p>
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">${product.price}</dd>
          </div>

          <p className="text-sm">{product.description}</p>

          <div className="flex justify-evenly mt-2 text-[#7e5ad3] font-bold">
            <button onClick={() => handleAddToCart(product)}>Donar</button>
            <button onClick={() => handleAddToCart(product)}>
              Agregar al carrito
            </button>
          </div>
        </dl>
      </div>
    </div>
  );
};
