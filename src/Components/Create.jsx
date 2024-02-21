import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../Redux/UserReducer'

function Create() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector((state) => state.users)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1, name, email}))
        navigate('/')
    }

    return (
        <div className='create'>
            <div>
                <h3>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" placeholder='Enter name..' onChange={e => setName(e.target.value)}/>
                    </div>
                    <div>
                    <label htmlFor="email">Email:</label>
                        <input type="email" name="email" placeholder='Enter email..' onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create