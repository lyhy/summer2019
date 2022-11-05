import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
	const saveExpenseDataHandler = (data) => {
		props.onAddExpense(data)
	}
	return (
	<div className='new-expense'>
		<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
	</div>
	)
}

export default NewExpense;
