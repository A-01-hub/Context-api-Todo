import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

const TodoForm = () => {
    const [todo,setTodo]=useState("");
    const {addTodo}=useTodo();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(todo){
            addTodo({todoMessage:todo,completed:false});
            setTodo("");
        }
    }


return (
    <form action="" className='flex' onSubmit={handleSubmit}>
            <input type="text" placeholder='Add Todo'
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            required
             className='border border-gray-100 rounded-md px-4 py-2 w-full mr-2 bg-gray-100 duration-200 outline-none'/>
            <button type='submit' className='bg-blue-500 text-white px-6 py-0 rounded-4xl hover:bg-blue-600 duration-100'>Add Todo</button>
    </form>
)
}

export default TodoForm