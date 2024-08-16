import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateTodo } from '../Redux/TodoReducer';

function Update() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const todos = useSelector((state) => state.todos);
    const existingTodo = todos.filter(e => e.id === id);
    const { title, description } = existingTodo[0];
    const [editTitle, setEditTitle] = useState(title);
    const [editDescription, setEditDescription] = useState(description);

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(updateTodo({
            id: id,
            title: editTitle,
            description: editDescription,
        }))
        navigate('/');
    }

    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <div className='w-full h-fit rounded-lg p-4 m-4 bg-[#9417e2] lg:w-1/2 sm:w-[70%] sm:p-5'>
                <div className='text-center mb-5 pb-3 border-b-2 border-[#1f1e1e]'>
                    <h1 className='text-2xl font-semibold sm:text-3xl'>Update To Do Task<span className='text-[#1f1e1e]'>.</span></h1>
                </div>

                <form onSubmit={handleEdit}>
                    <div className='mb-4'>
                        <label className='text-xl font-semibold tracking-wide sm:text-2xl' htmlFor="title">Title:</label>
                        <input className='w-full p-2 rounded-lg outline-0 text-neutral-700' type="text" name="title" placeholder='Enter title..' value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                    </div>
                    <div className='mb-4'>
                        <label className='text-xl font-semibold tracking-wide sm:text-2xl' htmlFor="description">Description:</label>
                        <input className='w-full p-2 rounded-lg outline-0 text-neutral-700' type="text" name="description" placeholder='Enter description..' value={editDescription} onChange={e => setEditDescription(e.target.value)} required />
                    </div>
                    <div className='flex items-center justify-between mt-5'>
                        <Link to={'/'} className='px-5 py-2 rounded-lg border-2 border-[#1f1e1e] bg-[#1f1e1e] hover:bg-[#9417e2]'>Back</Link>
                        <button className='px-5 py-2 rounded-lg border-2 border-[#1f1e1e] bg-[#1f1e1e] hover:bg-[#9417e2]'>Edit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update