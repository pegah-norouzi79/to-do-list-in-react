import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Header from "./Components/Header.jsx"
import ToDoProvider from './Context/ToDoProvider';
import ToDo from './Pages/ToDo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <div className="container my-4">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ToDo" element={
          <ToDoProvider>
            <ToDo/>
          </ToDoProvider>
        }/>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
