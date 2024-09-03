import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    todo: [],
};

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todo.push(action.payload);
        },
        removeTodo: (state,action)=>{
            state.todo= state.todo.filter((todo)=>todo.id!==action.payload);
        },
    },
});

export const{addTodo,removeTodo}= todoSlice.actions;
export default todoSlice.reducer;