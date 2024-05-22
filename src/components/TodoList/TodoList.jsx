import { Filters } from "../Filters/Filters";
import { Todo } from "../Todo/Todo";

const TodoList = ({ todos }) => {
  return (
    <div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl'>
      {todos.map(todo => {
        return (
        <Todo key={todo.id} todo={todo} />
        )
      })}
      <Filters />
    </div>
  );
};
export { TodoList };
