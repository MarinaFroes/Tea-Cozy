import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  background-color: #000;
  color: #fff;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.a`
  color: silver;
  font-size: 1.5rem;
  margin: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  border: 3px solid blue;
  margin: 0;
  margin-top: 1rem;
  color: #fff;
`;

const ContactInfo = styled.p`
  font-size: 1rem;
  border: 3px solid blue;
  margin: 0;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <SectionTitle>The Tea Cozy</SectionTitle>
        <ContactInfo>contact@theteacozy.com</ContactInfo>
        <ContactInfo>917-555-8904</ContactInfo>
      </div>
      <p>Page written by Marina Froes A. Costa</p>
      <IconContainer>
        <Icon href="https://github.com/MarinaFroes" target="_blank">
          {<FaGithub />}
        </Icon>
        <Icon
          href="https://www.linkedin.com/in/marina-froes-a-costa/"
          target="_blank"
        >
          {<FaLinkedin />}
        </Icon>
      </IconContainer>
    </FooterContainer>
  )
};

