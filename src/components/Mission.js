import React from "react";
import styled from "styled-components";

const HeroImage = styled.section`
  display: flex;
  width: 100%;
  background: #000 url(../images/img-mission-background.jpg) no-repeat fixed center; 
`;

//  background-image: url(../images/img-mission-background.jpg);
const MissionContainer = styled.div`
  display: flex;
  text-align: center;
  background-color: #000;
  color: #fff;
`;

export default function Mission() {
  return (
    <HeroImage>
      <MissionContainer>Mission</MissionContainer>
    </HeroImage>
  )
};

