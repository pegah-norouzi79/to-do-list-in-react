import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Form, Row, Col} from "react-bootstrap";
import { useContext, useState } from 'react';
import ToDoContext from '../Context/ToDoContext';
function FilterToDo(){
    const [count , setCount] =useState('');
    const {filtertodo} = useContext(ToDoContext)
    const [loading , setLoading] = useState(false);
    const handleChange = async(e) => {
        setLoading(true);
        await filtertodo(e.target.value);
        setLoading(false);
    };
    return(
        <>
        <Row className="my-3">
            {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>Filter</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={count}
                    label="count"
                    onChange={(e) => handleChange(e)}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={60}>60</MenuItem>
                    <MenuItem value={70}>70</MenuItem>
                    <MenuItem value={80}>80</MenuItem>
                    <MenuItem value={90}>90</MenuItem>
                    <MenuItem value={100}>100</MenuItem>

                </Select>
                {loading ? <div className="d-flex justify-content-center"><div className="spinner-border" role="status"></div></div> : ''}
            </FormControl> */}
            <Col lg="1">
            <Form.Label>Filter</Form.Label>
            <Form.Select  aria-label="Filter" onChange={(e) => handleChange(e)}>
                <option>Filter</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="10">40</option>
                <option value="20">50</option>
                <option value="30">60</option>
                <option value="10">70</option>
                <option value="20">80</option>
                <option value="30">90</option>
                <option value="30">100</option>
            </Form.Select></Col>
        </Row>
        </>
    )
}
export default FilterToDo

