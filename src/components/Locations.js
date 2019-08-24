import React from "react";
import styled from "styled-components";
import imgLocation from "../images/img-locations-background.jpg";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const LocationsContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: #000 url(${imgLocation}) center/cover no-repeat fixed;
  text-align: center;
`;

const AddressContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  padding: 3rem;
`;

const Address = styled.div`
  width: 10rem;
  min-height: 12rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  margin: 2rem;
  color: #fff;
  padding: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  margin-top: 1rem;
  color: #fff;
`;

const ADRESSES = [
  {
    location: "Downtown",
    street: "384 West 4th St",
    additional: "Suite 108",
    city: "Portland, Maine"
  },
  {
    location: "East Bayside",
    street: "3433 Phisherman's Avenue",
    additional: "(Northwest Corner)",
    city: "Portland, Maine"
  },
  {
    location: "Oakdale",
    street: "515 Crescent Avenue",
    additional: "Second Floor",
    city: "Portland, Maine"
  }
]

export default function Locations() {
  return (
    <LocationsContainer id="locations">
      <SectionTitle>Locations</SectionTitle>
      <ScrollAnimation animateIn="fadeIn" duration="3" animateOnce="true">
        <AddressContainer>
          {ADRESSES.map(address => (
            <Address key={address.street.toLowerCase().replace(" ", "-")}>
              <h3>{address.location}</h3>
              <p>{address.street}</p>
              <p>{address.additional}</p>
              <p>{address.city}</p>
            </Address>
          ))}
        </AddressContainer>
      </ScrollAnimation>
    </LocationsContainer>
  )
};
