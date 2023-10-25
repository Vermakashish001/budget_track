import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div class={`alert p-4 ${alertType} remaining-button`}>
			<span>Remaining Budget: <span style={{color:"#3F7FBF"}}>₹{budget - totalExpenses}</span></span>
		</div>
	);
};

export default RemainingBudget;
