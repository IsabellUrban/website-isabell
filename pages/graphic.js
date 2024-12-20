import styled from "styled-components";
import { GridMain, GridItem } from "@/styles/grid";
import EmblaCarousel from "@/components/ImageCarousel/ImageCarousel";
import {projects} from "@/lib/data-images";
import { motion } from "motion/react";

export default function GraphicPortfolio() {
    return (
      <GridMain>
        <GridItem
          $colSpan="1 / span 4"
          $colSpanMd="2 / span 8"
          $rowSpan="1"
          $rowSpanMd="1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TextWrapper>
              <StyledHeadline>Graphic Design Portfolio</StyledHeadline>
              <StyledSubheadline>
                Here&apos;s a glimpse of my diverse graphic design work,
                showcased across various projects.
              </StyledSubheadline>
            </TextWrapper>
          </motion.div>
        </GridItem>
        <GridItem
          $colSpan="1 / span 4"
          $colSpanMd="2 / span 8"
          $rowSpan="2"
          $rowSpanMd="2 / span 2"
        > <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
          <EmblaCarousel projects={projects}></EmblaCarousel>
        </motion.div>
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
  text-align: center;
  margin: 0;
  flex-grow: 1;
  overflow: hidden;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledSubheadline = styled.p`
  font: var(--sub-headline);
  text-align: center;
  margin: 0;
  margin-top: 0.5rem;
  flex-grow: 1;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

