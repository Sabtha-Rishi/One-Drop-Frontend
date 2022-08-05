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
import Header from "./components/header";
import MyRequests from "./components/myRequests";

import Home from "./pages/home";
import Register from "./pages/register";
import Loading from "./pages/loading";
import Requests from "./pages/requests";

import Login from "./pages/login";
import MyProfile from "./pages/PrivateProfile";

import SingleRequest from "./components/singleRequest";
import Donor from "./components/donorProfile";

import AccountsAPI from "./api/accounts";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    AccountsAPI.isAuthenticated(setIsAuthenticated);
  }, []);

  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/requests"
          element={<Requests requests={requests} />}
        />
        <Route exact path="/requests/:reqId" element={<SingleRequest />} />
        <Route exact path="/my-requests" element={<MyRequests />} />

        <Route exact path="/accounts/register" element={<Register />} />
        <Route exact path="/donor/1" element={<Donor />} />

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

        <Route exact path="/requests/:requestID" element={<SingleRequest />} />
      </Routes>
    </Router>
  );
}

export default App;
