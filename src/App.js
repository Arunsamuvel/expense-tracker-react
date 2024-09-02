import "./App.css";
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
      </div>
    </div>
  );
}

export default App;
