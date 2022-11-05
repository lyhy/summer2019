import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

export default function ExpensesList(props) {
	let content = <p className='expenses-list__fallback'>No expenses found.</p>
	const expenses = props.expenses || [];

	if(expenses.length > 0) {
		content = (
			<ul className='expenses-list'>
				{
					expenses.map((item) => {
						return <ExpenseItem {...item} key={item.id}></ExpenseItem>
					})
				}
			</ul>
		)

		
	}
	return content;
}
