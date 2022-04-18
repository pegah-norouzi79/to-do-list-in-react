import AddTaskIcon from '@mui/icons-material/AddTask';
import { Link } from 'react-router-dom';
function Home(){
    return(
        <>
        <h3>hello</h3>
        <p>Welcome to my to do page, for add new task please press the down button </p>
        <Link to="/ToDo" type="button" className="btn btn-success"><AddTaskIcon/></Link>
        </>
    )
}
export default Home