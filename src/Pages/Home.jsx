import React from 'react'
import { useState,useEffect } from 'react';
import { TodoContext } from '../context';
import {TodoProvider}from '../context/TodoContext';
import TodoForm from '../Components/TodoForm';
import TodoItem from '../Components/TodoItem';

const Home = () => {
    const [todos,setTodos]=useState([]);
    const addTodo=(todo)=>{
        // todo value get from the form and it is object with id ,todoMessage and completed


        // prevTodos is a array of objects and we are spreading the previous todos and adding the new todo to it.

        setTodos((prevTodos)=>([...prevTodos,{id:Date.now(),...todo}]));
        // here we are adding the new todo to the previous todos array and in the setTodos we are giving the callback function which will give us the previous todos and we are spreading the previous todos and adding the new todo to it.

        // so the new todo will be added to the end of the array 
    };


    const editTodo=(id,todo)=>{
        // prevTodos is a array of objects and we are mapping through it and checking if the id of the prevTodo is equal to the id of the todo we are passing in the function and if it is then we are returning the todo object and if it is not then we are returning the prevTodo object.
        setTodos((prevTodos)=>prevTodos.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo))); // prevTodo is a object 
            
    }

    const removeTodo=(id)=>{
            setTodos((prev)=>prev.filter((todo)=>todo.id!==id));

    }

    const toggleTodo=(id)=>{
        setTodos((prev)=>(prev.map((todo)=>(todo.id===id?{...todo,completed:!todo.completed}:todo))));
    }

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos"));
        if (savedTodos && savedTodos.length > 0) {
            setTodos(savedTodos);
        }
    }, []);
    

    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos));
    }
    , [todos]);
     

  return (
   <TodoProvider value={{todos,addTodo,editTodo,removeTodo,toggleTodo}}>
     <div className='bg-white min-h-screen py-8'>

<div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-blue-950'>
<h1 className='text-2xl font-semibold text-center mb-8 mt-2'>Manage your Todo </h1>

<div className='mb-5'>
 <TodoForm/>

</div>

<div className='flex flex-col gap-4'>
    {todos.length>0?todos.map((todo)=>(
        <TodoItem key={todo.id} todo={todo}/>
    )):<p className='text-center text-gray-500'>No Todos Found</p>}
</div>

</div>
</div>
   </ TodoProvider>
  )
}


export default Home