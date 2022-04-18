import axios from "axios";
import { useCallback, useReducer } from "react"
import Swal from "sweetalert2";
import ToDoContext from "./ToDoContext"
import ToDoReducer from "./ToDoReducer";

function ToDoProvider(props){
    const initialState ={
        todos:[],
        error: null
    };
    const getTodos = useCallback (async ()=> {
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
                dispatch({type:"SET-TODO" , payload: res.data});
                dispatch({type:"SET-ERROR" , payload: null})
            } catch (error) {
                dispatch({type:"SET-ERROR" , payload: error.message});
                dispatch({type:"SET-TODO" , payload: []})
            }
    } , [])
    const filtertodo = (async (count)=> {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`);
            dispatch({type:"FILTER-TODO" , payload: res.data});
            dispatch({type:"SET-ERROR" , payload: null})
        } catch (error) {
            dispatch({type:"SET-ERROR" , payload: error.message});
            dispatch({type:"FILTER-TODO" , payload: []})
        }
    })
    const addtodo = (async (title)=> {
        try {
            const res = await axios.post(`https://jsonplaceholder.typicode.com/todos` , {
                title: title,
                completed: false
              });
            dispatch({type:"ADD-TODO" , payload: res.data});
            dispatch({type:"SET-ERROR" , payload: null});
            Swal.fire({
                icon: 'success',
                title: 'Task added',
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
              })
              
        } catch (error) {
            dispatch({type:"SET-ERROR" , payload: error.message});
            dispatch({type:"ADD-TODO" , payload: []})
        }
    })
    const updatetodo = (async (todo)=> {
        try {
            const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}` , {
                title: todo.title,
                completed: !todo.completed
              });
              console.log(res.data);
            dispatch({type:"UPDATE-TODO" , payload: res.data});
            dispatch({type:"SET-ERROR" , payload: null});
            Swal.fire({
                title: "Task updated",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top',
            });
            } catch (err) {
                dispatch({ type: "SET_ERROR", payload: err.message });
                dispatch({ type: "FILTER_TODOS", payload: [] });
            }
    })
    const deletetodo = (async (todoID)=> {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoID}`)
            dispatch({type:"DELETE-TODO" , payload: todoID});
            dispatch({type:"SET-ERROR" , payload: null});
            Swal.fire({
                icon: 'warning',
                title: 'Task deleted',
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
              })
              
        } catch (error) {
            dispatch({type:"SET-ERROR" , payload: error.message});
            dispatch({type:"ADD-TODO" , payload: []})
        }
    })
    const [state , dispatch] = useReducer(ToDoReducer , initialState);
    return(
        <>
        <ToDoContext.Provider value={{...state , getTodos, filtertodo, addtodo, updatetodo, deletetodo}}>
            {props.children}
        </ToDoContext.Provider>
        </>
    )
}
export default ToDoProvider