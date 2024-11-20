import styled from "styled-components";
import Image from "next/image";
import Profilbild02 from "@/public/image/Profilbild02.jpg";
import hintergrund01 from "@/public/image/hintergrund01.jpg";

export default function HomePage() {
  return (
    <Layout>
      <BackgroundWrapper>
        <StyledBackground src={hintergrund01} alt="Background" />
      </BackgroundWrapper>
      <StyledMain>
        <ImageContainer>
          <StyledImage src={Profilbild02} alt="Profilbild" />
          <StyledSection>
            <TextWrapper>
              <StyledHeadline>Hi I&apos;m Isabell. </StyledHeadline>
              <StyledSubheadline>
                Frontend Web Developer and Graphic Designer with a passion for
                creating beautiful and functional designs.
              </StyledSubheadline>
            </TextWrapper>
          </StyledSection>
        </ImageContainer>
      </StyledMain>
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;`

const StyledBackground = styled(Image)`
  visibility: hidden;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    visibility: visible;
    object-fit: cover;
    opacity: 0.25;
    z-index: 1;
  }
`;

const StyledMain = styled.main`
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 92vw;
  margin-top: 7rem;
  margin-bottom: 7rem;
  position: relative;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  z-index: 2;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;



const ImageContainer = styled.div`
  grid-column: 1 / span 4;
  position: relative;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    grid-column: 3 / span 3;
    grid-row: 2 / span 2;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 0px 50px 0px 50px;
  width: 100%;
  height: auto;
`;


const StyledSection = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(20%, 69%);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.8);
  padding: 1.5rem;
  border-radius: 50px 0px 50px 0px;
  max-width: 85%;
  box-sizing: border-box;
  overflow: hidden;
  flex-grow: 1;

  @media (min-width: 768px) {
    transform: translate(20%, 42%);
    max-width: 500px;
    width: 100%;
    overflow: hidden;
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