import React from 'react';
import { useSelector } from 'react-redux';

import Todo from './Todo';



const TodoList = ({editHander}) => { 

    const  {todos ,filters} =useSelector(state=>state) ; 

    const {status ,colors}=filters


    const filterByStatus=(todo)=>{

         switch(status){

          case "Completed":
             return  todo.completed 
          case "Incomplete":
            return !todo.completed

            default : return true 
         }
    }
    

  
    const filterByColors=(todo)=>{

            if(colors.length > 0 ){
              return colors.includes(todo?.color)
            }


          return true 
    }
   
   
  return (
          <div className=' overflow-y-auto  scroll-smooth h-48'> 

            {
              todos.filter(filterByStatus)
              .filter(filterByColors)
              
              .map(todo=> <Todo  editHander={editHander} todo={todo} key={todo.id} /> )
            }
             
             
              
          </div>
  )
}

export default TodoList