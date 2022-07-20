<<<<<<< HEAD
// import {createStore} from 'redux';
// import reducer from './reducer';
// const store = createStore(reducer);

// export default store;
// import { configureStore } from "@reduxjs/toolkit";
// const store = configureStore({
//     reducer: {

//     }

// });
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filterSlice from "../components/Filters/filterSlice";
import todoSlice from "../components/TodoList/todoSlice";
//slite reducer
//trong reducer sẽ truyền vào là state mặc định và action
const reducer = combineReducers({
    // console.log(state, action)
        filter: filterSlice,
        todos: todoSlice
    }
);
//tạo store
const store = configureStore({
    reducer,
});
=======
import {createStore} from 'redux';
import reducer from './reducer';
const store = createStore(reducer);

>>>>>>> 858fbd805e1bdb2356c726867fc1d1bae989b8b6
export default store;