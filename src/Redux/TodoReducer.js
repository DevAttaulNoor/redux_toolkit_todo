import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('todos');
        if (serializedState === null) {
            return [];
        }
        const todosWithTimestampsInDateObjects = JSON.parse(serializedState).map(todo => ({
            ...todo,
            time: new Date(todo.time)
        }));
        return todosWithTimestampsInDateObjects;
    } 
    
    catch (error) {
        console.log(error);
        return [];
    }
};

const saveState = (state) => {
    try {
        const todosWithTimestampsInMilliseconds = state.map(todo => ({
            ...todo,
            time: todo.time.getTime()
        }));

        const serializedState = JSON.stringify(todosWithTimestampsInMilliseconds);
        localStorage.setItem('todos', serializedState);
    } 
    
    catch (error) {
        console.log(error);
    }
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState: loadState(),
    reducers: {
        addTodo: (state, action) => {
            state.push({ ...action.payload, isChecked: false });
            saveState(state);
        },

        updateTodo: (state, action) => {
            const { id, title, description } = action.payload;
            const update = state.find(todo => todo.id == id);
            if (update) {
                update.title = title;
                update.description = description;
                saveState(state);
            }
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
                saveState(state);
            }
        }
    }
});

export const { addTodo, updateTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;