import { createContext,useContext } from "react";




 export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todoMessage:"Todo Message",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    editTodo:(id,todo)=>{},
    removeTodo:(id)=>{},
    toggleTodo:(id)=>{},
   


});

export const TodoProvider = TodoContext.Provider;


export const useTodo=()=>{
    return useContext(TodoContext);
}





