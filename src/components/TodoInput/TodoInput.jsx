import React, { useState } from "react";

export const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      addTodo(input)
      setInput('')      
    }
  };

  // console.log(title)
  return (
    <form onSubmit={handleSubmit} className='mt-6 relative'>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="focus:shadow-lg font-inter focus:shadow-customOrange pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
        placeholder='Tareas'
      />
      <button type="submit" className="todo-submit">
        
      </button>
    </form>
        );
      };
