import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import '../App.css';
const ExpenseList = () => {
	const { expenses } = useContext(AppContext);

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	return (
		<>
			<ul class='list-group mt-3 mb-3' >
			
				{expenses.map((expense) => (
					<ExpenseItem className = "list-group-item"
						id={expense.id  }
						name={expense.name}
						cost={expense.cost}
					/>

				))}
			</ul>
		</>
	);
};

export default ExpenseList;
