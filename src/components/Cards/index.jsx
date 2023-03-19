import { Link } from 'react-router-dom';
import { Card } from '../Card';

export const Cards = ({ pets }) => {
  const allPets = pets.list;
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 gap-x-14 2xl:gap-x-[3.8rem] rounded-md'>
      {allPets.length > 0
        ? (
            allPets.map((p) => (
              <Link key={p.id} to={`/detalles/${p._id}`}>
                <Card
                  key={p._id}
                  name={p.name}
                  genres={p.genre}
                  size={p.size}
                  age={p.age}
                  image={p.image}
                  history={p.history}
                  db='true'
                />
              </Link>
            ))
          )
        : (
          <h1> No se encontró mascotas </h1>
          )}
    </div>
  );
};
