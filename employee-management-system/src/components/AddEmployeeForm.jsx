import React, { useState } from 'react';
//import "./styles/AddEmployeeForm.css";
 
const AddEmployeeForm = ({AddEmployee}) => {
    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [department, setDepartment] = useState("");
    const  handleSubmit = (e) => {
        e.preventDefault();
        if(name && designation && department) {
            AddEmployee(name, designation, department);
            setName("");
            setDesignation("");
            setDepartment("");
        }
    };
    return (
        <from className="Add-employee-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
            <select value={department} onChange={(e) => setDepartment(e.target.value)}>
                <option value="">Select Department</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Marketing">Marketing</option>
            </select>
            <button type="submit">Add Employee</button>
        </from>
    );
};
export default AddEmployeeForm;