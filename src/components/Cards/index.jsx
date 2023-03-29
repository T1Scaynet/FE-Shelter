import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../Card';
import { PetsNotFound } from '../PetsNotFound';

export const Cards = ({ pets }) => {
  const allPets = pets.list;
  return (
    <div>
      {
        allPets.length
          ? (
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 gap-x-4 2xl:gap-x-[0.5rem] rounded-md'>
              {allPets.map((p, i) => (
                <Fragment key={i}>
                  <Link to={`/detalles/${p._id}`}>
                    <Card
                      key={p._id}
                      name={p.name}
                      genres={p.genre}
                      size={p.size}
                      age={p.age}
                      image={p.image}
                      galery={p.galery}
                      history={p.history}
                      db='true'
                    />
                  </Link>
                </Fragment>
              ))}
            </div>)
          : <PetsNotFound />
      }
    </div>
  );
};
