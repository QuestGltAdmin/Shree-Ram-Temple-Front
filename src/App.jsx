import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import { Login } from './pages/login';
import { Register } from './pages/Register';
import  Dashboard  from './pages/Dashboard/Dashboard';
import  Profile  from './pages/Dashboard/Profile';
import  Transactions  from './pages/Dashboard/Transactions';
import { Membership } from './pages/Dashboard/Membership';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/your-membership" element={<Membership />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Transactions" element={<Transactions />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
