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