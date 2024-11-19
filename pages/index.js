import styled from "styled-components";
import Image from "next/image";
import Profilbild02 from "@/public/image/Profilbild02.jpg";

export default function HomePage() {
  return (
    <StyledMain>
      <ImageContainer>
        <StyledImage src={Profilbild02} alt="Profilbild" />
        <HeadlineWrapper>
          <StyledBar />
          <div>
            <StyledHeadline>Hi I&apos;m Isabell. </StyledHeadline>
            <StyledSubheadline>
              Frontend Web Developer and Graphic Designer with a passion for
              creating beautiful and functional designs.
            </StyledSubheadline>
          </div>
        </HeadlineWrapper>
      </ImageContainer>
    </StyledMain>
  );
}


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
`;

const ImageContainer = styled.div`
  grid-column: 1 / span 4;
  position: relative;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  border-radius: 0px 50px 0px 50px;
  width: 100%;
  height: auto;
`;


const HeadlineWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(20%, 69%);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 50px 0px 50px 0px;
`;

const StyledBar = styled.div`
  width: 5px;
  height: 100%;
  background-color: var(--yellow);
  margin-right: 1rem;
`;

const StyledHeadline = styled.h2`
  color: #000;
  font: var(--main-headline);
  margin: 0;

  @media (min-width: 768px) {
  }
`;


const StyledSubheadline = styled.p`
  font: var(--sub-headline);
  margin: 0;
  margin-top: 0.5rem;
`;