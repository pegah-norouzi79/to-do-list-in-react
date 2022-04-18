import { useContext, useState } from "react";
import {Form, Button} from "react-bootstrap";
import ToDoContext from "../Context/ToDoContext";
function CreateToDo(){
    const [title , setTitle]=useState('');
    const {addtodo} = useContext(ToDoContext);
    const [loading , setLoading] = useState(false);
    async function handleSubmit(e){
        e.preventDefault();
        if(title){
            setLoading(true);
            await addtodo(title)
        }
        setLoading(false);
    }
    return(
        <>
        <Form onSubmit={(e)=> handleSubmit(e)}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Create To Do</Form.Label>
                <Form.Control type="input" placeholder="Enter Title..." onChange={(e)=>setTitle(e.target.value)}/>
                <Form.Text className="text-danger">
                    {title ? '' : "for create new to do please write"}
                </Form.Text>
            </Form.Group>
            <Button variant="success" type="submit" disabled={title === ''}>
                Create
                {loading ? <div className="d-flex justify-content-center"><div className="spinner-border" role="status"></div></div> : ''}
            </Button>
        </Form>
        </>
    )
}
export default CreateToDo