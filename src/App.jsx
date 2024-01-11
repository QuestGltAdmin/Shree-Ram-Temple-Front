import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/Profile";
import Transactions from "./pages/Dashboard/Transactions";
import { Membership } from "./pages/Dashboard/Membership";
import { Donatenow } from "./pages/Donatenow";
import UserPrivateRoute from "./PrivateRoute/PrivateRoutes";
import { Aboutus } from "./pages/Aboutus";
import { Agrawalfoundation } from "./pages/Agrawalfoundation";
import { Legalstatus } from "./pages/Legalstatus";
import { Boardmember } from "./pages/Boardmember";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/donate-now" element={<Donatenow />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/agrawal-foundation" element={<Agrawalfoundation />} />
          <Route path="/legal-status" element={<Legalstatus />} />
          <Route path="/board-member" element={<Boardmember />} />
          <Route
            path="/dashboard"
            element={
              <UserPrivateRoute>
                <Dashboard />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/Profile"
            element={
              <UserPrivateRoute>
                <Profile />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/Transactions"
            element={
              <UserPrivateRoute>
                <Transactions />
              </UserPrivateRoute>
            }
          />
          <Route
            path="/your-membership"
            element={
              <UserPrivateRoute>
                <Membership />
              </UserPrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
