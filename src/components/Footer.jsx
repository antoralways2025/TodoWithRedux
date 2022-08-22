import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChange, statusChange } from "../Redux/filters/actions";

const Footer = () => {
  const dispatch = useDispatch();

  const { filters, todos } = useSelector((state) => state);

  const statusHandler = (status) => {
    dispatch(statusChange(status));
  };

  const colorsHander = (color) => {
    if (filters.colors.includes(color)) {
      dispatch(colorChange(color, "removed"));
    } else {
      dispatch(colorChange(color, "added"));
    }
  };


   const clearTask=()=>{ 

          const all = todos.filter(todo=>todo.completed).length ;
           
            switch(all){
              case 0: return ` 0 task Left`

               case 1: return `1 task   left `
                default : return `${all} tasks left`
            }


   }

  return (
    <div className="flex justify-between mt-4">
      <div>
        <span className="text-sm"> {clearTask()} </span>
      </div>

      <div className="flex items-center gap-2">
        <div>
          <span
            onClick={() => statusHandler("All")}
            className={`text-sm  cursor-pointer ${
              filters.status === "All" && "font-bold"
            } text-gray-500`}
          >
            All{" "}
          </span>{" "}
          |
        </div>
        <div>
          <span
            onClick={() => statusHandler("Incomplete")}
            className={`text-sm  cursor-pointer ${
              filters.status === "Incomplete" && "font-bold"
            } text-gray-500`}
          >
            Incomplete
          </span>{" "}
          |
        </div>
        <div>
          <span
            onClick={() => statusHandler("Completed")}
            className={`text-sm  cursor-pointer ${
              filters.status === "Completed" && "font-bold"
            } text-gray-500`}
          >
            Completed
          </span>{" "}
          |
        </div>

        <div
          onClick={() => colorsHander("green")}
          className={`w-3 h-3 cursor-pointer border-2 border-green-600 rounded-full hover:bg-green-600 ${filters.colors.includes("green") && 'bg-green-600'} `}
        ></div>
        <div
          onClick={() => colorsHander("yellow")}
          className={`w-3 h-3 cursor-pointer border-2 border-yellow-600 rounded-full hover:bg-yellow-600 ${filters.colors.includes("yellow") && 'bg-yellow-600'}`}
        ></div>
        <div
          onClick={() => colorsHander("red")}
          className={`w-3 h-3 cursor-pointer border-2 border-red-600 rounded-full hover:bg-red-600 ${filters.colors.includes("red") && 'bg-red-600'}`}
        ></div>
      </div>
    </div>
  );
};

export default Footer;
