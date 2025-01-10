import styled from "styled-components";
import { GridMain, GridItem } from "@/styles/grid";
import { motion } from "motion/react";

export default function Imprint() {
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
              <StyledHeadline>Imprint</StyledHeadline>
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
              <TextWrapper>
                <StyledSubheadline>Isabell Urban</StyledSubheadline>
                <StyledText>
                  Kopenhagener Straße 48, <br />
                  10437 Berlin <br />
                  Germany <br />
                </StyledText>
                <StyledSubheadline>Contact</StyledSubheadline>
                <StyledText>E-Mail: mail@isabellurban.com</StyledText>
                <StyledSubheadline>
                  EU Online Dispute Resolution
                </StyledSubheadline>
                <StyledText>
                  The European Commission provides a platform for online dispute
                  resolution (ODR): https://ec.europa.eu/consumers/odr/. Our
                  email address can be found above in the imprint.
                </StyledText>
                <StyledSubheadline>
                  Consumer Dispute Resolution/Universal Arbitration Body
                </StyledSubheadline>
                <StyledText>
                  We are not willing or obliged to participate in dispute
                  resolution proceedings before a consumer arbitration body.
                </StyledText>
                <StyledSubheadline>
                  Disclaimer: Liability for Content
                </StyledSubheadline>
                <StyledText>
                  The content on my website has been created with the utmost
                  care. However, I cannot guarantee the accuracy, completeness,
                  or timeliness of the information provided. I am responsible
                  for my own content on these pages in accordance with § 7 (1)
                  TMG (German Telemedia Act) and other applicable laws. Pursuant
                  to §§ 8 to 10 TMG, I am not obligated to monitor third-party
                  information that has been transmitted or stored, nor to
                  investigate any circumstances that indicate illegal activity.
                  My obligations to remove or block the use of information under
                  general law remain unaffected by this. Liability for such
                  content can only arise once I have knowledge of a specific
                  infringement. If I become aware of any such violations, I will
                  promptly remove the content in question.
                </StyledText>
              </TextWrapper>
            </ContentWrapper>
          </motion.div>
        </GridItem>
      </GridMain>
    );
  };



  const TextWrapperHeadline = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rem;

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

  const StyledSubheadline = styled.h3`
    font: var(--text);
    font-weight: 700;
    margin: 0;
    margin-top: 0.75rem;
    flex-grow: 1;
    overflow: hidden;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  `;

    const StyledText = styled.p`
      font: var(--text);

      @media (min-width: 768px) {
        font-size: 0.9rem;
      }
    `;

  const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 10px;
    color: var(--black);
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;

    @media (min-width: 768px) {
      border-radius: 0 0 20px 0;
      padding: 0 0 0 30px;
      gap: 10px;
    }
  `;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;

  @media (min-width: 768px) {
    max-width: 800px;
    padding: 1.5rem;
  }
`;


