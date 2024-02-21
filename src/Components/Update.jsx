import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateTodo } from '../Redux/TodoReducer';

function Update() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const todos = useSelector((state) => state.todos);
    const existingTodo = todos.filter(e => e.id == id);
    const {todo} = existingTodo[0];
    const [editTodo, setEditTodo] = useState(todo);

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(updateTodo({
            id: id,
            todo: editTodo,
        }))
        navigate('/');
    }

    return (
        <div className='update h-screen flex flex-col items-center justify-center'>
            <div className='w-1/2 bg-yellow-100 p-5 mx-40'>
                <h3 className='text-3xl text-center font-semibold mb-5'>Edit Todo</h3>
                <form onSubmit={handleEdit}>
                    <div>
                        <label htmlFor="todo">Todo:</label>
                        <input type="text" name="todo" placeholder='Enter todo..' value={editTodo} onChange={e => setEditTodo(e.target.value)} />
                    </div>
                    <div>
                        <Link to={'/'} className='bg-gray-500 text-white rounded py-2 px-4'>Back</Link>
                        <button className='bg-blue-500 text-white rounded py-2 px-4'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update