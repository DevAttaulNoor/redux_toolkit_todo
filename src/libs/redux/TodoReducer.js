import { createSlice } from "@reduxjs/toolkit";

// Load state from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('todos');
        if (!serializedState) return [];
        return JSON.parse(serializedState); // keep numeric timestamps
    } catch (error) {
        console.error(error);
        return [];
    }
};

// Save state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('todos', serializedState);
    } catch (error) {
        console.error(error);
    }
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState: loadState(),
    reducers: {
        addTodo: (state, action) => {
            state.push({
                ...action.payload,
                isChecked: false,
                time: Date.now(),
            });
            saveState([...state]);
        },

        editTodo: (state, action) => {
            const { id, title, description } = action.payload;
            const updatedState = state.map(todo =>
                String(todo.id) === String(id)
                    ? { ...todo, title, description }
                    : todo
            );
            saveState(updatedState);
            return updatedState;
        },

        deleteTodo: (state, action) => {
            const { id } = action.payload;
            const newState = state.filter(todo => todo.id !== id);
            saveState(newState);
            return newState;
        },

        toggleTodo: (state, action) => {
            const { id } = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.isChecked = !todo.isChecked;
            }
            saveState([...state]);
        }
    }
});

export const { addTodo, editTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;