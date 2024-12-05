import styled from "styled-components";
import Image from "next/image";
import { GridMain, GridItem } from "@/styles/grid";
import EmblaCarousel from "@/components/ImageCarousel/ImageCarousel";
import {images} from "@/lib/data-images";

export default function GraphicPortfolio() {
    return (
      <GridMain>
        <GridItem
          $colSpan="1 / span 4"
          $colSpanMd="2 / span 8"
          $rowSpan="1"
          $rowSpanMd="1"
        >
          <TextWrapper>
            <StyledHeadline>Graphic Design Portfolio</StyledHeadline>
            <StyledSubheadline>
              Here&apos;s a glimpse of my diverse graphic design work, showcased
              across various projects.
            </StyledSubheadline>
          </TextWrapper>
        </GridItem>
        <GridItem
          $colSpan="1 / span 4"
          $colSpanMd="2 / span 8"
          $rowSpan="2"
          $rowSpanMd="2 / span 2"
        >
          <EmblaCarousel images={images}></EmblaCarousel>
        </GridItem>
      </GridMain>
    );

}

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

    @media (min-width: 768px) {
    padding: 1rem 0 1rem 0rem;
    }
`;

const StyledHeadline = styled.h2`
  color: var(--yellow);
  font: var(--main-headline);
  margin: 0;
  flex-grow: 1;
  overflow: hidden;
  text-transform: uppercase;
`;

const StyledSubheadline = styled.p`
  font: var(--sub-headline);
  margin: 0;
  margin-top: 0.5rem;
  flex-grow: 1;
  overflow: hidden;

    @media (min-width: 768px) {
  text-align: center;
    }
`;

