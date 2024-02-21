import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../Redux/TodoReducer';

function Home() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos);

    const handleDelete = (id) => {
        dispatch(deleteTodo({ id: id }))
    }

    // console.log(todos)

    return (
        <div className='home h-screen flex flex-col items-center justify-center'>
            <div className='w-1/2 bg-yellow-100 p-5 mx-40'>
                <h2 className='text-3xl text-center font-semibold mb-5'>CRUD App with Redux Toolkit</h2>

                <div className='flex items-center justify-between mb-5'>
                    <Link to={'/add'} className='bg-green-500 text-white rounded p-2'>Add a new todo</Link>
                    <p>Total Todo Tasks: {todos.length}</p>
                </div>

                <table className='w-full'>
                    <thead>
                        <tr className='text-2xl bg-black text-white'>
                            <th className='py-2 border-r-2 border-white'>ID</th>
                            <th className='py-2'>Todo</th>
                            <th className='py-2 border-l-2 border-white'>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {todos.map((todo, index) => (
                            <tr key={index} className='border-b-2 border-black'>
                                <td className='text-center w-1/4 py-2'>{todo.id}</td>
                                <td className='text-center w-1/4 py-2'>{todo.todo}</td>
                                <td className='text-center w-1/4 py-2'>
                                    <Link to={`/update/${todo.id}`} className='bg-blue-500 text-white rounded p-2 px-3 mr-2'>Edit</Link>
                                    <button className='bg-red-500 text-white rounded p-2' onClick={() => handleDelete(todo.id)}>Delete</button>
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