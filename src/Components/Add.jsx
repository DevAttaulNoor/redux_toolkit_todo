import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../Redux/TodoReducer'
import Checkbox from '@mui/material/Checkbox';

function Add() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const todos = useSelector((state) => state.todos)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const time = new Date().toLocaleTimeString()
    const date = new Date().toLocaleDateString()
    const complete = <Checkbox />

    const handleSubmit = (e) => {
        e.preventDefault();
        let newId = 1;

        if (todos.length !== 0) {
            newId = todos[todos.length - 1].id + 1;
        }
        
        dispatch(addTodo({ id: newId, title, description, time, date, complete}));
        navigate('/')
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen add'>
            <div className='w-1/2 p-5 mx-40 rounded bg-neutral-700'>
                <h3 className='mb-6 text-3xl font-semibold text-center'>Add New Todo</h3>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <div className='mb-3'>
                            <label className='text-xl' htmlFor="title">Title:</label>
                            <input className='w-full p-2 text-neutral-700 outline-0' type="text" name="title" placeholder='Enter title..' onChange={e => setTitle(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label className='text-xl' htmlFor="description">Description:</label>
                            <input className='w-full p-2 text-neutral-700 outline-0' type="text" name="description" placeholder='Enter description..' onChange={e => setDescription(e.target.value)} />
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <Link to={'/'} className='px-4 py-2 text-white bg-gray-500 rounded'>Back</Link>
                        <button className='px-4 py-2 text-white bg-green-500 rounded '>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add