import  './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
const Expense = (props) => {
	const expenses = props.expenses;
	const filterByYear = (year) => {
		const newFiltered = expenses.filter(item => {
			const itemYear = item.date.getFullYear().toString();
			return year === itemYear;
		})
		return newFiltered;
		
	}
	const [selectedYear, setSelectedYear] = useState('2022');
	const [filtered, setFiltered] = useState(filterByYear('2022'));
	
	const selectedYearChangeHandler = (year) => {
		setSelectedYear(year);
	  setFiltered(filterByYear(year));	
	}

	return (
	<Card className="expenses">
		<ExpensesFilter selected={selectedYear} onSelected={selectedYearChangeHandler}></ExpensesFilter>
		<ExpensesList expenses={filtered}></ExpensesList>	
	</Card>
	)
}

export default Expense;
