import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: 'Atta ul Noor',
        email: 'atta@gmail.com'
    },
    {
        id: 2,
        name: 'Arham',
        email: 'arham@gmail.com'
    }
]

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },

        editUser: (state, action) => {
            const {id, name, email} = action.payload;
            const editUsers = state.find(user => user.id == id);
            if(editUsers){
                editUsers.name = name;
                editUsers.email = email;
            }
        },

        deleteUser: (state, action) => {
            const {id} = action.payload;
            const deleteUsers = state.find(user => user.id == id);
            if(deleteUsers){
                return state.filter (e => e.id !== id)
            }
        }
    }
})

export const {addUser, editUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;