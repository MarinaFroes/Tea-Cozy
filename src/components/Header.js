import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  background-color: #000;
  color: #fff;
`;

export default function Header() {
  return (
    <HeaderContainer>
     <img src="../images/img-tea-cozy-logo.png" alt="logo"/>
     <p>links</p>
    </HeaderContainer>
  )
};

