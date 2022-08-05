import React, { useState, useEffect } from "react";
import styled from "styled-components";
import loginGif from "../Media/loginGif.gif";
import AccountsAPI from "../api/accounts";
import { useNavigate } from "react-router-dom";

const Login = ({ isAuthenticated, setIsAuthenticated, setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: password,
    };
    AccountsAPI.login(formData, setIsAuthenticated, setUser);
  };

  return (
    <LoginContainer>
      {isAuthenticated ? (
        navigate("/profile")
      ) : (
        <div>
          <h3 className="login-title">Login</h3>
          <img className="login-gif" src={loginGif} alt="" />
          <br></br>
          <form className="login-form" onSubmit={handleSubmit}>
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <label className="input-label" htmlFor="email">
              Password
            </label>

            <input
              className="input"
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />

            <input className="login-btn" type="submit" value="Login" />
          </form>
        </div>
      )}
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  max-width: 600px;
  margin: 50px auto;
  overflow: hidden;
  padding: 10px 30px;
  transition-duration: 0.4s;
  background-color: #fafafa;
  box-shadow: 10px 20px 20px #e3e3e3;

  @media only screen and (max-width: 600px) {
    & {
      min-width: 95vw;
      max-width: 95vw;
      margin: 30px auto;
    }
  }

  .login-form {
    display: flex;
    flex-direction: column;
  }

  .input {
    border-radius: 7px;
    border: 1px solid lightgrey;
    height: 40px;
    margin-bottom: 20px;
  }
  .input-label {
    display: block;
    font-weight: medium;
    text-decoration: none;
    font-size: larger;
    font-weight: 500;
  }
  .login-btn {
    border-radius: 7px;
    background-color: #ff4949;
    border: none;
    color: white;
    font-size: large;
    padding: 5px 0;
  }

  .login-title {
    font-weight: bold;
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
  }
  .login-gif {
    width: 300px;
    display: flex;
    margin: 0 auto;
  }
`;

export default Login;
