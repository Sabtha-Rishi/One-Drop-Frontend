import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import data from "../components/__data";
import Input from "../components/formInput";
import gif from "../Media/register-form.gif";
import successGif from "../Media/register.gif";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import AccountsAPI from "../api/accounts";

const AjaxRegister = () => {
  const navigate = useNavigate();
  const fields = data.RegisterFields;
  const [isSuccess, setIsSuccess] = useState(false);
  const [id, setId] = useState(0);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    bloodGrp: "",
    password: "",
  });

  const onChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const onChangeFile = (e) => {
    setNewUser({ ...newUser, ["file"]: e.target.files[0] });
  };

  const onNext = () => {
    setId((prevState) => prevState + 1);
  };

  const onPrev = () => {
    setId((prevState) => prevState - 1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(AccountsAPI.register(newUser));
    console.log(AccountsAPI.register(newUser));
  };

  console.log(newUser);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {isSuccess ? (
        <div sucess-registration>
          <h3 className="success-title">Welcome {newUser.name}</h3>
          <img className="success-gif" src={successGif} alt="" />
          <button
            className="login-redirect"
            onClick={() => navigate("/accounts/login")}
          >
            Login
          </button>
        </div>
      ) : (
        <div className="reg-container">
          <h1 className="title">Register</h1>
          <img className="register-gif" src={gif} alt="" />
          <form onSubmit={onSubmit}>
            {
              <Input
                field={fields[id]}
                value={newUser[fields[id].name]}
                onPrev={onPrev}
                onNext={onNext}
                onChange={onChange}
                onChangeFile={onChangeFile}
                user={newUser}
              />
            }
            {id === 7 && (
              <input
                type="submit"
                className="register-submit"
                value="Create account"
              />
            )}
          </form>
          <p
            className="login-footer"
            onClick={() => navigate("/accounts/login")}
          >
            {" "}
            Login <HiOutlineArrowNarrowRight />
          </p>
        </div>
      )}
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  max-width: 70vw;
  align-items: center;
  justify-content: center;
  height: 80vh;
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
      min-height: 85vh;
      margin: auto;
    }
  }
  .login-redirect {
    display: flex;
    width: 300px;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    background-color: black;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 10px 0;
    box-shadow: 10px 20px 20px #e3e3e3;
  }
  .login-footer {
    display: flex;
    gap: 0 5px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    cursor: pointer;
  }
  .title {
    color: black;
  }
  .success-gif {
    display: flex;
    align-items: center;
    width: 300px;
    margin: 0 auto;
  }
  .success-title {
    text-align: center;
    font-weight: bold;
  }

  .register-gif {
    max-width: 200px;
  }

  .register-submit {
    display: flex;
    background-color: #ff4949;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 5px 50px;
    margin: 10px auto;
    max-width: 100%;
  }

  .reg-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default AjaxRegister;
