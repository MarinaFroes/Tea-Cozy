import React from "react";
import styled from "styled-components";

const GalleryContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background-color: #000;
  color: #fff; 
`;

export default function Locations() {
  return (
    <GalleryContainer>
      <img src="../images/img-bedford-bizarre.jpg" alt="tea"/>
      <img src="../images/img-berryblitz.jpg" alt="tea"/>
      <img src="../images/img-myrtle-ave.jpg" alt="tea"/>
    </GalleryContainer>
  )
};

