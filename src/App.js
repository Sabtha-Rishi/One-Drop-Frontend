import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/home";
import Register from "./pages/register";
import Requests from "./pages/requests";
import MyProfile from "./pages/PrivateProfile";
import Login from "./pages/login";
import Header from "./components/header";
import MyRequests from "./components/myRequests";
import SingleRequest from "./pages/singleRequest";
import SingleDonor from "./pages/singleDonor";

import AccountsAPI from "./api/accounts";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    AccountsAPI.isAuthenticated(setIsAuthenticated);
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        {/* ACCOUNTS ROUTES */}
        <Route exact path="/accounts/register" element={<Register />} />
        <Route exact path="/donor/:userId" element={<SingleDonor />} />
        <Route
          exact
          path="/profile"
          element={
            <MyProfile
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route
          exact
          path="/accounts/login"
          element={
            <Login
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        {/* REQUESTS ROUTES */}
        <Route exact path="/requests" element={<Requests />} />
        <Route exact path="/requests/:reqId" element={<SingleRequest />} />
        <Route exact path="/my-requests" element={<MyRequests />} />
        {/* OTHER ROUTES */}
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
