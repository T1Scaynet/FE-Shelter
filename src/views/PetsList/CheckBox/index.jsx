export const CheckBox = ({
  title,
  param,
  optionOne,
  optionTwo,
  optionThree,
  handleFilter,
  filters
}) => {
  const valueAz = optionOne === 'A - Z' ? 'alphabetical' : optionOne;
  const valueZa = optionTwo === 'Z - A' ? 'alphabetical_desc' : optionTwo;
  return (
    <div className='md:w-[80%] md:mx-auto w-full'>
      <label className='font-bold text-[#7C58D3] text-[0.875rem] md:text-[1rem]'>{title}:</label>

      <label className='flex justify-between md:w-auto w-[5.4rem]'>
        <p className='text-[0.875rem] md:text-[1rem]'>{optionOne}</p>
        <input
          onChange={(e) => handleFilter(e, param)}
          type='checkbox'
          value={valueAz}
          checked={filters?.[param] === valueAz}
        />
      </label>

      <label className='flex justify-between md:w-auto w-[5.4rem]'>
        <p className='text-[0.875rem] md:text-[1rem]'>{optionTwo}</p>
        <input
          onChange={(e) => handleFilter(e, param)}
          type='checkbox'
          value={valueZa}
          checked={filters?.[param] === valueZa}
        />
      </label>

      {optionThree && (
        <label className='flex justify-between md:w-auto w-[5.4rem]'>
          <p className='text-[0.875rem] md:text-[1rem]'>{optionThree}</p>
          <input
            onChange={(e) => handleFilter(e, param)}
            type='checkbox'
            value={optionThree}
            checked={filters?.[param] === optionThree}
          />
        </label>
      )}
    </div>
  );
};
