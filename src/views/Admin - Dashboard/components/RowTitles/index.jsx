export const RowTitles = ({ titles }) => {
  return (
    <div className={`grid grid-cols-${titles.length} bg-black`}>
      {
        titles && titles.map((t, i) =>
          <p className='text-[white] py-3 px-3 border-r-[1px] border-solid border-[#FFFFFF] text-[0.8rem] md:text-[1rem]' key={i}>{t}</p>
        )
      }
    </div>
  );
};
