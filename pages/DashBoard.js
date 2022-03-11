import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const DashBoard = (address) => {
  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header walletAddress= {address} />
        <Main />
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
  overflow: hidden;
`;

const MainContainer = styled.div`
  flex: 1;
`;
