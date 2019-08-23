import React from "react";
import styled from "styled-components";

const LocationsContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background-color: #000;
  color: #fff; 
`;

export default function Locations() {
  return (
    <LocationsContainer>
      <div>
        Address 1
      </div>
      <div>
        Address 2
      </div>
      <div>
        Address 3
      </div>
    </LocationsContainer>
  )
};

