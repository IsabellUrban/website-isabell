import styled from "styled-components";
import Image from "next/image";
import Profilbild from "@/public/image/Profilbild.jpg";

export default function HomePage() {
  return (
    <StyledMain>
      <ImageContainer>
        <StyledImage src={Profilbild} alt="Profilbild" />
      </ImageContainer>
      <h1>Hi I&apos;m Isabell</h1>
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
  position: static;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1.2rem;
  align-items: center;
  justify-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  grid-row: 1/3;
  grid-column: 2/4;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;