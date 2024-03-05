import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ ...action.payload, isChecked: false });
        },

        updateTodo: (state, action) => {
            const { id, title, description, isChecked } = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.title = title;
                todo.description = description;
                todo.isChecked = isChecked;
            }
        },

        deleteTodo: (state, action) => {
            const { id } = action.payload;
            return state.filter(todo => todo.id !== id);
        },

        toggleTodo: (state, action) => {
            const { id } = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.isChecked = !todo.isChecked;
            }
        }
    }
});

export const { addTodo, updateTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;