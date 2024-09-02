import "./App.css";
import AddTransaction from "./Component/AddTransaction";
import Balance from "./Component/Balance";
import Header from "./Component/Header";
import IncomeExpense from "./Component/IncomeExpense";
import TransactionList from "./Component/TransactionList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
