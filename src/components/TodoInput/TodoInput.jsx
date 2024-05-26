import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleTodo = (e) =>{
    if (e.key.toLowerCase() === "enter") {
      addTodo(title)
      setTitle('')      
    }
  }

  // console.log(title)
  return (
    <div className='mt-6 relative'>
      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
        <span className='border border-customOrange border-solid p-3 rounded-full'></span>
      </div>
      <input
        type='text'
        className='focus:shadow-lg font-inter focus:shadow-customOrange pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out'
        placeholder='Tareas'
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={e => handleTodo(e)}
      />
    </div>
  );
};
export { TodoInput };
