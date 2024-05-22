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
    }
  ])

  // Funcionalidad
  const AddTodo = {title} => {
    const lastId
  }

  return (
    <div className='bg-gray-800 min-h-screen h-full font-intel text-gray-100 flex items-center justify-center py-20 px-5'>
      <div className='container flex flex-col max-w-xl'>
        <Title />
        <TodoInput />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
