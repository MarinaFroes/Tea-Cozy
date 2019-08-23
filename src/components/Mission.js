import React from "react";
import styled from "styled-components";
import missionBg from "../images/img-mission-background.jpg";

const HeroImage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${missionBg}); 
  background-size: cover;
`;

const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  border: 3px solid blue;
  margin: 0;
  margin-top: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  border: 3px solid blue;
  margin: 0;
  margin-bottom: 1rem;
`;

export default function Mission() {
  return (
    <HeroImage>
      <MissionContainer>
        <SectionTitle>Our Mission</SectionTitle>
        <Paragraph>Handpicked, Artisanally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organic Tea</Paragraph>
      </MissionContainer>
    </HeroImage>
  )
};

