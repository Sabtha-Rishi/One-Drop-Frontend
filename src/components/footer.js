import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

const footer = () => {
  return (
    <FooterBar>
      <p className="footer-text">
        Made with <AiFillHeart /> by Sabtha Rishi
      </p>
    </FooterBar>
  );
};

export default footer;

const FooterBar = styled.div`
  display: flex;
  position: sticky;
  background-color: #e6e6e6;
  color: black;
  align-items: center;
  justify-content: center;
  height: 25px;

  .footer-text {
    display: flex;
    align-items: center;
    gap: 2px;
    margin-top: 6px;
  }
`;
