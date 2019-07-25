import React from "react";
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

  @media ${devices.mobileL} {
    display: flex;
    flex-wrap: no-wrap;
    transform: translateX(${props => !props.isSelected ? 0 : 100 }%);
    transition: all 600ms ease-in-out;
  }
`;

const HomePage = () => {
  const { useTransition } = useAppHooks()
  const [{ chatSelected }, _] = useTransition()

  return (
    <HomePageStyle isSelected={chatSelected}>
      <Sidenav />
      <ChatDetail />
    </HomePageStyle>
  );
};

export default HomePage;
