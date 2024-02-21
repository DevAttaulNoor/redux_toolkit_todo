import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../Redux/TodoReducer'

function Add() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const todos = useSelector((state) => state.todos)
    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ id: todos[todos.length - 1].id + 1, todo }))
        navigate('/')
    }

    return (
        <div className='add h-screen flex flex-col items-center justify-center'>
            <div className='w-1/2 bg-yellow-100 p-5 mx-40'>
                <h3 className='text-3xl text-center font-semibold mb-5'>Add New Todo</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="todo">Todo:</label>
                        <input type="text" name="todo" placeholder='Enter todo..' onChange={e => setTodo(e.target.value)} />
                    </div>
                    <div>
                        <Link to={'/'} className='bg-gray-500 text-white rounded py-2 px-4'>Back</Link>
                        <button className='bg-green-500 text-white rounded py-2 px-4'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add