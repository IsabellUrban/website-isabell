import styled from "styled-components";
import Logo from "@/public/Logo.svg";
import Menu from "@/public/Menu.svg";	
import X from "@/public/X.svg";
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

{isMenuOpen ? (
      <CloseIcon onClick={handleMenuToggle} />
    ) : (
      <StyledMenu onClick={handleMenuToggle} />
    )}
  </StyledHeader>

  {isMenuOpen && (
    <>
      <StyledBackground />
      <NavLinks onClick={handleMenuToggle}>
        <StyledLink href="/">Home</StyledLink>
        <StyledLink href="/">Portfolio</StyledLink>
      </NavLinks>
    </>
  )}

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
  
`;

const LogoWrapper = styled.div`
  margin-left: 10px;
`;

const StyledMenu = styled(Menu)`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  width: 25px;


  @media (max-width: 768px) {
    display: flex;
    margin-right: 20px;
  }
`;

const CloseIcon = styled(X)`
display: none;
cursor: pointer;
flex-direction: column;
gap: 5px;
color: red;
width: 25px;
z-index: 50;

@media (max-width: 768px) {
    display: flex;
    margin-right: 20px;
  }
`;

const NavLinks = styled.nav`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 250px;
  z-index: 20;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  text-align: center;

  &:hover {
    color: #fff;
  }
`;

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 250px;
  background-color: #e5af33;
  border-radius: 0 0 40% 40%;
  /* opacity: 0.9; */
  z-index: 15;
  cursor: pointer;
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




