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