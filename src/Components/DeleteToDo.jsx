import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import ToDoContext from '../Context/ToDoContext';
function DeleteToDo(todoID){
    const {deletetodo} = useContext(ToDoContext)
    async function handleDelete(){
        await deletetodo(todoID)
    }
    return(
        <>
        <DeleteIcon onClick={()=> handleDelete()}/>
        </>
    )
}
export default DeleteToDo