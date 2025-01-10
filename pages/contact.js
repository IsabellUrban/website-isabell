import styled from "styled-components";
import { GridMain, GridItem } from "@/styles/grid";
import { motion } from "motion/react";
import Mail from "@/public/icons/Mail.svg";
import Linkedin from "@/public/icons/Linkedin.svg";
import Github from "@/public/icons/Github.svg";

export default function Contact() {
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
            <TextWrapperHeadline>
              <StyledHeadline>Contact</StyledHeadline>
              <StyledSubheadline>
                Hi! If you&apos;re interested in working with me, please
                don&apos;t hesitate to get in touch.
              </StyledSubheadline>
            </TextWrapperHeadline>
          </motion.div>
        </GridItem>
        <GridItem
          $colSpan="1 / span 4"
          $colSpanMd="3 / span 6"
          $rowSpan="2"
          $rowSpanMd="2"
          css={`
            margin-top: -12rem;
          `}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContentWrapper>
              <ImageWrapper>
                <Mail alt="Mail Icon" width="100%" height="100%" />
              </ImageWrapper>
              <TextWrapper>
                <StyledText href="mailto:mail@isabellurban.com">
                  mail@isabellurban.com
                </StyledText>
              </TextWrapper>
            </ContentWrapper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContentWrapper>
              <ImageWrapper>
                <Linkedin alt="Linkedin Icon" width="100%" height="100%" />
              </ImageWrapper>
              <TextWrapper>
                <StyledText href="https://www.linkedin.com/in/isabell-urban/">
                  LinkedIn
                </StyledText>
              </TextWrapper>
            </ContentWrapper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <ContentWrapper>
              <ImageWrapper>
                <Github alt="Github Icon" width="100%" height="100%" />
              </ImageWrapper>
              <TextWrapper>
                <StyledText href="https://github.com/IsabellUrban">
                  GitHub
                </StyledText>
              </TextWrapper>
            </ContentWrapper>
          </motion.div>
        </GridItem>
      </GridMain>
    );
}


const TextWrapperHeadline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    padding: 1rem 0rem;
    margin-bottom: 2rem;
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

const StyledText = styled.a`
  font: var(--text);
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContentWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  background-color: var(--yellow);
  border-radius: 0 0 10px 0;
  color: var(--black);
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--black);
    color: var(--yellow);

    ${StyledText} {
      color: var(--yellow);
    }
  }
  @media (min-width: 768px) {
    border-radius: 0 0 20px 0;
    padding: 0 0 0 30px;
    gap: 10px;
  }
`;



const ImageWrapper = styled.div`
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 20px;
  height: 20px;

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;

  @media (min-width: 768px) {
    max-width: 800px;
    padding: 1.5rem;
  }
`;



