import React, { useEffect } from "react";
import data from "../components/__data";
import styled from "styled-components";
import profile from "../Media/sas.jpg";
import { RiWhatsappFill, RiGenderlessFill } from "react-icons/ri";
import { AiFillPhone, AiFillInstagram } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { FaCarSide } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

const DonorProfile = ({ user }) => {
  
  const donordata = user || data.singleDonor;
  let base64string;

  if (Object.keys(user).length > 3) {
    base64string = btoa(
      String.fromCharCode(...new Uint8Array(user.profilePic.data.data))
    );
  }

  return (
    <Profile>
      <div className="basic-details">
        {Object.keys(user).length > 3 && (
          <img
            className="profile-picture"
            src={`data:image/png;base64,${base64string}` || profile}
            alt=""
          />
        )}
      </div>
      <div className="user-tags">
        <h3 className="user-name">
          {donordata.name} {donordata.isVerified && <TiTick />}
        </h3>
        {donordata.isAvailable && (
          <div className="user-tags">
            {donordata.isAvailable && (
              <p className="user-tags-li">
                {" "}
                <GoPrimitiveDot />
                Available
              </p>
            )}
          </div>
        )}
      </div>
      <p className="user-name"> {donordata.bio}</p>
      <h3>Details</h3>
      <ul className="user-details">
        <div className="user-details-li">
          {" "}
          <BsFillCalendarDateFill />
          {donordata.age}{" "}
        </div>
        <div className="user-details-li">
          <RiGenderlessFill /> {donordata.gender}{" "}
        </div>
        <div className="user-details-li">
          <FaCarSide />
          {donordata.location}{" "}
        </div>
        <div className="user-details-li"> </div>
      </ul>

      <div className="user-contact">
        {donordata.isWhatsapp && (
          <button className="user-contact-li">
            {" "}
            <RiWhatsappFill /> Whatsapp
          </button>
        )}
        {donordata.isCall && (
          <button className="user-contact-li">
            {" "}
            <AiFillPhone /> Call
          </button>
        )}
        {donordata.isEmail && (
          <button className="user-contact-li">
            {" "}
            <GrMail />
            Email
          </button>
        )}
        {donordata.isInstagram && (
          <button className="user-contact-li">
            {" "}
            <AiFillInstagram />
            Instagram
          </button>
        )}
      </div>
    </Profile>
  );
};

export default DonorProfile;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 70vw;
  margin: 50px auto;
  overflow: hidden;
  padding: 10px 30px;
  transition-duration: 0.4s;
  background-color: #fafafa;
  box-shadow: ${({ isEditing }) => (isEditing ? "10px 20px 20px #e3e3e3" : "")};

  @media only screen and (max-width: 600px) {
    & {
      min-width: 95vw;
      max-width: 95vw;
      margin: 30px auto;
    }
    .request-blood-btn {
      min-width: 70vw;
      margin: 0 auto;
    }
  }

  .user-tags {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: left;
    align-items: center;
    width: auto;
    border-radius: 7px;
  }

  .user-details {
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
    margin: 0;
    gap: 7px;
    padding: 10px;
    border-radius: 7px;
    /* box-shadow: 15px 10px 30px #e3e3e3; */
  }

  .user-details-li {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: left;
  }

  .user-contact {
    display: flex;
    flex-direction: row;
    gap: 0px 10px;
    justify-content: left;
    align-items: center;
    width: auto;
    margin-top: 20px;
    border-radius: 7px;
    flex-wrap: wrap;
  }
  .user-name {
    display: flex;
    flex-direction: row;
    gap: 3px;
  }

  .user-contact-li {
    display: flex;
    flex-direction: row;
    color: black;
    border: none;
    padding: 4px 10px;
    gap: 10px;
    justify-content: left;
    align-items: center;
    width: auto;
    margin-top: 20px;
    border-radius: 7px;
  }
  .user-contact-li:hover {
    text-decoration: underline;
  }

  .user-tags-li {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    margin-top: 25px;
    color: #45b056;
    border-radius: 50px;
    padding: 2px 5px;
    justify-content: left;
    justify-items: center;
  }

  .user-tags {
    display: flex;
    flex-direction: row;
  }

  .basic-details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  .profile-picture {
    width: 100px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    justify-self: center;
  }

  .request-blood-btn {
    margin: 30px auto;
    width: 50vw;
    border: none;
    box-shadow: 15px 20px 10px #e3e3e3;
    background-color: black;
    padding: 8px 5px;
    color: white;
    border-radius: 3px;
    transition-duration: 0.4s;
  }

  .request-blood-btn:hover {
    transform: scale(1.02);
    transition-duration: 0.4s;
  }
`;
