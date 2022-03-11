import React from "react";
import styled from "styled-components";

const Header = ({ walletAddress, connectWallet }) => {
  //   console.log(walletAddress);
  return (
    <Wrapper>
      <Title>Assets</Title>
      <ButtonContainer>
        <WalletLink>
          <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
          <WalletAddress>
            {walletAddress.address.slice(0, 7)}...{" "}
            {walletAddress.address.slice(35)}
          </WalletAddress>
        </WalletLink>
        <Button style={{ backgroundColor: "#3773f5", color: "#000" }}>
          Buy/Sell
        </Button>
        <Button style={{ color: "white" }}>Send / Receive</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: calc(100% - 3rem);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 500;
  flex: 1;
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const WalletLink = styled.div`
  font-size: 0.8rem;
  border-radius: 50rem;
  border: 1px solid #282b2f;
  padding: 0.1rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const WalletLinkTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #27ad75;
`;

const WalletAddress = styled.div`
  font-size: 0.8rem;
  color: white;
`;
