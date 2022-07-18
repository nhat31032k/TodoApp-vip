import { createSelector } from '@reduxjs/toolkit';
export const todoSelector = (state) => state.todos;
// {
//     const todoRemain = state.todos.filter((item) =>
//     { 
//         return item.name.includes(searchSelector);
//     })
//     return todoRemain
// };

export const searchSelector = (state) => state.filter.searchText;
console.log(searchSelector);
export const statusSelector = (state) => state.filter.status;
export const prioritySelector = (state) => state.filter.priority;
export const filterSelector = createSelector(todoSelector, searchSelector, statusSelector,prioritySelector,(todos, searchText,status,priority) =>
{
    return todos.filter((item) =>
    {
        
        if (status === "All") { 
            return priority.length? item.name.includes(searchText) && priority.includes(item.priority): item.name.includes(searchText);
        }
        return item.name.includes(searchText) && status === 'all'&& item.complete === "complete" ? item.complete:!item.complete && (priority.length? item.name.includes(item.priority):true );
    })
});