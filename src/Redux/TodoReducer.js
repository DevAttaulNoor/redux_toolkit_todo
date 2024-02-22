import Checkbox from '@mui/material/Checkbox';
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: 'Learn Html',
        description: 'I have started learning html from tommorow...',
        time: `${new Date().toLocaleTimeString()}`,
        date: `${new Date().toLocaleDateString()}`,
        complete: <Checkbox />
    }
]

console.log(initialState)

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },

        updateTodo: (state, action) => {
            const {id, title, description} = action.payload;
            const update = state.find(todo => todo.id == id);
            if(update){
                update.title = title;
                update.description = description;
            }
        },

        deleteTodo: (state, action) => {
            const {id} = action.payload;
            const remove = state.find(todo => todo.id == id);
            if(remove){
                return state.filter (e => e.id !== id)
            }
        }
    }
})

export const {addTodo, updateTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;