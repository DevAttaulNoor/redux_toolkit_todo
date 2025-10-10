import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Routes } from "../../constants/Routes"
import { TodoItem } from "../../components/todoItem"
import { ReactIcons } from "../../constants/ReactIcons"

const Home = () => {
    const todos = useSelector(state => state.todos);
    const remainingTodos = todos?.filter(item => !item.isChecked);

    return (
        <div className='flex flex-col p-3 sm:p-5'>
            <h1 className='text-center text-3xl font-semibold'>
                To Do List
                <span className='text-[#9417e2]'>.</span>
            </h1>

            <div className='flex items-center justify-between p-3.5 my-4 border-y-2 border-[#9417e2]'>
                <div>
                    <p>Total {todos?.length > 1 ? 'Todos' : 'Todo'} = {todos?.length}</p>
                    <p>Remaining {remainingTodos?.length > 1 ? 'Todos' : 'Todo'} = {remainingTodos?.length}</p>
                </div>

                <Link
                    to={Routes.ADD.path}
                    className='text-2xl p-1.5 rounded-full border-2 border-[#9417e2] bg-[#9417e2] hover:bg-[#1f1e1e]'
                >
                    {ReactIcons.ADD}
                </Link>
            </div>

            <div className="flex flex-col gap-3">
                {todos?.map(data => (
                    <TodoItem
                        key={data.id}
                        todoData={data}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home