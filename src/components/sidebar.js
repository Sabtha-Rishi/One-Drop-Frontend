import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { FaUser, FaQuestion, FaHeart } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";

const sidebar = () => {
  return (
    <BottomBar>
      <ul className="navigation-small">
        <Link className="nav-link" to="/profile">
          <div className="nav-block">
            <FaUser /> My Profile
          </div>
        </Link>
        <Link className="nav-link" to="/">
          <div className="nav-block">
            <AiFillHome />
            Home
          </div>
        </Link>
        <Link className="nav-link" to="/">
          <div className="nav-block">
            <TiPlus /> New Request
          </div>
        </Link>
        <Link className="nav-link" to="/">
          <div className="nav-block">
            <FaQuestion /> How it works
          </div>
        </Link>
      </ul>
      <button className="nav-link-donate" onClick={() => navigate("/requests")}>
        Donate{" "}
      </button>
      <p className="watermark">
        Made with <FaHeart /> by Sabtha Rishi
      </p>
    </BottomBar>
  );
};

export default sidebar;

const BottomBar = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    animation: fadeIn 0.3s;
    border-radius: 0 0 7px 7px;
    background-color: black;
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    width: 70vw;
    height: 100vh;
    padding-bottom: 10px;
    padding-left: 0;

    .navigation-small {
      display: flex;
      flex-direction: column;
      color: white;
      margin: 20px 0;
      gap: 20px;
    }
    .watermark {
      font-family: Amatic SC;
      font-weight: bold;
      font-size: 20px;
      display: flex;
      gap: 4px;
      color: white;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }

    .nav-link {
      display: flex;
      flex-direction: row;
      color: white;
      align-items: center;
    }

    .nav-block {
      display: flex;
      gap: 30px;
      align-items: center;
      justify-content: center;
      font-size: 15px;
    }

    .nav-name {
      padding-bottom: 2px;
    }

    .nav-link-donate {
      background-color: #ff4949;
      min-width: 60vw;
      margin: 5px 20px;
      padding: 5px 15px;
      color: white;
      border-radius: 7px;
      border: none;
      font-weight: 500;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
