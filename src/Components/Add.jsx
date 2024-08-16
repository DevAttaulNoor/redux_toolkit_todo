import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../Redux/TodoReducer'

function Add() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const todos = useSelector((state) => state.todos)
    const time = new Date()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        let newId = 1;

        if (todos.length !== 0) {
            newId = todos[todos.length - 1].id + 1;
        }

        dispatch(addTodo({ id: newId, title, description, time }));
        navigate('/')
    }

    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <div className='w-full h-fit rounded-lg p-4 m-4 bg-[#9417e2] lg:w-1/2 sm:w-[70%] sm:p-5'>
                <div className='text-center mb-5 pb-3 border-b-2 border-[#1f1e1e]'>
                    <h1 className='text-2xl font-semibold sm:text-3xl'>Add To Do Task<span className='text-[#1f1e1e]'>.</span></h1>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='text-xl font-semibold tracking-wide sm:text-2xl' htmlFor="title">Title:</label>
                        <input className='w-full p-2 rounded-lg outline-0 text-neutral-700' type="text" name="title" placeholder='Enter title..' onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className='mb-4'>
                        <label className='text-xl font-semibold tracking-wide sm:text-2xl' htmlFor="description">Description:</label>
                        <input className='w-full p-2 rounded-lg outline-0 text-neutral-700' type="text" name="description" placeholder='Enter description..' onChange={e => setDescription(e.target.value)} required />
                    </div>
                    <div className='flex items-center justify-between mt-5'>
                        <Link to={'/'} className='px-5 py-2 rounded-lg border-2 border-[#1f1e1e] bg-[#1f1e1e] hover:bg-[#9417e2]'>Back</Link>
                        <button className='px-5 py-2 rounded-lg border-2 border-[#1f1e1e] bg-[#1f1e1e] hover:bg-[#9417e2]'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add