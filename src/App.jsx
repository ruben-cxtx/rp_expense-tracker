import React from 'react'
import './app.css'
import { AddTransaction, Balance, Header, IncomeExpenses, TransactionList } from './components'
import { GlobalProvider } from './components/context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
    <Header />
    <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
    </div>
    </GlobalProvider>
  )
}

export default App