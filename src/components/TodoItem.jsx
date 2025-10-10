import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Routes } from "../constants/Routes"
import { ReactIcons } from "../constants/ReactIcons"
import { formatingTimewithInitials } from "../utils/FormatTime"
import { deleteTodo, toggleTodo } from "../libs/redux/TodoReducer"

export const TodoItem = ({ todoData }) => {
    const dispatch = useDispatch();

    return (
        <div className='flex items-center justify-between px-4 py-3 rounded-lg bg-[#9417e2]'>
            <div className='flex items-center gap-3'>
                <input
                    type="checkbox"
                    checked={todoData.isChecked}
                    onChange={() => dispatch(toggleTodo({ id: todoData.id }))}
                    className='w-4 h-4 cursor-pointer accent-green-500'
                />

                <div className={`flex flex-col gap-1.5 ${todoData.isChecked ? 'line-through ' : ''}`}>
                    <p className='text-xl leading-none'>{todoData.description}</p>
                    <p className='text-xs font-medium'>{todoData?.title} • {formatingTimewithInitials(todoData.time)}</p>
                </div>
            </div>

            {!todoData.isChecked && (
                <div className='flex items-center'>
                    <Link
                        to={Routes.EDIT.path.replace(":id", todoData.id)}
                        className='text-lg p-2 rounded-full hover:bg-[#1f1e1e]'
                    >
                        {ReactIcons.EDIT}
                    </Link>

                    <button
                        onClick={() => dispatch(deleteTodo({ id: todoData.id }))}
                        className='text-lg p-2 rounded-full cursor-pointer hover:bg-[#1f1e1e]'
                    >
                        {ReactIcons.DELETE}
                    </button>
                </div>
            )}
        </div>
    )
}
