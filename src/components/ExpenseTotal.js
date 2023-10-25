import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';
const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='alert alert-primary p-4 total-button'>
			<span>Total Spending : <span style={{color:"#BF3F4A"}}>₹{total}</span></span>
		</div>
	);
};

export default ExpenseTotal;
