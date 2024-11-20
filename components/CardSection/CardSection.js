import styled from "styled-components";
import Image from "next/image";


export default function CardSection({image, title, subtitle}) {
  return (
    <StyledCardSection>
      <ImageWrapper>
        <StyledImage src={image} alt={title} />
      </ImageWrapper>
      <TextWrapper>
        <StyledHeadline>{title}</StyledHeadline>
        <StyledSubheadline>{subtitle}</StyledSubheadline>
      </TextWrapper>
    </StyledCardSection>
  );
}


const StyledCardSection = styled.div`
  display: flex;
  align-items: flex-start;
justify-content: center;
  gap: 1rem;
  max-width: 100%;
  height: 100%;
  background-color: var(--rosa);
  padding: 1rem;
  border-radius: 0px 50px 0px 50px;
  overflow: hidden;

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
`;

const StyledImage = styled(Image)`
  width: 105px;
  height: auto;

  @media (min-width: 768px) {
    max-width: 100px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StyledHeadline = styled.p`
  color: var(--orange);
  font: var(--main-headline);
  font-size: 1.2rem;
  margin: 0;
  flex-grow: 1;
  overflow: hidden;

    @media (min-width: 768px) {
    font-size: 1.5rem;
    }
`;

const StyledSubheadline = styled.p`
  font: var(--sub-headline);
  font-size: 0.9rem;
  margin: 0;
  margin-top: 0.5rem;
  flex-grow: 1;
  overflow: hidden;

    @media (min-width: 768px) {
    font-size: 1.2rem;
    }
`;