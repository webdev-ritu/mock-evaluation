
import { useState, useEffect } from 'react';
import EmployeeTable from "./components/EmployeeTable";
import AddEmployeeForm from "./components/AddEmployeeForm";
import FilterDropdown from "./components/FilterDropdown";
import axios from "axios";
import "./styles/App.css";

const App = () => {
    const [employees, setEmployees] = useState([]);
    const [filter, setFilter] = useState("");
    const [showForm, setShowForm] = useState(false);

    //fetch employees

    useEffect(()=>{
        axios.get("http://localhost:3000/employee")
        .then((response)=>{
            setEmployees(response.data);
        });
    },[]);
    //add employee
    const addEmployee = (newEmployee)=> {
        axios.post("http://localhost:3000/employee", newEmployee)
        .then((response)=>{
            setEmployees([...employees, response.data]);
        });
    };
    //delete employee
    const deleteEmployee = (id) => {
        axios.delete(`http://localhost:3000/employee/${id}`)
        .then(()=>{
            setEmployees(employees.filter((employee)=> employee.id !== id));
        });
    };
    //filter employees
    const filteredEmployees = filter ? employees.filter((employee)=> employee.department === filter) : employees;
    return (
        <div className="app">
            <h1>
                Employee Management System
            </h1>
            <button onClick={()=> setShowForm(!showForm)}>
                {showForm? "close add employee form" : "add employee"}
            </button>
            {showForm && <AddEmployeeForm addEmployee={addEmployee} />}
            <FilterDropdown filter={filter} setFilter={setFilter} />
            <EmployeeTable employees={filteredEmployees} deleteEmployee={deleteEmployee} />
        </div>
    );
    
};
export default App;


