import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateTodo } from '../Redux/TodoReducer';

function Update() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
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
        <div className='flex flex-col items-center justify-center h-screen update'>
            <div className='w-1/2 p-5 mx-40 rounded-lg bg-neutral-700'>
                <h3 className='mb-6 text-3xl font-semibold text-center'>Edit Todo</h3>
                <form onSubmit={handleEdit}>
                    <div className='flex flex-col'>
                        <div className='mb-3'>
                            <label className='text-xl' htmlFor="title">Title:</label>
                            <input className='w-full p-2 text-neutral-700 outline-0' type="text" name="title" placeholder='Enter title..' value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label className='text-xl' htmlFor="description">Description:</label>
                            <input className='w-full p-2 text-neutral-700 outline-0' type="text" name="description" placeholder='Enter description..' value={editDescription} onChange={e => setEditDescription(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Link to={'/'} className='px-4 py-2 text-white bg-gray-500 rounded'>Back</Link>
                        <button className='px-4 py-2 text-white bg-blue-500 rounded'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update