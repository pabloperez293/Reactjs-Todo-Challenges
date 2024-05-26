import { Filters } from "../Filters/Filters";
import { Todo } from "../Todo/Todo";

const TodoList = ({ todos, handleSetComplete, handleDelete }) => {
  return (
    <div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl'>
      {todos.map(todo => {
        return (
        <Todo key={todo.id} todo={todo} handleDelete={handleDelete} handleSetComplete={handleSetComplete}/>
        )
      })}
      <Filters />
    </div>
  );
};
export { TodoList };
