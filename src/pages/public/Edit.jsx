import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "../../components/Form";
import { Routes } from "../../constants/Routes";
import { usePageMeta } from "../../hooks/usePageMeta";
import { editTodo } from "../../libs/redux/TodoReducer";

const Edit = () => {
    usePageMeta(Routes.EDIT.meta);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const todos = useSelector(state => state.todos);
    const todo = todos?.find(item => item.id == id);
    const [formData, setFormData] = useState({
        newTitle: "",
        newDescription: ""
    });

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editTodo({
            id,
            title: formData.newTitle,
            description: formData.newDescription,
        }))
        navigate(Routes.HOME.path);
    };

    useEffect(() => {
        if (todo) {
            setFormData({
                newTitle: todo.title,
                newDescription: todo.description
            });
        }
    }, [todo]);

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-full p-4 m-4 rounded-lg bg-[#9417e2] sm:w-2/3 sm:p-5 lg:w-1/2'>
                <h1 className='text-center text-2xl font-semibold pb-1 mb-5 border-b-2 border-[#1f1e1e] sm:text-3xl'>
                    Update To Do Task
                    <span className='text-[#1f1e1e]'>.</span>
                </h1>

                <Form
                    handleSubmit={handleEdit}
                    formStyleClass="flex flex-col gap-4"
                    formData={{
                        inputFields: [
                            {
                                title: 'Title',
                                labelStyleClass: 'text-xl font-semibold tracking-wide sm:text-2xl',
                                inputData: {
                                    id: "title",
                                    type: "text",
                                    name: "title",
                                    placeholder: "Enter title..",
                                    value: formData.newTitle,
                                    onChange: e => setFormData(prev => ({ ...prev, newTitle: e.target.value })),
                                },
                                inputStyleClass: "w-full px-3 py-2 rounded-lg outline-0 text-neutral-700 bg-white"
                            },
                            {
                                title: 'Description',
                                labelStyleClass: 'text-xl font-semibold tracking-wide sm:text-2xl',
                                inputData: {
                                    id: "description",
                                    type: "text",
                                    name: "description",
                                    placeholder: "Enter description..",
                                    value: formData.newDescription,
                                    onChange: e => setFormData(prev => ({ ...prev, newDescription: e.target.value })),
                                },
                                inputStyleClass: "w-full px-3 py-2 rounded-lg outline-0 text-neutral-700 bg-white"
                            }
                        ],

                        buttons: [
                            {
                                path: Routes.HOME.path,
                                title: Routes.HOME.title
                            },
                            {
                                title: Routes.EDIT.title
                            },
                        ]
                    }}
                />
            </div>
        </div>
    )
}

export default Edit