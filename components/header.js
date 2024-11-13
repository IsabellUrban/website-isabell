import styled from "styled-components";
import Logo from "@/public/Logo.svg";
import Menu from "@/public/Menu.svg";	
import Link from "next/link";
import { useState } from "react";

export default function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle () {
    setIsMenuOpen(!isMenuOpen);
  }

return (
<>
<StyledHeader>
<BarElement />
<LogoWrapper>
<StyledLogo />
</LogoWrapper>

<StyledMenu onClick={handleMenuToggle}  isOpen={isMenuOpen}/>
{isMenuOpen && (
          <>
            <StyledBackground />
            <NavLinks>
              <StyledLink href="/">Home</StyledLink>
              <StyledLink href="/">Portfolio</StyledLink>
            </NavLinks>
          </>
        )}



<HiddenHeadline>Isabell Urban</HiddenHeadline>
 </StyledHeader>
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
`;

const LogoWrapper = styled.div`
  margin-left: 10px;
`;

const StyledMenu = styled(Menu)`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  z-index: 30;

  @media (max-width: 768px) {
    display: flex;
    margin-right: 20px;
  }
`;

const NavLinks = styled.nav`
   display: flex;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  top: 70px;
  right: 20px;
  z-index: 20;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  &:hover {
    color: #F2B2AC;
  }
`;

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #e5af33;
  opacity: 0.9;
  z-index: 15;
`;

const StyledLogo = styled(Logo)`
  min-width: 50px;
  height: auto;
`;

const BarElement = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 10px;
background-color: #e5af33;
`;

const HiddenHeadline = styled.h1`
  position: fixed;
  color: #fff;
  visibility: hidden;
`;




