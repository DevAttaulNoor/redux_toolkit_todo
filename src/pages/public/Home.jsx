import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Routes } from "../../constants/Routes"
import { ReactIcons } from "../../constants/ReactIcons"
import { formatingTimewithInitials } from "../../utils/FormatTime"
import { deleteTodo, toggleTodo } from "../../libs/redux/TodoReducer"

const Home = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const remainingTodos = todos?.filter(todo => !todo.isChecked).length;

    return (
        <div className='flex flex-col p-3 sm:p-5'>
            <h1 className='text-3xl text-center font-semibold'>
                To Do List
                <span className='text-[#9417e2]'>.</span>
            </h1>

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

                <Link
                    to={Routes.ADD.path}
                >
                    {ReactIcons.ADD}
                </Link>

                {/* <Link to={'/add'}>
                    <AddIcon className='!w-10 !h-10 rounded-[50%] p-1.5 border-2 border-[#9417e2] bg-[#9417e2] hover:bg-[#1f1e1e]' />
                </Link> */}
            </div>

            {todos?.map((todo, index) => (
                <div
                    key={index}
                    className='flex items-center justify-between rounded-lg px-4 py-3 mb-3 bg-[#9417e2]'
                >
                    <div className='flex items-center justify-start'>
                        <input
                            type="checkbox"
                            checked={todo.isChecked}
                            onChange={() => dispatch(toggleTodo({ id: todo.id }))}
                            className='w-4 h-4 mr-4 cursor-pointer'
                        />

                        <div className={`flex flex-col ${todo.isChecked ? 'line-through ' : ''}`}>
                            <p className='text-xl leading-none'>{todo.description}</p>
                            <p className='mt-1 text-xs'>
                                {todo.title ? (
                                    <>
                                        <span>{todo.title}</span>
                                        <span className='mx-1'>•</span>
                                        <span>{formatingTimewithInitials(todo.time)}</span>
                                    </>
                                ) : (
                                    <span>{formatingTimewithInitials(todo.time)}</span>
                                )}
                            </p>
                        </div>
                    </div>

                    {!todo.isChecked && (
                        <div className='flex items-center'>
                            <Link
                                to={Routes.EDIT.path.replace(":id", todo.id)}
                            >
                                {ReactIcons.EDIT}
                            </Link>

                            {/* <Link to={`/update/${todo.id}`}>
                                <EditIcon className='!w-8 !h-8 rounded-[50%] p-1.5 hover:bg-[#1f1e1e]' />
                            </Link> */}

                            <button
                                onClick={() => dispatch(deleteTodo({ id: todo.id }))}
                            >
                                {ReactIcons.DELETE}
                            </button>

                            {/* <div onClick={() => handleDelete(todo.id)}>
                                <DeleteIcon className='!w-8 !h-8 rounded-[50%] p-1.5 hover:bg-[#1f1e1e]' />
                            </div> */}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Home