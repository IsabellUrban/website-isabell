import styled from "styled-components";
import Logo2 from "@/public/logo/Logo2.svg";
import MenuIcon from "../Navigation/MenuIcon.js";
import CloseIcon from "../Navigation/CloseIcon.js";
import NavLinks from "../Navigation/NavLinks.js";
import Link from "next/link";
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
        <StyledLink href="/">
          <StyledLogo />
        </StyledLink>
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
  height: 12vh;
  background-color: #fff;
  top: 8px;
  left: 0;
  z-index: 10;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const LogoWrapper = styled.div`
  display: flex;
`;


const StyledLogo = styled(Logo2)`
  width: 8vh;
  height: auto;
  color: #000;

  &:hover {
    transform: scale(1.02);
    color: var(--yellow);
  }

  @media (min-width: 768px) {
    width: 9vh;
    height: auto;
  }
`;

const BarElement = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: var(--yellow);
`;

const HiddenHeadline = styled.h1`
  position: fixed;
  color: #fff;
  visibility: hidden;
`;




