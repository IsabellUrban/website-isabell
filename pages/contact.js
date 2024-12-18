import styled from "styled-components";
import { GridMain, GridItem } from "@/styles/grid";
import { motion } from "motion/react";
import Mail from "@/public/icons/Mail.svg";
import Linkedin from "@/public/icons/Linkedin.svg";

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
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ContentWrapper>
              <ImageWrapper>
                <Mail alt="Mail Icon" width={20} height={20} />
              </ImageWrapper>
              <TextWrapper>
                <StyledText href="mailto:mail@isabellurban.com">
                  {" "}
                  mail@isabellurban.com
                </StyledText>
              </TextWrapper>
            </ContentWrapper>

            <ContentWrapper>
              <ImageWrapper>
                <Linkedin alt="Mail Icon" width={20} height={20} />
              </ImageWrapper>
              <TextWrapper>
                <StyledText href="https://www.linkedin.com/in/isabell-urban/">
                  {" "}
                  linkedin.com/in/isabell-urban
                </StyledText>
              </TextWrapper>
            </ContentWrapper>
          </motion.div>
        </GridItem>
      </GridMain>
    );
}

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 10px;
  background-color: var(--white);

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const TextWrapperHeadline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 1rem 0rem;
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





const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;

  @media (min-width: 768px) {
    max-width: 800px;
    justify-content: center;
    padding: 1.5rem;
  }
`;

const StyledText = styled.a`
  font: var(--sub-headline);
  color: var(--black);
  text-decoration: none;
  text-align: center;

  :hover {
    color: var(--yellow);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

