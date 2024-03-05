import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateTodo } from '../Redux/TodoReducer';

function Update() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const todos = useSelector((state) => state.todos);
    const existingTodo = todos.filter(e => e.id == id);
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
        <div id='update' className='flex flex-col items-center justify-center w-full h-screen'>
            <div className='bg-[#9417e2] w-1/2 h-fit p-5 rounded-[8px]'>
                <div id='updateTop' className='mb-5 pb-[10px] text-center border-b-[2px] border-[#1f1e1e]'>
                    <h1 className='text-3xl font-semibold'>Update To Do Task<span className='text-[#1f1e1e]'>.</span></h1>
                </div>

                <div id='updateContent'>
                    <form onSubmit={handleEdit}>
                        <div className='mb-4'>
                            <label className='text-2xl font-semibold tracking-wide' htmlFor="title">Title:</label>
                            <input className='w-full p-2 text-neutral-700 outline-0 rounded-[8px]' type="text" name="title" placeholder='Enter title..' value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <label className='text-2xl font-semibold tracking-wide' htmlFor="description">Description:</label>
                            <input className='w-full p-2 text-neutral-700 outline-0 rounded-[8px]' type="text" name="description" placeholder='Enter description..' value={editDescription} onChange={e => setEditDescription(e.target.value)} required/>
                        </div>
                        <div className='flex items-center justify-between mt-5'>
                            <Link to={'/'} className='px-5 py-2 bg-[#1f1e1e] border-[2px] border-[#1f1e1e] rounded-[8px] hover:bg-[#9417e2]'>Back</Link>
                            <button className='px-5 py-2 bg-[#1f1e1e] border-[2px] border-[#1f1e1e] rounded-[8px] hover:bg-[#9417e2]'>Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Update