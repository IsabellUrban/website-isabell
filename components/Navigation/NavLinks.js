import styled from "styled-components";
import Link from "next/link";

export default function NavLinks({ isMenuOpen, handleLinkClick }) {
  return (
    <>
      <StyledBackground $isMenuOpen={isMenuOpen} onClick={handleLinkClick} />

      <StyledNavLinks $isMenuOpen={isMenuOpen}>
        <StyledLink href="/" onClick={handleLinkClick}>
          HOME
        </StyledLink>
        <StyledLink href="/graphic" onClick={handleLinkClick}>
          GRAPHIC DESIGN
        </StyledLink>
        <StyledLink href="/development" onClick={handleLinkClick}>
          WEB DEVELOPMENT
        </StyledLink>
        <StyledLink href="/contact" onClick={handleLinkClick}>
          CONTACT
        </StyledLink>
      </StyledNavLinks>
    </>
  );
}

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 250px;
  background-color: var(--yellow);
  border-radius: 0 0 50% 50%;
  opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? 0.95 : 0)};
  transform: ${({ $isMenuOpen }) =>
    $isMenuOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 0.3s ease, opacity 0.5s ease;
`;

const StyledNavLinks = styled.nav`
  display: ${({ $isMenuOpen }) => ($isMenuOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  top: 75px;
  right: 23px;
  

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    gap: 2rem;
    right: 10px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  text-align: center;
  font-size: 0.9rem;

  &:hover {
    color: #fff;
  }

  @media (min-width: 768px) {
    font-size: 1rem;

    &:hover {
      color: var(--yellow);
    }
  }
`;
