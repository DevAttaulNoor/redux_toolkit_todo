import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../Redux/TodoReducer'

function Add() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const time = Date()
    const todos = useSelector((state) => state.todos)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const timeAgowithInitials = (timestamp) => {
        if (!timestamp || !timestamp.toDate) {
            return "0s"
        }
        const currentDate = new Date();
        const postDate = timestamp.toDate();
        const seconds = Math.floor((currentDate - postDate) / 1000);
        const secondsDifference = Math.max(seconds, 1);
        const periods = {
            D: 315360000,
            Y: 31536000,
            M: 2628000,
            w: 604800,
            d: 86400,
            h: 3600,
            m: 60,
            s: 1,
        };

        let elapsed = 0;
        let granularity = 0;
        let unit = '';

        for (const period in periods) {
            elapsed = Math.floor(secondsDifference / periods[period]);

            if (elapsed >= 1) {
                granularity = elapsed;
                unit = period;
                break;
            }
        }
        return `${granularity}${unit}${granularity > 1 ? '' : ''}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newId = 1;

        if (todos.length !== 0) {
            newId = todos[todos.length - 1].id + 1;
        }

        dispatch(addTodo({ id: newId, title, description, time: timeAgowithInitials(time) }));
        navigate('/')
    }

    return (
        <div id='add' className='flex flex-col items-center justify-center w-full h-screen'>
            <div className='bg-[#9417e2] w-1/2 h-fit p-5 rounded-[8px]'>
                <div id='addTop' className='mb-5 pb-[10px] text-center border-b-[2px] border-[#1f1e1e]'>
                    <h1 className='text-3xl font-semibold'>Add To Do Task<span className='text-[#1f1e1e]'>.</span></h1>
                </div>

                <div id='addContent'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label className='text-2xl font-semibold tracking-wide' htmlFor="title">Title:</label>
                            <input className='w-full p-2 text-neutral-700 outline-0 rounded-[8px]' type="text" name="title" placeholder='Enter title..' onChange={e => setTitle(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <label className='text-2xl font-semibold tracking-wide' htmlFor="description">Description:</label>
                            <input className='w-full p-2 text-neutral-700 outline-0 rounded-[8px]' type="text" name="description" placeholder='Enter description..' onChange={e => setDescription(e.target.value)} />
                        </div>
                        <div className='flex items-center justify-between mt-5'>
                            <Link to={'/'} className='px-5 py-2 bg-[#1f1e1e] border-[2px] border-[#1f1e1e] rounded-[8px] hover:bg-[#9417e2]'>Back</Link>
                            <button className='px-5 py-2 bg-[#1f1e1e] border-[2px] border-[#1f1e1e] rounded-[8px] hover:bg-[#9417e2]'>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add