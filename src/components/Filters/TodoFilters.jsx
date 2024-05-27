// Dividimos los filtros en subcomponenes
const FiltersContainer = ({ children }) => {
  return (
    <div className='flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600'>
      {children}
    </div>
  );
};

const ItemLeft = ({ total = 0 }) => {
  return <p className='text-customOrange text-sm'> {total} items left </p>;
};

const FilterBtnContainer = ({ children }) => {
  return <div className='flex items-center space-x-2'>{children}</div>;
};

const FilterBtn = ({ action, active, filter }) => {
  return (
    <button
    onClick={action}
    className={
        `hover:text-white cursor-pointer transition-all duration-200 ease-in-out ` +
        (active === filter ? "text-indigo-300" : "text-customOrange")
      }>
         {filter.charAt(0).toUpperCase() + filter.slice(1)}
    </button>
  );
};
export { FiltersContainer, ItemLeft, FilterBtnContainer, FilterBtn };
