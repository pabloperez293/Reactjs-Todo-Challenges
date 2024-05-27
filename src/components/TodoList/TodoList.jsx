import { Filters } from "../Filters/Filters";
import { Todo } from "../Todo/Todo";

const TodoList = ({
  todos,
  handleSetComplete,
  handleDelete,
  showAllTodos,
  activeFilter,
  showActiveTodos,
  showCompletedTodos,
  handleClearCompleted,
}) => {
  return (
    <div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl'>
      {todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleSetComplete={handleSetComplete}
          />
        );
      })}
      <Filters
        activeFilter={activeFilter}
        total={todos.length}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearCompleted={handleClearCompleted}
      />
    </div>
  );
};
export { TodoList };
