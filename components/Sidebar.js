import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import CoinBaseXLogo from "../assets/cb-logo.png";
import { navItems } from "../static/navItems";

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title);

  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          <Image src={CoinBaseXLogo} alt="Coinbase logo" />
        </Logo>
      </LogoContainer>
      <NavItemsContainer>
        {navItems.map((item, index) => (
          <NavItem key={index} onCLick={() => setActiveIcon(item.title)}>
            <NavIcon style={{ color: item.title === activeIcon && "#3773f5" }}>
              {item.icon}
            </NavIcon>
            <NavTitle>{item.title}</NavTitle>
          </NavItem>
        ))}
      </NavItemsContainer>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  height: calc(100vh);
  border-right: 1px solid #282b2f;
  width: calc(22rem);
  padding: 0 1rem;
`;

const LogoContainer = styled.div`
  margin: 1.5rem 0;
`;

const Logo = styled.div`
  width: 44%;
  object-fit: contain;
  margin-left: 1.5rem;
`;

const NavItemsContainer = styled.div`
  margin-top: 3rem;
  & :hover {
    cursor: pointer;
    background-color: #141519;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 4rem;
`;

const NavIcon = styled.div`
  background-color: #141519;
  display: grid;
  padding: 0.7rem;
  border-radius: 50%;
  margin: 0 1rem;
  place-items: center;
  & :hover {
    // cursor: pointer;
    color: #3773f5;
  }
`;

const NavTitle = styled.div``;
