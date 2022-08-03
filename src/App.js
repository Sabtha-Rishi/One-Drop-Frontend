import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/header";
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
  const [isLoading, setIsloading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    AccountsAPI.getUser(setIsAuthenticated, setUser, setIsloading);
  }, []);

  // useEffect(() => {
  //   AccountsAPI.getUser(setIsAuthenticated, setUser, setIsloading);
  // }, [user]);

  console.log(isAuthenticated, user);

  if (isLoading) {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Loading />} />
        </Routes>
      </Router>
    );
  }
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/requests" element={<Requests />} />

        <Route exact path="/accounts/register" element={<Register />} />
        <Route exact path="/donor/1" element={<Donor />} />

        <Route
          exact
          path="/accounts/login"
          element={
            <Login
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              setUser={setUser}
            />
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <MyProfile
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={isAuthenticated}
              user={user}
              setUser={setUser}
            />
          }
        />

        <Route exact path="/requests/:requestID" element={<SingleRequest />} />
      </Routes>
    </Router>
  );
}

export default App;
