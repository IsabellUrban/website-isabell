import styled from "styled-components";
import Image from "next/image";

export default function TextSection({ title, subheadline, text, image }) {
  return (
    <StyledTextSection>
      <ImageWrapper>
        <StyledImage src={image} alt={title} fill={true} sizes="100px" />
      </ImageWrapper>
      <TextWrapper>
        <HeadlineWrapper>
          <StyledHeadline>{title}</StyledHeadline>
          <StyledSubheadline>{subheadline}</StyledSubheadline>
        </HeadlineWrapper>
        <StyledText>{text}</StyledText>
      </TextWrapper>
    </StyledTextSection>
  );
}

const StyledTextSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: var(--yellow);
  padding: 1.5rem;
  overflow: hidden;
  gap: 1rem;

  @media (min-width: 768px) {
    width: 100%;
    max-width: none;
  }
`;

const ImageWrapper = styled.div`
  visibility: hidden;

  @media (min-width: 768px) {
    position: relative;
    align-self: center;
    width: 350px;
    height: 350px;
    visibility: visible;
  }
`;

const StyledImage = styled(Image)`
  visibility: hidden;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    object-fit: cover;
    visibility: visible;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  padding: 0.9rem;

    @media (min-width: 768px) {
        max-width: 800px;
        justify-content: center;
        padding: 1.5rem;
    }
`;

const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  padding-bottom: 1.5rem;
`;

const StyledHeadline = styled.h2`
    font: var(--main-headline);
    color: var(--white);
    font-size: 1.5rem;
    text-transform: uppercase;
`;

const StyledSubheadline = styled.h3`
    font: var(--sub-headline);
    color: var(--white);
    text-align: center;
`;

const StyledText = styled.p`
  font: var(--text);
  color: var(--white);
  white-space: pre-wrap;
`;