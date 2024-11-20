import styled from "styled-components";
import Image from "next/image";
import { GridMain, GridItem } from "@/styles/grid";
import HeroSection from "@/components/HeroSection/HeroSection";
import CardSection from "@/components/CardSection/CardSection";
import Profilbild02 from "@/public/image/Profilbild02.jpg";
import hintergrund01 from "@/public/image/hintergrund01.jpg";
import grafik from "@/public/image/grafik.png";
import web from "@/public/image/web.png";

export default function HomePage() {
  return (
    <Layout>
      <BackgroundWrapper>
        <StyledBackground src={hintergrund01} alt="Background" />
      </BackgroundWrapper>
      <GridMain>
        <GridItem
          $colSpan="1 / span 4"
          $colSpanMd="2 / span 4"
          $rowSpan="1"
          $rowSpanMd="1 / span 2"
        >
          <HeroSection
            image={Profilbild02}
            title="Hi I'm Isabell."
            subtitle="Frontend Web Developer and Graphic Designer with a passion for creating beautiful and functional designs."
          />
        </GridItem>
        <GridItem
          $colSpan="1 / span 4"
          $colSpanMd="1 / span 3"
          $rowSpan="4"
          $rowSpanMd="7 / span 2"
        >
          <CardSection
            image={grafik}
            title="Graphic Design"
            subtitle="Dive into my graphic design portfolio to uncover creative projects!"
          />
        </GridItem>
        <GridItem
          $colSpan="1 / span 4"
          $colSpanMd="5 / span 3"
          $rowSpan="5"
          $rowSpanMd="7 / span 2"
        >
          <CardSection
            image={web}
            title="Web Development"
            subtitle="Check out my portfolio to see examples of my web development work and coding skills."
          />
        </GridItem>
      </GridMain>
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

