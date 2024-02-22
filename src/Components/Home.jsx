import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../Redux/TodoReducer';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Home() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos);

    const handleDelete = (id) => {
        dispatch(deleteTodo({ id: id }))
    }

    return (
        <div className='flex flex-col items-center h-screen home'>
            <div className='w-1/2 p-5 m-auto overflow-y-auto rounded bg-neutral-700'>
                <h2 className='mb-6 text-4xl font-semibold text-center'>Todo List</h2>

                <div className='flex items-center justify-between mb-6'>
                    <Link to={'/add'} className='p-2 text-white bg-green-500 rounded'>Add a new todo</Link>
                    <p>Total Todo Tasks: {todos.length}</p>
                </div>

                <table className='w-full'>
                    <thead>
                        <tr className='text-2xl text-white bg-black'>
                            <th className='w-3/12 py-2 border-2 border-white'>Title</th>
                            <th className='w-6/12 py-2 border-2 border-white'>Description</th>
                            <th className='w-3/12 py-2 border-2 border-white'>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {todos.map((todo, index) => (
                            <tr key={index}>
                                <td className='w-3/12 px-1 py-2 text-center border-2 border-white'>{todo.title}</td>
                                <td className='w-6/12 px-1 py-2 text-center border-2 border-white'>{todo.description}</td>
                                <td className='w-3/12 px-1 py-2 border-2 border-white'>
                                    <div className='flex items-center justify-center '>
                                        <Link to={`/update/${todo.id}`} className='px-4 py-1 mr-2 text-white bg-blue-500 rounded '>
                                            <EditIcon />
                                        </Link>
                                        <button className='px-4 py-1 text-white bg-red-500 rounded ' onClick={() => handleDelete(todo.id)}>
                                            <DeleteIcon />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home