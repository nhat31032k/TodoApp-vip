//trong reducer sẽ truyền vào là state mặc định và action
import { createSlice } from "@reduxjs/toolkit";


// export const FilterReducer = (state = initialState, action) =>
// {
//     console.log(state, action);
//     switch (action.type) {
//         case 'SEARCH_TODO':
//             return {

//                 ...state,
//                 searchText: action.payload
//             }
//         case 'STATUS_FILTER':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case 'PRIORITY_FILTER':
//             return {
//                 ...state,
//                 priority: action.payload
//             }
//         default:
//             return state;
//     }
// };
const filterSlice = createSlice({
    name: "filter",
    initialState: {
        searchText: '',
        status: "all",
        priority: []
    },
    reducers: {
        searchTodo: (state, { payload }) =>
        {
            //mutation
            state.searchText = payload;
        },
        StatusFilter: (state, { payload }) => {
            state.status = payload;
        },
        FilterPriority: (state, { payload }) => {
            state.priority = payload;
        }


    }
})
export const { searchTodo, StatusFilter, FilterPriority } = filterSlice.actions;
export default filterSlice.reducer;