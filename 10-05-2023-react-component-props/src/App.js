import logo from './logo.svg';
import './App.css';

import ExpenseItem from './components/ExpenseItem/ExpenseItem';

function App() {
  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItem title="mitsubisi" price="2000000"></ExpenseItem>
      <ExpenseItem title="hyundai" price="10"></ExpenseItem>
      <ExpenseItem title="toyota" price="2"></ExpenseItem>
      <ExpenseItem title="lancer" price="525252"></ExpenseItem>
      <ExpenseItem title="honda" price="100"></ExpenseItem>
    </div>
  );
}

export default App;
