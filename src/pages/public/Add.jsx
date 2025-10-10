import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/Form";
import { Routes } from "../../constants/Routes";
import { addTodo } from "../../libs/redux/TodoReducer";

const Add = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const todos = useSelector(state => state.todos);
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        let newId = 1;

        if (todos.length !== 0) {
            newId = todos[todos.length - 1].id + 1;
        }

        dispatch(addTodo({
            id: newId,
            title: formData.title,
            description: formData.description
        }));
        navigate(Routes.HOME.path)
    }

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-full p-4 m-4 rounded-lg bg-[#9417e2] sm:w-2/3 sm:p-5 lg:w-1/2'>
                <h1 className='text-center text-2xl font-semibold pb-1 mb-5 border-b-2 border-[#1f1e1e] sm:text-3xl'>
                    Add To Do Task
                    <span className='text-[#1f1e1e]'>.</span>
                </h1>

                <Form
                    handleSubmit={handleSubmit}
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
                                    value: formData.title,
                                    onChange: e => setFormData(prev => ({ ...prev, title: e.target.value })),
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
                                    value: formData.description,
                                    onChange: e => setFormData(prev => ({ ...prev, description: e.target.value })),
                                },
                                inputStyleClass: "w-full px-3 py-2 rounded-lg outline-0 text-neutral-700 bg-white"
                            }
                        ],

                        buttons: [
                            {
                                path: Routes.HOME.path,
                                title: 'Back'
                            },
                            {
                                title: 'Add'
                            },
                        ]
                    }}
                />
            </div>
        </div>
    )
}

export default Add