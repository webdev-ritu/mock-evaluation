import React from 'react';
//import "./styles/FilterDropdown.css";
const FilterDropdown = ({setFilter}) => {
    return(
        <select className="filter-dropdown" onChange={(e) => setFilter(e.target.value)}>
            <option value="">All Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Marketing">Marketing</option>
        </select>
    );
};
export default FilterDropdown;