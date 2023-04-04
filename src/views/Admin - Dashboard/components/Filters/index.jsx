import { ButtonResetFilters } from '../../../../components/ButtonResetFilters';

export const Filters = ({ filtersValues, handleFilter, filters }) => {
  return (
    <div className={`grid grid-cols-${filtersValues.length + 1} my-5 gap-2`}>
      {
        filtersValues.length && filtersValues.map((f, i) => {
          const isFilterActive = filters[f.param] !== '';
          return (
            <div key={i}>
              <label htmlFor={f.param} className='block mb-2 text-base font-medium text-gray-900 dark:text-white'>{f.title}:</label>
              <select id='hola' className='block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name={f.param} onChange={(e) => handleFilter(e, f.param)}>
                <option value='' selected={!isFilterActive}>- - -</option>
                <option value={f.optionAZ ? f.optionAZ : f.optionOne}>{f.optionOne}</option>
                <option value={f.optionZA ? f.optionZA : f.optionTwo}>{f.optionTwo}</option>
                {
                  f.optionThree && <option value={f.optionThree}>{f.optionThree}</option>
                }
              </select>
            </div>
          );
        })
      }
      <div className='flex justify-center items-end mb-2'>
        <ButtonResetFilters handleFilter={handleFilter} isDashboard />
      </div>
    </div>
  );
};
