import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "../components/__data";
import { Route, Link, Routes, useParams } from "react-router-dom";
import { GoVerified } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { FaTruckPickup, FaShareAlt, FaMapMarked } from "react-icons/fa";
import { AiFillCaretRight, AiFillHeart } from "react-icons/ai";
import { BsFillDropletFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const SingleRequestMini = ({ requestData }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/requests/${requestData._id}`);
  };

  return (
    <RequestContainer>
      <h1 className="req-patientName">
        {requestData.patientName}
        <p className="req-bloodGrp">
          <BsFillDropletFill /> {requestData.bloodGrp}
        </p>
      </h1>

      {(requestData.isDrop ||
        requestData.isPickup ||
        requestData.isVerified) && (
        <div className="req-perks">
          {requestData.isPickup && (
            <p className="req-perks-li">
              {" "}
              <FaTruckPickup /> PICKUP
            </p>
          )}
          {requestData.isDrop && (
            <p className="req-perks-li">
              {" "}
              <FaTruckPickup /> DROP
            </p>
          )}
          {requestData.isVerified && (
            <p className="req-perks-li">
              {" "}
              <GoVerified /> VERIFIED
            </p>
          )}
        </div>
      )}

      <div className="req-contact">
        {requestData.attenderPhone !== "" && (
          <div className="contact-cta">
            <button className="req-whatsapp-attender">
              WhatsApp
              <RiWhatsappFill />
            </button>

            <button className="req-whatsapp-attender">
              Share
              <FaShareAlt />
            </button>
            <button className="req-whatsapp-attender">
              Maps
              <FaMapMarked />
            </button>
          </div>
        )}
        <div className="cta">
          <button className="req-donate-call" onClick={handleDetailsClick}>
            View details
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </div>
    </RequestContainer>
  );
};

const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 700px;
  max-width: 700px;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 30px;
  transition-duration: 0.4s;
  background-color: #fafafa;
  box-shadow: 10px 20px 20px #e3e3e3;
  gap: 20px;

  @media only screen and (max-width: 700px) {
    & {
      min-width: 90vw;
      max-width: 90vw;
    }
  }

  .req-patientName {
    padding-bottom: 15px;
    border-bottom: 1px solid;
    border-color: lightgrey;
    display: flex;
    padding-right: 10px;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 0;
  }

  .req-units {
    animation: blinker 2s linear infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  .req-bloodGrp {
    width: 100px;
    height: 30px;
    margin-top: 7px;
    border-radius: 5px;
    justify-content: center;
    text-align: center;
    padding: 3px;
    padding-left: 8px;
    font-size: 15px;
    color: #e85151;
    padding-top: 5px;
    transition-duration: 0.4s;
  }

  .req-hospital {
    margin-top: 0;
  }

  .req-bloodGrp:hover {
    transform: scale(1.2);
    transition-duration: 0.4s;
  }

  .req-units {
    display: flex;
    gap: 10px;
    height: 30px;
    border-radius: 5px;
    padding-left: 10px;

    justify-content: left;
    align-content: center;
    text-align: left;
    text-justify: auto;
    font-size: 15px;
    font-family: "Oswald";
    color: black;
    align-items: center;
  }

  .req-verified {
    display: flex;
    flex-direction: row;
    background-color: #a1d487;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    padding: 3px;
    padding-left: 8px;
    margin-top: 7px;
    gap: 10px;
    font-size: 15px;
    font-family: "Oswald";
    color: white;
  }
  .req-verified:hover {
    background-color: #83b36b;
    cursor: pointer;
  }

  .req-perks {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: left;
    align-items: center;
    width: auto;
    align-items: center;
    border-radius: 7px;
  }

  .req-perks-li {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    color: black;
    border-radius: 50px;
    background-color: #d5f5f2;
    padding: 2px 5px;
    justify-content: left;
    justify-items: center;
  }

  .req-contact {
    display: flex;
    flex-direction: column;
  }

  .req-call-attender {
    margin-top: 10px;
    display: flex;
    border-radius: 7px;
    color: black;
    border: 2px solid black;
    height: 30px;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #faf0f0;
    gap: 10px;
    margin-bottom: 10px;
  }
  .req-whatsapp-attender {
    display: flex;
    border-radius: 7px;
    color: black;
    background-color: #fafafa;
    border: none;
    height: 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 13px;
  }
  .req-docs {
    display: flex;
    color: black;
    font-size: 15px;
    border: none;
    height: 30px;
    justify-content: center;
    align-items: center;
    background: none;
    gap: 10px;
  }
  .contact-cta {
    display: flex;
    flex-direction: row;
    gap: 5px;
    font-size: 20px;
    max-width: min-content;
    justify-content: space-between;
  }

  .req-docs-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .req-donate-call {
    margin-top: 10px;
    display: flex;
    border-radius: 7px;
    color: black;
    height: 40px;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    border: none;
    transition-duration: 0.4s;
  }

  .req-donate {
    margin-top: 10px;
    display: flex;
    border-radius: 7px;
    color: white;
    height: 40px;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: black;
    gap: 10px;
    margin-bottom: 10px;
    border: 1px solid black;
    transition-duration: 0.4s;
  }

  .req-donate:hover {
    transform: scale(1.01);
    transition-duration: 0.4s;
    background-color: black;
    color: white;
  }

  .cta {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin: px 10px;
  }
`;
export default SingleRequestMini;
