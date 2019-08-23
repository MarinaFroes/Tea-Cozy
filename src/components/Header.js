import React from "react";
import styled from "styled-components";
import logo from "../images/img-tea-cozy-logo.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  background-color: #000;
  color: #fff;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #fff;
`;

const Img = styled.img`
  height: 2.5rem;
  padding: 0.5rem;
  margin-left: 1rem;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Img src={logo} alt="logo"/>
      <p>links</p>
    </HeaderContainer>
  )
};

