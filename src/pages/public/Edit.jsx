import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Routes } from "../../constants/Routes";
import { editTodo } from "../../libs/redux/TodoReducer";

const Edit = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const todos = useSelector(state => state.todos);
    const todo = todos?.find(item => item.id == id);
    const [formData, setFormData] = useState({
        newTitle: "",
        newDescription: ""
    });

    useEffect(() => {
        if (todo) {
            setFormData({
                newTitle: todo.title,
                newDescription: todo.description
            });
        }
    }, [todo]);

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editTodo({
            id,
            title: formData.newTitle,
            description: formData.newDescription,
        }))
        navigate(Routes.HOME.path);
    }

    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <div className='w-full h-fit rounded-lg p-4 m-4 bg-[#9417e2] lg:w-1/2 sm:w-[70%] sm:p-5'>
                <div className='text-center mb-5 pb-3 border-b-2 border-[#1f1e1e]'>
                    <h1 className='text-2xl font-semibold sm:text-3xl'>Update To Do Task<span className='text-[#1f1e1e]'>.</span></h1>
                </div>

                <form onSubmit={handleEdit}>
                    <div className='mb-4'>
                        <label
                            htmlFor="title"
                            className='text-xl font-semibold tracking-wide sm:text-2xl'
                        >
                            Title:
                        </label>

                        <input
                            type="text"
                            name="title"
                            placeholder='Enter title..'
                            value={formData.newTitle}
                            onChange={e => setFormData(prev => ({ ...prev, newTitle: e.target.value }))}
                            className='w-full p-2 rounded-lg outline-0 text-neutral-700'
                        />
                    </div>

                    <div className='mb-4'>
                        <label
                            className='text-xl font-semibold tracking-wide sm:text-2xl'
                            htmlFor="description"
                        >
                            Description:
                        </label>

                        <input
                            required
                            type="text"
                            name="description"
                            placeholder='Enter description..'
                            value={formData.newDescription}
                            onChange={e => setFormData(prev => ({ ...prev, newDescription: e.target.value }))}
                            className='w-full p-2 rounded-lg outline-0 text-neutral-700'
                        />
                    </div>

                    <div className='flex items-center justify-between mt-5'>
                        <Link
                            to={Routes.HOME.path}
                            className='px-5 py-2 rounded-lg border-2 border-[#1f1e1e] bg-[#1f1e1e] hover:bg-[#9417e2]'
                        >
                            Back
                        </Link>

                        <button
                            className='px-5 py-2 rounded-lg border-2 border-[#1f1e1e] bg-[#1f1e1e] hover:bg-[#9417e2]'
                        >
                            Edit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Edit