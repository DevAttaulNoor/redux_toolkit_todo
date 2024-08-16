import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodo } from '../Redux/TodoReducer';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Home() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const remainingTodos = todos.filter(todo => !todo.isChecked).length;

    const handleDelete = (id) => {
        dispatch(deleteTodo({ id: id }));
    };

    const handleCheckboxChange = (id) => {
        dispatch(toggleTodo({ id: id }));
    };

    const timeAgowithInitials = (timestamp) => {
        const currentDate = new Date();
        const postDate = timestamp
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

    return (
        <div className='flex flex-col p-3 sm:p-5'>
            <div className='text-center'>
                <h1 className='text-3xl font-semibold'>To Do List<span className='text-[#9417e2]'>.</span></h1>
            </div>

            <div className='flex items-center justify-between p-3.5 my-4 border-y-2 border-[#9417e2]'>
                <div>
                    {todos?.length > 1 ? (
                        <p>Total Todos = {todos?.length}</p>
                    ) : (
                        <p>Total Todo = {todos?.length}</p>
                    )}

                    {remainingTodos > 1 ? (
                        <p>Remaining Todos = {remainingTodos}</p>
                    ) : (
                        <p>Remaining Todo = {remainingTodos}</p>
                    )}
                </div>

                <Link to={'/add'}>
                    <AddIcon className='!w-10 !h-10 rounded-[50%] p-1.5 border-2 border-[#9417e2] bg-[#9417e2] hover:bg-[#1f1e1e]' />
                </Link>
            </div>

            {todos && todos.map((todo, index) => (
                <div key={index} className='flex items-center justify-between rounded-lg px-4 py-3 mb-3 bg-[#9417e2]'>
                    <div className='flex items-center justify-start'>
                        <input type="checkbox" className='w-4 h-4 mr-4 cursor-pointer' onChange={() => handleCheckboxChange(todo.id)} checked={todo.isChecked} />

                        <div className={`flex flex-col ${todo.isChecked ? 'line-through ' : ''}`}>
                            <p className='text-xl leading-none'>{todo.description}</p>
                            <p className='mt-1 text-xs'>
                                {todo.title ? (
                                    <>
                                        <span>{todo.title}</span>
                                        <span className='mx-1'>•</span>
                                        <span>{timeAgowithInitials(todo.time)}</span>
                                    </>
                                ) : (
                                    <span>{timeAgowithInitials(todo.time)}</span>
                                )}
                            </p>
                        </div>
                    </div>

                    {!todo.isChecked && (
                        <div className='flex items-center'>
                            <Link to={`/update/${todo.id}`}>
                                <EditIcon className='!w-8 !h-8 rounded-[50%] p-1.5 hover:bg-[#1f1e1e]' />
                            </Link>

                            <div onClick={() => handleDelete(todo.id)}>
                                <DeleteIcon className='!w-8 !h-8 rounded-[50%] p-1.5 hover:bg-[#1f1e1e]' />
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Home;