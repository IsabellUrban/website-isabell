import styled from "styled-components";

export default function TextSection({ title, subheadline, text }) {
  return (
    <StyledTextSection>
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
  flex-direction: column;
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
`;

const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 1.5rem;
`;

const StyledHeadline = styled.h2`
    font: var(--main-headline);
    color: var(--schwarz);
    font-size: 1.5rem;
`;

const StyledSubheadline = styled.h3`
    font: var(--sub-headline);
    color: var(--schwarz);
    text-align: center;
`;

const StyledText = styled.p`
  font: var(--);
  color: var(--schwarz);
  white-space: pre-wrap;
`;