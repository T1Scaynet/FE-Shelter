const style = 'py-3 px-3 border-[1px] border-solid border-[#f0f0f0] w-full truncate';

export const Row = ({ info }) => {
  return (
    <div>
      {
        info.length
          ? info.map((inf, i) => (
            <div key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#f8f8f8]'} grid grid-cols-7 `}>
              <p className={`${style}`}>{inf._id}</p>
              <p className={`${style}`}>{inf.name}</p>
              <p className={`${style}`}>{inf.genre}</p>
              <p className={`${style}`}>{inf.size}</p>
              <p className={`${style}`}>{inf.type}</p>
              <p className={`${style}`}>{inf.state}</p>
              <p className={`${style}`}>Deleted</p>
            </div>
          ))
          : <h1>No se encontró</h1>
      }
    </div>
  );
};
// <p  key={i}>{t}</p>
