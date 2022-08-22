 import { ADDED, CLEARCOMPLETED, COMPLETED, COMPLETEDALL, DELETED, EDITED, SELETECTEDCOLOR } from "./actionType";


 

import initialState from "./initialstate";


const myNextId=(todos)=>{

        const maxNum= todos.reduce((prev,curr)=>{
             
                return Math.max(prev,curr.id) ; 

 

        },-1) ;

        return maxNum + 1 
}


const reducer=(state=initialState,action)=>{

    switch(action.type){
        case ADDED: 
           return[
            ...state,
            {
              id:myNextId(state),
              text:action.payload,
              completed:false
            }
           ]
        case EDITED:
             return state.map(todo=>{

                  if(todo.id===action.payload.todoId){

                    return {
                        ...todo,
                        text:action.payload.newText
                    }
                  }

                return todo
             })

             
        case DELETED: 
                      console.log(action.payload)
             return state.filter(todo=> todo.id !== action.payload)
        
        case COMPLETEDALL:
             return state.map(todo=>{
                    return{
                        ...todo,
                        completed:true
                    }
             })
        case CLEARCOMPLETED:

             return state.filter(todo=>!todo.completed) 

        case SELETECTEDCOLOR:
                    const {todoId,color}=action.payload
             return state.map(todo=>{


                if(todo.id ===  todoId){
                    return{
                        ...todo,
                        color
                    }
                }

                return todo
             })

        case COMPLETED : 
         
            return state.map(todo=>{

                if(todo.id === action.payload){

                    return{
                        ...todo,
                        completed:!todo.completed
                    }
                }

                return todo 
            })


        default :
         return state

    }
}



export default reducer 

