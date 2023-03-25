/* eslint-disable multiline-ternary */
/* eslint-disable react/self-closing-comp */
// import { useGetAllProductsQuery } from '../../state/features/products/productsApi';
import { DonationCard } from './DonationCard';
import { donations } from '../../utils/products';

export const DonationsScreen = () => {
  // const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div className="px-8 w-screen h-screen">
      <h2 className="text-center">Donaciones</h2>
      <div className="flex justify-center items-center gap-6 ">
        {/* {isLoading ? (
          <p>Cargando información</p>
        ) : error ? (
          <>
            <p>Ocurrió un error. No recibe información del servidor</p>
            <p>El componente funciona envienme algo del back </p>
          </>
        ) : (
          data?.map((product) => (
            <DonationCard key={product.id} product={product} />
          ))
        )} */}

        {donations?.map((product) => (
          <DonationCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
