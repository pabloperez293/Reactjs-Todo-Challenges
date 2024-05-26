import {
  FilterBtn,
  FilterBtnContainer,
  FiltersContainer,
  ItemLeft,
} from "./TodoFilters";

const Filters = () => {
  return (
    <FiltersContainer>
      <ItemLeft />
      <FilterBtnContainer>
      <p>Filtros</p>
        <FilterBtn action={() => {}} active="All" filter='Todo' />
        <FilterBtn action={() => {}} active="All" filter='Activos' />
        <FilterBtn action={() => {}} active="All" filter='Completados'/>
      </FilterBtnContainer>

      <button className="text-gray-400 hover:text-customOrange cursor-pointer transition-all duration-300 ease-in">
      Borrar Todo

      </button>
    </FiltersContainer>
  );
};

export { Filters };
