import styled from "styled-components";
import Logo2 from "@/public/Logo2.svg";	
import Link from "next/link";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <StyledLogo />
        <StyledFooterText>© 2024 Isabell Urban</StyledFooterText>
        <StyledLink href="/imprint">Imprint</StyledLink>
        <StyledLink href="/privacypolicy">Privacy Policy</StyledLink>
      </FooterContent>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: var(--yellow);
  padding: 1rem;
  text-align: center;
  height: 8vh;
  width: 100%;
  margin-top: auto;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    `;

const StyledLogo = styled(Logo2)`
  width: 5vh;
  height: auto;
  color: var(--black);


  @media (min-width: 768px) {
    width: 7vh;
    height: auto;
  }
`;

const StyledFooterText = styled.p`
  font: var(--sub-headline);
  font-size: 0.75rem;
  margin: 0;
  flex-grow: 1;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledLink = styled(Link)`
  font: var(--text);
  font-size: 0.75rem;
    color: var(--black);
    text-decoration: none;
    transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
    color: var(--white);
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

