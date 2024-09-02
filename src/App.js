import "./App.css";
import Balance from "./Component/Balance";
import Header from "./Component/Header";
import IncomeExpense from "./Component/IncomeExpense";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
      </div>
    </div>
  );
}

export default App;
