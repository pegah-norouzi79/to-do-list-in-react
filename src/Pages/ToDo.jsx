import { useContext, useEffect, useState } from "react"
import ToDoContext from "../Context/ToDoContext"
import FilterToDo from '../Components/FilterToDo';
import CreateToDo from '../Components/CreateToDo';
import UpdataToDo from '../Components/UpdataToDo';
import DeleteToDo from "../Components/DeleteToDo";

function ToDo(){
    // const {todos , dispatch} = useContext(ToDoContext)
    const {todos , getTodos, error} = useContext(ToDoContext)
    const [loading , setLoading] = useState(true);
    useEffect(() => {
        // async function fetchData(){
        //     getTodos();
        //     setLoading(false);
        // }
        // fetchData();
        (async () => {
            await getTodos();
            setLoading(false);
        })()
    },[getTodos])

    return(
        <>
        <CreateToDo/>
        <hr></hr>
        <h2 className="mb-3">To Do List</h2>
        <FilterToDo/>
        {error && <div className="fw-bold text danger">{error}</div>}
        {loading ? <div className="d-flex justify-content-center"><div className="spinner-border" role="status"></div></div> : ''}
        <div className="row">
        {todos && todos.map(todo => (
               <div className="col-4" key={todo.id}>
                   <div className={"card mb-3 " + (todo.completed && "bg-light")}>
                   <div className="card-body d-flex justify-content-between align-items-center">
                       <div className="title">{todo.completed ? <del>{todo.title}</del> : <span>{todo.title}</span>}</div>
                       <UpdataToDo todo={todo}/>
                       <DeleteToDo todoID={todo.id}/>
                   </div>
                   </div>
               </div>
            ))}
        </div>

        </>
    )
}
export default ToDo