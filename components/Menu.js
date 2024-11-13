import styled from "styled-components";
import { bubble as Menu } from "react-burger-menu";
import Link from "next/link";

export default function BurgerMenu ({ isMenuOpen, handleStateChange }) {


  return (
    <StyledMenu
      right
      isOpen={isMenuOpen}
      onStateChange={handleStateChange}
    >
      <MenuItem href="/">Home</MenuItem>
      <MenuItem href="/about">About</MenuItem>
      <MenuItem href="/web">Web Development</MenuItem>
      <MenuItem href="/graphic">Graphic Design</MenuItem>
    </StyledMenu>
  );
}

const StyledMenu = styled(Menu)`
     /* Menu Button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;
  }

  .bm-burger-bars {
    background: #373737;
    height: 3px;
  }

  /* Menu Wrapper */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
  }

  /* Menu */
  .bm-menu {
    background: #F2B2AC;
    padding: 2.5em 1.5em 0;
  }

  /* Menu Items List */
  .bm-item-list {
    padding: 0.8em;
  }

  /* Individual Menu Items */
  .bm-item {
    display: inline-block;
    text-decoration: none;
    margin-bottom: 10px;
    color: #fff;
    transition: color 0.2s;
  }

  /* Overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
  }

  /* Cross Button */
  .bm-cross {
    background: #fff;
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
    right: 36px;
  }

  `;

const MenuItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2em;
  display: block;
  padding: 1em;
  
  &:hover {
    color: #f2b2ac;
  }
`;