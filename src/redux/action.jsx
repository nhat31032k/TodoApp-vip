export const addTodoAction = (data) => ({
    type: 'ADD_TODO',
    payload: data
})

export const searchTodo = (text) => ({
    type: 'SEARCH_TODO',
    payload: text
})

export const StatusFilter = (status) =>
{ 
    return {
        type: 'STATUS_FILTER',
        payload: status
    }
}
export const FilterPriority = (Priorities) =>
{ 
    return {
        type: 'PRIORITY_FILTER',
        payload: Priorities
    }
}
export const toggleStatus = (todoId) =>
{ 
    return {
        type: 'TOGGLE_STATUS',
        payload: todoId
    }
}
