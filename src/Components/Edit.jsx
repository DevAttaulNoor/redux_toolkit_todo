import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from '../Redux/UserReducer';

function Edit() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(e => e.id == id);
    const {name, email} = existingUser[0];
    const [editname, setEditName] = useState(name);
    const [editemail, setEditEmail] = useState(email);

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editUser({
            id: id,
            name: editname,
            email: editemail,
        }))
        navigate('/');
    }

    return (
        <div className='create'>
            <div>
                <h3>Edit User</h3>
                <form onSubmit={handleEdit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" placeholder='Enter name..' value={editname} onChange={e => setEditName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" placeholder='Enter email..' value={editemail} onChange={e => setEditEmail(e.target.value)} />
                    </div>
                    <button>Edit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit