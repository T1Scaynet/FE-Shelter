import { ButtonCopied } from '../ButtonCopied';

const style = 'py-3 px-3 border-[1px] border-solid border-[#f0f0f0] w-full truncate';

export const RowDonations = ({ info }) => {
  return (
    <div>
      {info.length
        ? (
            info.map((data, i) => (
              <div
                key={i}
                className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#f8f8f8]'} grid grid-cols-7 `}
              >
                <div className='flex border-[1px] border-solid border-[#f0f0f0] relative'>
                  <p className='py-3 px-3 w-full truncate mr-3'>{data._id}</p>
                  <ButtonCopied idData={data._id} />
                </div>
                <p className={`${style} py-3 px-3 w-full truncate mr-3 text-center`}>
                  {data.idUser.name}
                </p>
                {data.title
                  ? (
                    <div className={`${style} text-center`}>
                      <p>{data.title.split(',').length}</p>
                    </div>
                    )
                  : undefined}
                {data.amount
                  ? (
                    <div className={`${style} text-center`}>
                      <p>${data.amount.toLocaleString('es-AR')},00</p>
                    </div>
                    )
                  : undefined}
                {data.title
                  ? (
                    <p className={`${style} uppercase py-3 px-3 text-center`}>
                      {data.title}
                    </p>
                    )
                  : undefined}

                {data.status
                  ? (
                    <p className={`${style} uppercase text-center`}>{data.status}</p>
                    )
                  : undefined}
                {data.createAt
                  ? (
                    <div className={`${style} flex space-x-2 text-center`}>
                      <p>{new Date(data.createAt).toLocaleString('es-AR')}</p>
                    </div>
                    )
                  : undefined}
              </div>
            ))
          )
        : (
          <h1 className='text-center text-gray-700 mt-8 mb-4 text-xl font-bold'>No se encontró resultados a su búsqueda, intente nuevamente</h1>
          )}
    </div>
  );
};
