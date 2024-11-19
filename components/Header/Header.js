import styled from "styled-components";
import Logo2 from "@/public/Logo2.svg";
import MenuIcon from "../Navigation/MenuIcon.js";
import CloseIcon from "../Navigation/CloseIcon.js";
import NavLinks from "../Navigation/NavLinks.js";
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
  padding: 0px 25px;
  position: fixed;
  width: 100%;
  height: 10vh;
  background-color: #fff;
  top: 0;
  left: 0;
  z-index: 10;

  @media (min-width: 768px) {
    flex-direction: row;
    top: 10px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
`;


const StyledLogo = styled(Logo2)`
  width: 7vh;
  height: auto;
  color: #000;

  &:hover {
    color: var(--yellow);
  }

  @media (min-width: 768px) {
    width: 7.5vh;
    height: auto;
  }
`;

const BarElement = styled.div`
  position: fixed;
  top: 10vh;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: var(--yellow);

  @media (min-width: 768px) {
    top: 0;
    left: 0;
  }
`;

const HiddenHeadline = styled.h1`
  position: fixed;
  color: #fff;
  visibility: hidden;
`;




