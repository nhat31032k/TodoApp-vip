//trong reducer sẽ truyền vào là state mặc định và action
import { createSlice } from "@reduxjs/toolkit";

// const todoReducer = (state = initialState, action) =>
// {
//     console.log(state,action);
//     switch (action.type) {
//         case 'ADD_TODO':
//             return [...state, action.payload]
        
//         case 'TOGGLE_TODO':
//             return state.map(todo =>todo.id === action.payload ? {...todo, complete: !todo.complete} : todo)
                  
            
//         default:
//             return state;
//     }
// };

// export default todoReducer;
const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, { payload }) =>
        { 
            state.push(payload);
        },
        toggleTodo: (state, { payload }) =>
        { 
            const currentTodo = state.filter(todo => todo.id === payload);
            currentTodo.complete = !currentTodo.complete;
        }
    }
})
export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;