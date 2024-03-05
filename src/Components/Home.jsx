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
        <div id='home' className='flex flex-col p-5 mb-[5px] relative'>
            <div id='homeTop' className='mb-5 text-center'>
                <h1 className='text-3xl font-semibold'>To Do List<span className='text-[#9417e2]'>.</span></h1>
            </div>

            <div id='homeMiddle' className='flex items-center justify-between mb-5 px-[15px] border-y-[2px] border-[#9417e2] py-[10px]'>
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
                    <AddIcon className='!w-[42px] !h-[42px] bg-[#9417e2] border-[2px] border-[#9417e2] rounded-[50%] p-[5px] hover:bg-[#1f1e1e] ' />
                </Link>
            </div>

            {todos && todos.map((todo, index) => (
                <div id='homeContent' key={index} className={`mb-[15px] flex items-center justify-between bg-[#9417e2] px-[15px] py-[10px] rounded-[8px]`}>
                    <div className='flex items-center justify-start'>
                        <input type="checkbox" className='mr-[15px] w-[16px] h-[16px]' onChange={() => handleCheckboxChange(todo.id)} checked={todo.isChecked} />

                        <div className={`flex flex-col ${todo.isChecked ? 'line-through ' : ''}`}>
                            <p className='text-[20px] leading-none'>{todo.description}</p>
                            <p className='text-[10px] mt-[5px]'>
                                {todo.title ? (
                                    <>
                                        <span>{todo.title}</span>
                                        <span className='mx-[4px]'>•</span>
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
                                <EditIcon className='!w-[30px] !h-[30px] hover:bg-[#1f1e1e] rounded-[50%] p-[5px]' />
                            </Link>

                            <div onClick={() => handleDelete(todo.id)}>
                                <DeleteIcon className='!w-[30px] !h-[30px] hover:bg-[#1f1e1e] rounded-[50%] p-[5px]' />
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Home;