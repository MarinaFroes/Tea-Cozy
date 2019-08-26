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
  z-index: 100;
  top: 0;
  border-bottom: 1px solid #fff;
`;

const Img = styled.img`
  height: 2.5rem;
  padding: 0.5rem;
  margin-left: 1rem;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 10px;
  width: 100%;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
  &:last-of-type {
    margin-right: 40;
  }
`;

const LINKS = [
  {
    label: "Mission",
    href: "#mission"
  },
  {
    label: "Gallery",
    href: "#gallery"
  },
  {
    label: "Locations",
    href: "#locations"
  },
  {
    label: "Contact",
    href: "#contact"
  }
];

export default function Header() {
  return (
    <HeaderContainer>
      <a href="/#"><Img src={logo} alt="logo" /></a>
      <NavContainer >
        {LINKS.map(link => (
          <NavLink key={link.href} href={link.href} >
            {link.label}
          </NavLink>
        ))}
      </NavContainer>
    </HeaderContainer>
  )
};

