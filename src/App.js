import React, { useState } from "react";
import { Title } from "./components/Title";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList/TodoList";
import { Todo } from "./components/Todo/Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: " Ver Pelicula Marvel",
      completed: false,
    },
    {
      id: 2,
      title: " Ver Pelicula DC",
      completed: false,
    },
    {
      id: 3,
      title: " Ver Pelicula DB",
      completed: false,
    },
    {
      id: 4,
      title: " Ver Pelicula One Piece",
      completed: false,
    },
  ]);

  // Funcionalidad
  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false,
    };
    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  };

  const handleSetComplete = (id) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedList);
  };

const handleDelete = (id) => {
  const updatedList = todos.filter(todo => todo.id !== id)
  setTodos(updatedList);
}

  return (
    <div className='bg-gray-800 min-h-screen h-full font-intel text-gray-100 flex items-center justify-center py-20 px-5'>
      <div className='container flex flex-col max-w-xl'>
        <Title />
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} handleSetComplete={handleSetComplete} handleDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default App;
