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
    <div className='w-[80%] mx-auto'>
      <label className='font-bold text-[#7C58D3]'>{title}:</label>

      <label className='flex justify-between'>
        <p>{optionOne}</p>
        <input
          onClick={(e) => handleFilter(e, param)}
          type='checkbox'
          value={valueAz}
          checked={filters?.[param] === valueAz}
        />
      </label>

      <label className='flex justify-between'>
        <p>{optionTwo}</p>
        <input
          onClick={(e) => handleFilter(e, param)}
          type='checkbox'
          value={valueZa}
          checked={filters?.[param] === valueZa}
        />
      </label>

      {optionThree && (
        <label className='flex justify-between'>
          <p>{optionThree}</p>
          <input
            onClick={(e) => handleFilter(e, param)}
            type='checkbox'
            value={optionThree}
            checked={filters?.[param] === optionThree}
          />
        </label>
      )}
    </div>
  );
};
