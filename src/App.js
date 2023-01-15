import { useState } from 'react'
import './App.css'
import Main from './Main'
import NavBar from './NavBar'

function App() {
  //changes in UI everytime accounts changes useState will know
  const [accounts, setAccounts] = useState([])
  return (
    <div className="background">
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <Main accounts={accounts} setAccounts={setAccounts} />
      </div>
      {/* <div className="background"></div> */}
    </div>
  )
}

export default App
