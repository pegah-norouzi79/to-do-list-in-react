import DoneAllIcon from '@mui/icons-material/DoneAll';
import CheckIcon from '@mui/icons-material/Check';
import { useContext, useState } from 'react';
import ToDoContext from '../Context/ToDoContext';
function UpdataToDo({todo}){
    const {updatetodo} = useContext(ToDoContext);
    const [loading , setLoading] = useState(false);
    async function handelClick(){
        setLoading(true);
        await updatetodo(todo);
        setLoading(false);
    }
    return(
        <>
        <div className="icon">
            {todo.completed ? <DoneAllIcon onClick={()=> handelClick()} /> :<CheckIcon onClick={()=> handelClick()}/>}
        </div>
        </>
    )
}
export default UpdataToDo