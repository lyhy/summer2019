import {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title)
	console.log('next line')

	const clickHandler = () => {
		setTitle('newTitle')
		console.log(title)
	}
	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date}></ExpenseDate>
				<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>

				</div>
				<button onClick={clickHandler}>change title</button>
			</Card>
		</li>
	
	)
}

export default ExpenseItem;
