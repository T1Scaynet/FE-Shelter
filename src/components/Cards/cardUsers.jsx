import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../Card';
import { PetsNotFound } from '../PetsNotFound';

export const CardsUsers = ({ users }) => {
  return (
    <div>
      {
        users?.length
          ? (
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 gap-x-4 2xl:gap-x-[0.5rem] rounded-md'>
              {users.map((p, i) => (
                <Fragment key={i}>
                  <Link to={`/detalles/${p._id}`}>
                    <Card
                      key={p._id}
                      name={p.name}
                      email={p.email}
                      roles={p.roles}
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
