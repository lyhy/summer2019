import './App.css';
import NewExpense from './components/Expenses/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses'
import { useState } from 'react';
const App = () => {
	const initExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(initExpenses);
  const addExpenseHandler = (data) => {
    setExpenses((items) => [{...data, date: new Date(data.date), key: new Date(data.date).getTime() }, ...items])
		console.log(data)
	}
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
