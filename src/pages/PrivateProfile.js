import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DonorProfile from "../components/donorProfile";
import EditProfile from "../components/editProfile";
import Popup from "reactjs-popup";
import AccountsAPI from "../api/accounts";

const PrivateProfile = ({ isAuthenticated, setIsAuthenticated }) => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    AccountsAPI.getUser(setIsAuthenticated, setUser);
  }, []);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/accounts/login");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isUpdated) {
      AccountsAPI.getUser(setIsAuthenticated, setUser);
    }
    setIsUpdated(false);
  }, [isUpdated]);

  useEffect(() => {
    if (isEditing) {
      document.getElementsByClassName("overlay")[0].style.display = "flex";
    } else {
      document.getElementsByClassName("overlay")[0].style.display = "none";
    }
  }, [isEditing]);

  const handleLogout = () => {
    AccountsAPI.logout(setIsAuthenticated, setUser);
  };

  const handleMyRequests = () => {
    navigate("/my-requests");
  };

  return (
    <Profile>
      {isAuthenticated && (
        <>
          <DonorProfile
            user={user}
            isEditing={setIsEditing}
            setIsEditing={setIsEditing}
          />
          <div className="user-actions">
            <button
              className="toggle-edit"
              onClick={(e) => {
                setIsEditing(true);
              }}
            >
              Edit
            </button>

            <button className="toggle-edit" onClick={handleLogout}>
              Log Out
            </button>

            <button className="toggle-edit" onClick={handleMyRequests}>
              My Requests
            </button>
          </div>
        </>
      )}

      <div className="overlay">
        <Popup
          open={isEditing}
          position="center center"
          closeOnDocumentClick={false}
        >
          <EditProfile
            user={user}
            setIsEditing={setIsEditing}
            setIsUpdated={setIsUpdated}
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

  .user-actions {
    display: flex;
    gap: 50px;
    margin: 0 auto;
    align-items: center;
    flex-direction: row;
    justify-content: space-left;
  }
`;

export default PrivateProfile;
