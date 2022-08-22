import React from "react";
import { useDispatch } from "react-redux";
import Delete from "../assets/images/cancel.png";
import {
  colorSelected,
  deleteTodo,
  toggleIsCompleted
} from "../Redux/todos/actions";


import EditImg from '../assets/images/edit.png';

const Todo = ({ todo ,editHander }) => {
  const dispatch = useDispatch();

 

  const checkHandler = (todoId) => {
    

    dispatch(toggleIsCompleted(todoId));
  };
 
  const colorHandler = (todoId, color) => {
    dispatch(colorSelected(todoId, color));
  };

  //  delete from todo

  const deleteHandler = (todoId) => {
    dispatch(deleteTodo(todoId));
  };


// edit handler 

 




  return (
    <div>
      <hr />
      <div className="flex justify-between md:m-4">
        <div className="flex items-center ">
          <input
            type="checkbox"
            onChange={() => checkHandler(todo.id)}
            checked={todo.completed}
            className={` w-4 h-4  checked:bg-green-600 default:ring-2 mr-2
      border border-green-500 rounded-full`}
          />

          <span className={`${todo.completed && "line-through text-blue-600"}`}>
            {" "}
            {todo.text}
          </span>
        </div>

        <div className="flex items-center gap-2">
           
            
            {
              !todo.completed && 
              <button onClick={()=> editHander(todo)}   className="w-6 h-6 cursor-pointer" >
                <img className="w-full " src={EditImg} alt={EditImg} />
              </button>
  
            }


          <div
            onClick={() => colorHandler(todo.id, "green")}
            className={`w-4 h-4 cursor-pointer border-2 border-green-600 ${
              todo.color === "green" && `bg-green-600`
            } rounded-full hover:bg-green-600`}
          ></div>
          <div
            onClick={() => colorHandler(todo.id, "yellow")}
            className={`w-4 h-4 cursor-pointer border-2 border-yellow-600 ${
              todo.color === "yellow" && `bg-yellow-600`
            } rounded-full hover:bg-yellow-600 `}
          ></div>
          <div
            onClick={() => colorHandler(todo.id, "red")}
            className={`w-4 h-4 cursor-pointer border-2 border-red-600  ${
              todo.color === "red" && `bg-red-600`
            } rounded-full hover:bg-red-600 `}
          ></div>
          <div
            onClick={() => deleteHandler(todo.id)}
            className="w-4 h-4  cursor-pointer  "
          >
            <img className="w-full" src={Delete} alt="delete" />
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Todo;
