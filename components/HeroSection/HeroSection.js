import styled from "styled-components";
import Image from "next/image";
import { motion } from "motion/react";

export default function HeroSection({ image, title, subtitle }) {
    return (
  <ImageWrapper>
    <ProfileImage src={image} alt={title} />
    <StyledSection>
      <TextWrapper>
        <StyledHeadline>{title}</StyledHeadline>
        <StyledSubheadline>{subtitle}</StyledSubheadline>
      </TextWrapper>
    </StyledSection>
  </ImageWrapper>
);
}

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ProfileImage = styled(motion(Image))`
  width: 100%;
  height: auto;
  animation: float 6s ease-in-out infinite;

  @media (min-width: 768px) {
    max-height: 400px;
    object-fit: cover;
  }
`;

const StyledSection = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(20%, 45%);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.85);
  padding: 1.5rem;
  border-radius: 50px 0px 50px 0px;
  max-width: 85%;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 2;

  @media (min-width: 768px) {
    transform: translate(20%, 42%);
    max-width: 750px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StyledHeadline = styled.h2`
  color: var(--yellow);
  font: var(--main-headline);
  letter-spacing: 0.05rem;
  margin: 0;
  flex-grow: 1;
  overflow: hidden;
  text-transform: uppercase;
  animation: float 6s ease-in-out infinite;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledSubheadline = styled.p`
  font: var(--sub-headline);
  margin: 0;
  margin-top: 0.5rem;
  flex-grow: 1;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;
