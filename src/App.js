import React from 'react';
import './App.css';
import { Header } from './components/header/header';
import { Balance } from './components/balance/balance';

import Container from '@material-ui/core/Container';
import { IncomeExpenses } from './components/income-expenses/income-expenses';
import { TransactionList } from './components/TransactionList/TransactionList';
import { AddTransaction } from './components/AddTransaction/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Container>
          <Header></Header>
          <Balance></Balance>
          <IncomeExpenses></IncomeExpenses>
          <TransactionList></TransactionList>
          <AddTransaction></AddTransaction>
        </Container>
      </GlobalProvider>
    </div>
  );
}

export default App;
