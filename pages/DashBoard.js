import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const DashBoard = (address) => {
  return (
    <Wrapper>
      <MainContainer>
        <Header />
      </MainContainer>
    </Wrapper>
  );
};

export default DashBoard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  color: white;
  background-color: #0a0b0d;
`;

const MainContainer = styled.div`
  flex: 1;
`;
