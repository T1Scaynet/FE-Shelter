import { Card } from '../Card';

export const Cards = ({ pets }) => {
  const allPets = pets.list;
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 rounded-md'>
      {
        allPets.length > 0
          ? allPets.map(p => (
            <Card
              key={p._id}
              name={p.name}
              genres={p.genre}
              size={p.size}
              age={p.age}
              image={p.image}
              db='true'
            />
          ))
          : <h1> No recipes to show D: </h1>
      }
    </div>
  );
};
