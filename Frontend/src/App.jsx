import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import './App.css'
import RegistrationForm from './components/Registeration'
import LoginForm from "./components/Login"
import Dashboard from './Client/MainPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<LoginForm/>}></Route>
        <Route path='/register' element={<RegistrationForm/>}></Route>
        <Route path='/client' element={<Dashboard/>}></Route>
      </Routes>
    
      </Router>
    </>
  )
}

export default App
