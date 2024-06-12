import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    todos: [{id: nanoid(), text: "sandeep"}]
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {id:nanoid(), text: action.payload}
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            const newTodo = state.todos.filter((todo) => todo.id !== action.payload)
            state.todos = newTodo
        }
    }

})

export const {addTodo, removeTodo} = todoSlice.actions


export default todoSlice.reducer

