import React from 'react'
import { useTodo } from '../context/TodoContext';

const TodoItem = ({todo}) => {
    const {removeTodo,toggleTodo,editTodo}=useTodo();
    const [isTodoEditable,setIsTodoEditable]=React.useState(false);
    const [todoMsg,setTodoMsg]=React.useState(todo.todoMessage);
    const handleRemove=()=>{
        removeTodo(todo.id);
    }
    const toof=()=>{
        toggleTodo(todo.id);
    }
    const handleEdit=()=>{
        editTodo(todo.id,{...todo,todoMessage:todoMsg});
        setIsTodoEditable(false);
    }

  return (
    <div className={`flex justify-between items-center text-blue-950 bg-gray-100 p-4 rounded-md mb-2 duration-300 shadow-md hover:shadow-lg ${todo.completed?"bg-green-300":"bg-gray-100"}`}>
        <input type="checkbox"
        checked={todo.completed}
        onChange={toof}
        className='mr-2 cursor-pointer'
        />
        <input type="text"  value={todoMsg} 
        onChange={(e)=>setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        className={`w-full outline-none ${isTodoEditable?"border-black/10 px-2":"border-transparent"} text-blue-950 ${todo.completed?"line-through":"no-underline"}`}/>


        {/* edit save and delete button */}
        <button
        className='bg-blue-500 text-white px-8 py-2 rounded-md mr-2 hover:bg-blue-600 duration-300 inline-flex w-8 h-8 justify-center items-center '
        onClick={()=>{
            if(todo.completed) return ;
            if(isTodoEditable){
                handleEdit();
            }
            else{
                setIsTodoEditable(true);
            }
        }}
        disabled={todo.completed}
        >
            {isTodoEditable?"Save":"Edit"}

        </button>
        <button className='bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600 duration-300 inline-flex w-8 h-8 justify-center items-center'
        onClick={handleRemove}
        >
            delete
        </button>
        </div>  

  )
}

export default TodoItem