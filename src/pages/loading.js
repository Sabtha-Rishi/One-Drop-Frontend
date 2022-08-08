import React from "react";
import styled from "styled-components";
import loadingGIF from "../Media/loading.gif";

const loading = () => {
  return (
    <Loader>
      <img className="gif" src={loadingGIF} alt=""></img>;
    </Loader>
  );
};

export default loading;

const Loader = styled.div`
  display: flex;
  max-width: 100vh;
  max-height: 100vw;
  margin: auto;

  .gif {
    align-items: center;
    justify-content: center;
    margin: auto;
    max-height: 100vh;
  }
`;
