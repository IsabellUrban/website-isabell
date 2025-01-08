import styled from "styled-components";
import { GridMain, GridItem } from "@/styles/grid";
import { motion } from "motion/react";
import WebCardSection from "@/components/WebCardSection/WebCardSection";
import { webProjects } from "@/lib/data-web";

export default function WebDevelopmentPortfolio() {
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
            <StyledHeadline>Web Development Portfolio</StyledHeadline>
            <StyledSubheadline>
              Take a look at some of the web development projects I have worked
              on, which show my skills and experience.
            </StyledSubheadline>
          </TextWrapper>
        </motion.div>
      </GridItem>
      <GridItem
        $colSpan="1 / span 4"
        $colSpanMd="2 / span 8"
        $rowSpan="auto"
        $rowSpanMd="auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <WebCardSection webProjects={webProjects}></WebCardSection>
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
