import styled from "styled-components";
import Logo2 from "@/public/Logo2.svg";
import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";
import NavLinks from "./NavLinks";
import { useState } from "react";

export default function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle () {
    setIsMenuOpen(!isMenuOpen);
  }

    function handleLinkClick() {
      setIsMenuOpen(false);
    }

return (
  <>
    <StyledHeader>
      <BarElement />
      <LogoWrapper>
        <StyledLogo />
      </LogoWrapper>

      {isMenuOpen ? (
        <CloseIcon onClick={handleMenuToggle} />
      ) : (
        <MenuIcon onClick={handleMenuToggle} />
      )}
      <NavLinks isMenuOpen={isMenuOpen} handleLinkClick={handleLinkClick} />
    </StyledHeader>

    <HiddenHeadline>Isabell Urban</HiddenHeadline>
  </>
);
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  width: 100vw;
  background-color: #fff;
  top: 0;
  left: 0;
  z-index: 10;

    @media (min-width: 768px) {
    flex-direction: row;
    }
`;

const LogoWrapper = styled.div`
  margin-left: 8px;
`;


const StyledLogo = styled(Logo2)`
  width: 7vh;
  height: auto;
  color: #000;

  &:hover {
    color: var(--yellow);
  }
`;

const BarElement = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10px;
  background-color: var(--yellow);
`;

const HiddenHeadline = styled.h1`
  position: fixed;
  color: #fff;
  visibility: hidden;
`;




