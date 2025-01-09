import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";


export default function CardSection({image, title, subtitle, href}) {
  return (
    <StyledLink href={href}>
    <StyledCardSection>
      <CardContentContainer>
        <ImageWrapper>
          <StyledImage
            src={image}
            alt={title}
            fill={true}
            sizes="100px"
          />
        </ImageWrapper>
        <TextWrapper>
          <StyledHeadline>{title}</StyledHeadline>
          <StyledSubheadline>{subtitle}</StyledSubheadline>
        </TextWrapper>
      </CardContentContainer>
    </StyledCardSection>
    </StyledLink>
  );
}


const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StyledCardSection = styled.article`
  display: flex;
  height: 100%;
  background-color: var(--rosa);
  padding: 1rem;
  border-radius: 0px 50px 0px 50px;

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

const CardContentContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 1rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  align-self: center;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
`;


const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 0 0 50% ;

  @media (min-width: 768px) {
    max-width: 100px;
  }
`;

const TextWrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StyledHeadline = styled.h2`
  color: #000;
  font: var(--main-headline);
  font-size: 1.2rem;
  margin: 0;
  flex-grow: 1;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
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
    font-size: 1rem;
    }
`;