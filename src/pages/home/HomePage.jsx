import React, { useEffect } from "react";
import styled from "styled-components";
import Sidenav from "../../components/sidenav/Sidenav";
import ChatDetail from "../detail/ChatDetail";
import devices from '../../utils/devices'
import { useAppHooks } from "../../contexts";

const HomePageStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 20% 80%;

  @media ${devices.tablet} {
    grid-template-columns: 35% 65%;
  }

  @media ${devices.mobileL} {
    display: inline;
    transform: translateY(${props => props.isSelected ? -500 : 0 }px);
    transition: transform 600ms ease-in-out;
    position: absolute;
    width: 100%;
    overflow: hidden;
  }
`;

const HomePage = () => {
  const { useTransition } = useAppHooks()
  const [{ chatSelected }, _] = useTransition()
  
  console.log(chatSelected)

  return (
    <HomePageStyle isSelected={chatSelected}>
      <Sidenav />
      <ChatDetail />
    </HomePageStyle>
  );
};

export default HomePage;
