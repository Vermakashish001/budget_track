import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';
import './App.css';


const App = () => {
	return (
		<AppProvider>
			<div className='container' style={{ backgroundColor: "rgba(237, 237, 237, 0.49)", borderRadius: "20px", border: "10px solid rgba(237, 237, 237, 0.49)" }}>
				<h1 className='mt-3  heading' style={{ textAlign: "center", fontFamily: 'cursive',color:"#BFB23F", fontWeight: "bolder", textDecoration: "underline", textUnderlineOffset: "4px", fontSize: "50px" }} > Budget </h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				<div style={{display:"flex" , flexDirection:"row"}}>
				<h3 className='mt-3' style={{height:"100%" , width:"800px" , color:"#F6635C"} }>Show common expenses</h3>
				<select name="expense" id="expense-select">
                <option value="Select City">Select</option>
                <option value="Shopping">Shopping</option>
                <option value="Vacation">Vacation</option>
                <option value="Mediine">Medicine</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Vegetable">Vegetables</option>
        	    <option value="Travel">Travel</option>
            </select>
					<div className='row' style={{marginLeft:"200px" , width:"800px"  , marginTop:"20px" , borderRadius:"15px" , marginRight:"100px"}} >
						<div className='col-sm' style={{backgroundColor:"black" , borderRadius:"10px" , padding:"1px 10px"}}>
							<ExpenseList />
						</div>
					</div>
				</div>
				<h3 className='mt-3' style={{color:"#504099"}}>Add your custom Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'  style={{marginBottom:"2rem"}}>
						<AddExpenseForm />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;
