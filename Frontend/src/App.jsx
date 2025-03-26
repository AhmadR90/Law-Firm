import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import './App.css'
import RegistrationForm from './components/Registeration'
import LoginForm from "./components/Login"
import UserDashboard from './Client/MainPage'
import SupremeCourtLawyers from './components/SupremeCourtLawyers'
import HighCourtLawyers from "./components/HighCourtLawyers"
import LawyerDashboard from './Lawyer/LawyerDashboard'
import AdminDashboard from './Admin/AdminDashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      {/* Client Routes */}
      <Routes>
        <Route path='/' element={<LoginForm/>}></Route>
        <Route path='/register' element={<RegistrationForm/>}></Route>
        <Route path='/client' element={<UserDashboard/>}></Route>
        <Route path='/supreme-court-lawyers' element={<SupremeCourtLawyers/>}></Route>
        <Route path='/high-court-lawyers' element={<HighCourtLawyers/>}></Route>
      </Routes>
         
         <Routes>
          <Route path='/lawyer-dashboard' element={<LawyerDashboard/>}></Route>
         </Routes>
      

      <Routes>
        <Route path='Admin-dashboard' element={<AdminDashboard/>}></Route>
      </Routes>


      </Router>
    </>
  )
}

export default App
