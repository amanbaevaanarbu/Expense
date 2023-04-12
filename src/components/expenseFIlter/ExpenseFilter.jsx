import './ExpenseFilter.css'
import React from "react";
const ExpenseFilter = ({onChange}) => {
    return (
        <div>
            <select className='select'  onChange={onChange}>
                <option value="All">Select All</option>
                <option value="больше">Больше</option>
                <option value="меньше">Меньше</option>
            </select>
        </div>
    )
}
export default ExpenseFilter