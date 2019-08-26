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

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  padding: 2rem 0;
`;

const Picture = styled.div`
  height: 15rem;
  width: 20rem;
  margin: 0.5rem;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;

  &:hover a {
    visibility: visible;
    animation: animationFrames ease 2s;
    animation-iteration-count: 1;
    transform-origin: 50% 50%;
    animation-fill-mode:forwards;
  }

  @keyframes animationFrames{
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}
`;

const InfoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(250,255,255,.7);
  color: #000;
  visibility: hidden;
  height: 15rem;
  width: 20rem;
  font-size: 1.2rem;
  cursor: pointer;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 1rem 0;

  @media only screen and (max-width: 500px){
    font-size: 1.8rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  margin: 0 1rem 1.5rem 1rem;
`;

const IMAGES_INFO = [
  {
    name: "Bedford Bizarre tea",
    src: `${ bedford }`,
    alt: "top view of a cup of tea"
  },
  {
    name: "Berryblitz tea",
    src: `${ berryblitz }`,
    alt: "top view of a cup of tea"
  },
  {
    name: "Myrtle Ave Tea",
    src: `${ myrtle }`,
    alt: "top view of a cup of tea"
  },
  {
    name: "Donut",
    src: `${ donut }`,
    alt: "donut"
  },
  {
    name: "Spiced Rum",
    src: `${ rum }`,
    alt: "wooden box"
  }
]

export default function Gallery() {
  return (
    <GalleryContainer id="gallery">
      <SectionTitle>Tea of the Month</SectionTitle>
      <Paragraph>What's Steeping at The Tea Cozy?</Paragraph>
      <PictureContainer>
      {IMAGES_INFO.map(image_info => (
        <ScrollAnimation key={image_info.src} animateIn="fadeIn" duration={3} animateOnce={true}>
          <Picture
            src={image_info.src}
            alt={image_info.alt}
          >
            <InfoLink href="#">Click here to know more about our {image_info.name}</InfoLink>
          </Picture>
        </ScrollAnimation>
      ))}
      </PictureContainer>
    </GalleryContainer>
  )
};
