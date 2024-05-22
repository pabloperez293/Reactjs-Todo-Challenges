import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
const Todo = ({ todo }) => {
  const { title, completed } = todo;

  return (
    <div className='flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-customOrange focus:shadow-lg focus:shadow-customOrange border'>
      <div className='flex items-center '>
        {/* Render */}
        {completed ? (
          <div className="bg-green-700 p-1 rounded-full cursor-pointer">
            <FaCheckCircle className="h-4 w-4" alt='Check Icon' />
          </div>
        ) : (
          <span className=' border border-customOrange border-solid p-3 rounded-full cursor-pointer'></span>
        )}
        <p className={"pl-3" * (completed && "line-through")}>{ title }</p>
      </div>
      <div className='h-5 w-5 cursor-pointer transition-all duration-200 ease-in'>
        {" "}
        <MdDelete />
      </div>
    </div>
  );
};
export { Todo };
