import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import checkImg from '../assets//images/double-tick.png'
import noteImg from '../assets/images/notes.png'
import AddImg from '../assets/images/plus.png'
import { addTodo, clearCompleted, completedAll, editTodo } from '../Redux/todos/actions'
import TodoList from './TodoList'


const Hearder = () => { 

   const dispatch= useDispatch( ) ;

    const [input,setInput]=useState("")

     const [isEdit,setIsEdit]=useState(false)  ;
     const [id,setId]=useState()

     const editHander=(todo)=>{

      setInput(todo.text)
      setId(todo.id)

      setIsEdit(true)

   }


   const submitHandler=(e)=>{ 


      
      e.preventDefault() ; 

        if(input.trim().length < 1) return alert("Please give me Todo Name")

       if(isEdit){

          dispatch(editTodo(id,input)) 

          setIsEdit(false)

       }else{
        dispatch(addTodo(input))
       }



       setInput(" ")
        



   }



   const completeHandler=()=>{ 

      dispatch(completedAll())

   } 

  
 
    

    const allClearHander=()=>{

          dispatch(clearCompleted())
    }


  
  


  return (
   < >
     <form onSubmit={submitHandler}> 

<div className='bg-gray-100 p-3 flex items-center rounded ' > 

<img className='w-6 h-6' src={noteImg} alt=""/>

   <input   value={input}  onChange={(e)=> setInput(e.target.value)} className='w-full  ml-2 text-lg border-none outline-none bg-transparent'  type="text" placeholder='Type your Todo' /> 

    <button type='submit'><img className='w-6 h-6' src={AddImg} alt="" /></button>
</div>

</form>

<div className='flex  my-4  justify-between'>

    <div className='flex items-center bg-purple-400 rounded p-2 text-white ' onClick={completeHandler}>    
        <img className='w-6 h-6 bg-red-600 rounded-full' src={checkImg} alt="" />
        <button  className=' ml-2
     '>complete All task!</button>
     </div>

     <div> <button onClick={allClearHander} className='  bg-purple-400 rounded p-2 text-white'>Clear Completed !</button></div>

</div>


<TodoList  editHander={editHander}  /> 

   </>
  )
}

export default Hearder