import {
  FilterBtn,
  FilterBtnContainer,
  FiltersContainer,
  ItemLeft,
} from "./TodoFilters";

const Filters = ({
  total,
  activeFilter,
  handleClearCompleted,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
}) => {
  return (
    <FiltersContainer>
      <ItemLeft total={total} />
      <FilterBtnContainer>
        <p>Filtros</p>
        <FilterBtn action={() => showAllTodos()} active={activeFilter} filter='all' />
        <FilterBtn action={() => showActiveTodos()} active={activeFilter}filter='active' />
        <FilterBtn action={() => showCompletedTodos()} active={activeFilter} filter='completed' />
      </FilterBtnContainer>

      <button onClick={() => handleClearCompleted()}  className='text-gray-400 hover:text-customOrange cursor-pointer transition-all duration-300 ease-in'>
        Borrar 
      </button>
    </FiltersContainer>
  );
};

export { Filters };
