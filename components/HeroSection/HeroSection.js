import styled from "styled-components";
import Image from "next/image";

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

const ProfileImage = styled(Image)`
  border-radius: 0px 50px 0px 50px;
  width: 100%;
  height: auto;
`;

const StyledSection = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(20%, 35%);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.8);
  padding: 1.5rem;
  border-radius: 50px 0px 50px 0px;
  max-width: 85%;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 2;

  @media (min-width: 768px) {
    transform: translate(20%, 42%);
    max-width: 500px;
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
  margin: 0;
  flex-grow: 1;
  overflow: hidden;
`;

const StyledSubheadline = styled.p`
  font: var(--sub-headline);
  margin: 0;
  margin-top: 0.5rem;
  flex-grow: 1;
  overflow: hidden;
`;
