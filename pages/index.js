import styled from "styled-components";
import { useWeb3 } from "@3rdweb/hooks";
import { connectWallet } from "@3rdweb/react";
import DashBoard from "./DashBoard";

export default function Home() {
  const { address, connectWallet } = useWeb3();

  return (
    <Wrapper>
      {address ? (
        <DashBoard address={address} />
      ) : (
        <WalletConnect>
          <Button onClick={() => connectWallet("injected")}>
            Connect Wallet
          </Button>
          <Details>
            You need Chrome to be
            <br /> able to run this app.
          </Details>
        </WalletConnect>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  // height: 90vh;
  max-width: 100vw;
  color: white;
  display: grid;
  place-items: center;
`;

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 8.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  background-color: #3773f5;
  color: #000;

  &:hover {
    cursor: pointer;
  }
`;

const Details = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #282b2f;
  margin-top: 1rem;
  text-align: center;
`;
