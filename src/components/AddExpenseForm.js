import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);

	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		setName('');
		setCost('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div class='row'>
				<div class='col-sm col-lg-4' >
					<label for='name' style={{color:'#DAC0A3'}}>Name of the expense</label>
					<input style={{borderRadius:"5px" ,padding:"0",height:"40px", border:"solid black"}}
						required='required'
						type='text'
						placeholder='   Enter expense name'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='cost' style={{color:"#DAC0A3"}}>Cost of the expense</label>
					<input style={{borderRadius:"5px" ,padding:"0",height:"40px", border:"solid black"}}
						required='required'
						type='number'
						class='form-control'
						placeholder='   Enter expense cost'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
			</div>
			<div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-dark'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;
