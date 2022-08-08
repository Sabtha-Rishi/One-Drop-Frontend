import React, { useState } from "react";
import styled from "styled-components";
import logoDark from "../Media/logo-light.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";


const NavBar = ({isSidebarOpen, setIsSidebarOpen}) => {
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <NavbarCont>
      <img
        className="logo"
        src={logoDark}
        alt=""
        onClick={(e) => navigate("/")}
      />

      <ul className="navigation-large">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/">
          Find Donor
        </Link>
        <a className="nav-link" onClick={() => navigate("/profile")}>
          Profile
        </a>

        <button
          className="nav-link-donate"
          onClick={() => navigate("/requests")}
        >
          Donate{" "}
        </button>
      </ul>

      <div className="sidebar-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <div>
            <IoMdClose />
          </div>
        ) : (
          <HiOutlineMenu />
        )}
      </div>
    </NavbarCont>
  );
};

//  CSS STYLING

const NavbarCont = styled.nav`
  display: flex;
  padding-bottom: 10px;
  flex-direction: row;
  align-items: center;
  max-height: 90px;
  min-width: 100vw;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow: hidden;
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 100;

  .logo {
    max-width: 150px;
    padding-top: 15px;
    margin-left: 10%;
    cursor: pointer;
  }

  .navigation-large {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-right: 10%;
    padding-top: 20px;
    min-height: 30px;
  }

  .nav-link {
    color: white;
    font-weight: bolder;
    cursor: pointer;
    text-decoration: none;
  }

  .nav-link-donate {
    background-color: #ff4949;
    padding: 5px 15px;
    color: white;
    border-radius: 7px;
    border: none;
    font-weight: 500;
  }

  .sidebar-btn {
    display: none;
  }

  .nav-link-donate:hover {
    background-color: #ff5454;
  }
  /* The sticky class is added to the header with JS when it reaches its scroll position */

  @media only screen and (max-width: 600px) {
    .nav-link {
      display: none;
    }

    .nav-link-donate {
      display: none;
    }
    .logo {
      max-width: 130px;
      padding-top: 15px;
      padding-bottom: 5px;
      margin-left: 5%;
    }

    .sidebar-btn {
      display: flex;
      color: white;
      margin-right: 20px;
      font-size: 25px;
      margin-top: 5px;
    }
  }
`;
export default NavBar;
