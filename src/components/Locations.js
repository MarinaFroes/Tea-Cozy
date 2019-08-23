import React from "react";
import styled from "styled-components";
import imgLocation from "../images/img-locations-background.jpg";

const LocationsContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: #000 url(${imgLocation}) center/cover no-repeat ;
  text-align: center;
  border: 3px solid yellow;
`;

const AddressContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  padding: 3rem;
  border: 3px solid green;
`;

const Address = styled.div`
  width: 10rem;
  min-height: 12rem;
  text-align: center;
  background-color: #000;
  margin: 2rem;
  color: #fff;
  padding: 1rem;
  border: 3px solid blue;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  border: 3px solid blue;
  margin: 0;
  margin-top: 1rem;
  color: #fff;
`;

export default function Locations() {
  return (
    <LocationsContainer>
      <SectionTitle>Locations</SectionTitle>
      <AddressContainer>
        <Address>
          <h3>Downtown</h3>
          <p>384 West 4th St</p>
          <p>Suite 108</p>
          <p>Portland, Maine</p>
        </Address>
        <Address>
          <h3>East Bayside</h3>
          <p>3433 Phisherman's Avenue</p>
          <p>(Northwest Corner)</p>
          <p>Portland, Maine</p>
        </Address>
        <Address>
          <h3>Oakdale</h3>
          <p>515 Crescent Avenue</p>
          <p>Second Floor</p>
          <p>Portland, Maine</p>
        </Address>
      </AddressContainer>
    </LocationsContainer>
  )
};

