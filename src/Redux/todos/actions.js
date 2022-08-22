import { ADDED, CLEARCOMPLETED, COMPLETED, COMPLETEDALL, DELETED, EDITED, SELETECTEDCOLOR } from "./actionType";


export const  addTodo=(todoText)=>{

    return{
        type:ADDED,
        payload:todoText
    }
}

export  const deleteTodo=(todoId)=>{
     return{
        type:DELETED,
        payload:todoId
     }
} ;

export const clearCompleted=()=>{
    return{
        type:CLEARCOMPLETED

    }
} ;


export const completedAll=()=>{
    return{
        type:COMPLETEDALL

    }
} ;


export const  colorSelected=(todoId,color)=>{
    return{
        type:SELETECTEDCOLOR,
        payload:{
            todoId,
            color
        }

    }
}


export const toggleIsCompleted=(todoId)=>{
    return{
        type:COMPLETED ,
        payload:todoId
    }
}



 export const editTodo=(todoId,newText)=>{

     return{
        type:EDITED,
        payload:{
            todoId,
            newText
        }
     }
 }