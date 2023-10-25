import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Total Budget: <span style={{color:"#59BF3F"}}>₹{props.budget}</span></span>
			<button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Change
			</button>
		</>
	);
};

export default ViewBudget;
