import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        todo: 'HTML',
    },
    {
        id: 2,
        todo: 'CSS',
    }
]

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },

        updateTodo: (state, action) => {
            const {id, todo} = action.payload;
            const update = state.find(todo => todo.id == id);
            if(update){
                update.todo = todo;
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