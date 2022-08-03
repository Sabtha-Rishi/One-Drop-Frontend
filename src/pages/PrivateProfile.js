import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DonorProfile from "../components/donorProfile";
import EditProfile from "../components/editProfile";
import AccountsAPI from "../api/accounts";
import Popup from "reactjs-popup";

const PrivateProfile = ({
  isAuthenticated,
  setIsAuthenticated,
  user,
  setUser,
}) => {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      AccountsAPI.getUser(setIsAuthenticated, setUser);
      setIsEditing(false);
    }
  }, []);

  if (!isAuthenticated) {
    navigate("/accounts/login");
  }

  useEffect(() => {
    if (isEditing) {
      document.getElementsByClassName("overlay")[0].style.display = "flex";
    } else {
      document.getElementsByClassName("overlay")[0].style.display = "none";
    }
    AccountsAPI.getUser(setIsAuthenticated, setUser);
  }, [isEditing]);

  return (
    <Profile>
      {isAuthenticated && (
        <DonorProfile
          user={user}
          isEditing={setIsEditing}
          setIsEditing={setIsEditing}
        />
      )}

      <button
        className="toggle-edit"
        onClick={(e) => {
          setIsEditing(true);
        }}
      >
        Edit
      </button>

      <div className="overlay">
        <Popup
          open={isEditing}
          position="center center"
          closeOnDocumentClick={false}
        >
          <EditProfile
            user={user}
            setIsEditing={setIsEditing}
            setUser={setUser}
          />
        </Popup>
      </div>
    </Profile>
  );
};

const Profile = styled.div`
  display: flex;
  flex-direction: column;

  .toggle-edit {
    background-color: black;
    color: white;
    width: 100px;
    margin: 0 auto;
    max-width: 100%;
    height: 30px;
    font-size: 900;
    border: none;
    border-radius: 5px;
    align-content: center;
  }
  .overlay {
    position: fixed; /* Sit on top of the page content */
    display: none;
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(1, 1, 1, 0.8);
    cursor: pointer;
    z-index: 1;
  }
`;

export default PrivateProfile;
