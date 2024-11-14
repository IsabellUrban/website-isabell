import styled from "styled-components";
import Link from "next/link";

export default function NavLinks({ isMenuOpen, handleLinkClick }) {
  return (
    <>
      {isMenuOpen && <StyledBackground onClick={handleLinkClick} />}
      <StyledNavLinks $isMenuOpen={isMenuOpen}>
            <StyledLink href="/" onClick={handleLinkClick}>
          Home
        </StyledLink>
        <StyledLink href="/" onClick={handleLinkClick}>
          Portfolio
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
  border-radius: 0 0 40% 40%;
  opacity: 0.9;
  
`;

const StyledNavLinks = styled.nav`
  display: ${({ $isMenuOpen }) => ($isMenuOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  top: 75px;
  right: 67px;
  

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

  &:hover {
    color: #fff;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;

    &:hover {
      color: var(--yellow);
    }
  }
`;
