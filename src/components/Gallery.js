import React from "react";
import styled from "styled-components";
import bedford from "../images/img-bedford-bizarre.jpg";
import berryblitz from "../images/img-berryblitz.jpg";
import myrtle from "../images/img-myrtle-ave.jpg";
import donut from "../images/img-donut.jpg";
import rum from "../images/img-spiced-rum.jpg";

const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #000;
  border: 3px solid red;
  text-align: center;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  padding: 3rem;
  border: 3px solid green;
`;

const Img = styled.img`
  height: 13rem;
  padding: 0.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #fff;
`;

export default function Gallery() {
  return (
    <GalleryContainer>
      <SectionTitle>Tea of the Month</SectionTitle>
      <ImgContainer>
        <Img src={bedford} alt="tea"/>
        <Img src={berryblitz} alt="tea"/>
        <Img src={myrtle} alt="tea" />
        <Img src={donut} alt="tea" />
        <Img src={rum} alt="tea" />
      </ImgContainer>
    </GalleryContainer>
  )
};

