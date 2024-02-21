import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../Redux/UserReducer';

function Home() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users);

    const handleDelete = (id) => {
        dispatch(deleteUser({id: id}))
    }

    // console.log(users)

    return (
        <div className='home'>
            <h2>CURD App with Redux Toolkit</h2>
            <Link to={'/create'}>Create +</Link>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${user.id}`}>Edit</Link>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home