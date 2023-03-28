import { DonationCard } from './DonationCard';
import { donations } from '../../utils/products';

export const DonationsScreen = () => {
  return (
    <div className='px-8 w-screen h-full'>
      <h2 className='text-center text-4xl font-bold mb-4'>Donaciones</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
        {donations?.map((product) => (
          <DonationCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
