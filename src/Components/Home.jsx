import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../Redux/TodoReducer';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Home() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos);

    const handleDelete = (id) => {
        dispatch(deleteTodo({ id: id }))
    }

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

    return (
        <div id='home' className='flex flex-col p-5 mb-[5px] relative'>
            <div id='homeTop' className='mb-5 text-center'>
                <h1 className='text-3xl font-semibold'>To Do List<span className='text-[#9417e2]'>.</span></h1>
            </div>

            <div id='homeMiddle' className='flex items-end justify-between mb-5 px-[15px] border-y-[2px] border-[#9417e2] py-[10px]'>
                {todos.length > 1 ? (
                    <p>Remaining Tasks To do = {todos.length}</p>
                ) : (
                    <p>Remaining Task To do = {todos.length}</p>
                )}
                
                <Link to={'/add'}>
                    <AddIcon className='!w-[30px] !h-[30px] bg-[#9417e2] border-[2px] border-[#9417e2] rounded-[50%] p-[5px] hover:bg-[#1f1e1e] ' />
                </Link>
            </div>

            {todos.map((todo, index) => (
                <div id='homeContent' key={index} className='mb-[15px] flex items-center justify-between bg-[#9417e2] px-[15px] py-[10px] rounded-[8px]'>
                    <div className='flex justify-start items-center'>
                        <input type="checkbox" className='mr-[15px] w-[16px] h-[16px]' />

                        <div className='flex flex-col'>
                            <p className='text-[20px] leading-none'>{todo.description}</p>
                            <p className='text-[10px] mt-[5px]'><span>{todo.title}</span> <span className='mx-[2px]'>•</span> <span>{timeAgowithInitials(todo.time)}</span></p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <Link to={`/update/${todo.id}`}>
                            <EditIcon className='!w-[30px] !h-[30px] hover:bg-[#1f1e1e] rounded-[50%] p-[5px]' />
                        </Link>

                        <div onClick={() => handleDelete(todo.id)}>
                            <DeleteIcon className='!w-[30px] !h-[30px] hover:bg-[#1f1e1e] rounded-[50%] p-[5px]' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home