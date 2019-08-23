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
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 1.5rem;
`;

export default function Mission() {
  return (
    <HeroImage id="mission">
      <MissionContainer>
        <SectionTitle>Our Mission</SectionTitle>
        <Paragraph>Handpicked, Artisanally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organic Tea</Paragraph>
      </MissionContainer>
    </HeroImage>
  )
};

