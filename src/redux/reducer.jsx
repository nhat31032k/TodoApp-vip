<<<<<<< HEAD
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import FilterReducer from "../components/Filters/FilterSlice";
import todoReducer from "../components/TodoList/TodoSlice";
//slite reducer
//trong reducer sẽ truyền vào là state mặc định và action
const reducer = combineReducers({
    // console.log(state, action)
        filter: FilterReducer,
        todos: todoReducer
    }
);
//tạo store
const store = configureStore({
    reducer,

});
export default store;
=======
//trong reducer sẽ truyền vào là state mặc định và action
const initialState = {
    filters: {
        searchText: '',
        status: "all",
        priority: [
        ]
    },
    todos: [
        // { id: 1, name: 'Learn React', complete: true, priority: 'high' },
        // { id: 2, name: 'Learn php', complete: false, priority: 'low' },
        // { id: 3, name: 'Learn vueJs', complete: true, priority: 'medium' },

    ],
}
const reducer = (state = initialState, action) =>
{
    console.log(state,action);
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state;
    }
};

export default reducer;
>>>>>>> 858fbd805e1bdb2356c726867fc1d1bae989b8b6
