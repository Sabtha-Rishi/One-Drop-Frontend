import React from "react";
import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const donorMiniView = ({ donor }) => {
  let base64string;
  if (Object.keys(donor).length > 3) {
    base64string = btoa(
      String.fromCharCode(...new Uint8Array(donor.profilePic.data.data))
    );
  }

  const navigate = useNavigate();
  const handleViewProfile = () => {
    navigate(`/donor/${donor._id}`);
  };
  return (
    <DonorProfile>
      <div className="donor-details">
        {Object.keys(donor).length > 3 && (
          <img
            className="profile-picture"
            src={`data:image/png;base64,${base64string}` || profile}
            alt=""
          />
        )}
        <p className="donor-name"> {donor.name}</p>
      </div>
      <a className="view-profile" onClick={handleViewProfile}>
        View profile <HiOutlineArrowNarrowRight />
      </a>
    </DonorProfile>
  );
};

export default donorMiniView;

const DonorProfile = styled.div`
  display: flex;
  height: 40px;

  .donor-details {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  .profile-picture {
    border-radius: 50%;
    width: 40px;
  }

  .donor-name {
    font-size: large;
    align-content: center;
    margin-top: 5px;
  }

  .view-profile {
    display: flex;
    align-items: center;
    margin-left: auto;
    color: black;
    gap: 3px;
    cursor: pointer;
  }
`;
