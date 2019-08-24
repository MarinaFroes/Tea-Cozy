import React from "react";
import styled from "styled-components";
import bedford from "../images/img-bedford-bizarre.jpg";
import berryblitz from "../images/img-berryblitz.jpg";
import myrtle from "../images/img-myrtle-ave.jpg";
import donut from "../images/img-donut.jpg";
import rum from "../images/img-spiced-rum.jpg";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #000;
  text-align: center;
  color: #fff;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  margin: 2rem 0;
`;

const Img = styled.img`
  height: 13rem;
  padding: 0.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

const IMAGES_INFO = [
  {
    src: `${ bedford }`,
    alt: "top view of a cup of tea"
  },
  {
    src: `${ berryblitz }`,
    alt: "top view of a cup of tea"
  },
  {
    src: `${ myrtle }`,
    alt: "top view of a cup of tea"
  },
  {
    src: `${ donut }`,
    alt: "donut"
  },
  {
    src: `${ rum }`,
    alt: "wooden box"
  }
]

export default function Gallery() {
  return (
    <GalleryContainer id="gallery">
      <SectionTitle>Tea of the Month</SectionTitle>
      <Paragraph>What's Steeping at The Tea Cozy?</Paragraph>
      <ScrollAnimation animateIn="fadeIn" duration="3" animateOnce="true">
        <ImgContainer>
          {IMAGES_INFO.map(image_info => (
            <Img
              src={image_info.src}
              alt={image_info.alt}
              key={image_info.src}
            />
          ))}
        </ImgContainer>
      </ScrollAnimation>
    </GalleryContainer>
  )
};

 

