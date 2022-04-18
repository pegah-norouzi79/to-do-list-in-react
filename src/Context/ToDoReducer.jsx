function ToDoReducer(state , action){
    switch (action.type) {
        case "SET-TODO":
            return{
                ...state ,
                todos: action.payload
            }
        case "FILTER-TODO":
            return{
                ...state ,
                todos: action.payload
            }
        case "ADD-TODO":
            return{
                ...state ,
                todos: [action.payload , ...state.todos]
            }
       case "UPDATE-TODO":
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload.id ? {...todo, completed : action.payload.completed} : todo)
            };
        case "DELETE-TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case "SET-ERROR":
            return{
                ...state ,
                error: action.payload
            }
        default:
            return state 
    }
}
export default ToDoReducer