"use client";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";


const HeaderContainer = styled.header`
  z-index: 9999;
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  color: ${({ theme }) => theme.colors.primaryLight};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .mobile-menu .nav-link:not(:last-child) {
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem; /* some space after the line */
}

  .logo {
    font-size: 1.5rem;
    font-family: 'Aloja'
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  /* We keep the 'Order' link visible on mobile, hide others */
  .desktop-links {
    display: flex;
    gap: 2rem;
  }

  .nav-link {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    transition: background 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.lighterBlue};
    }
  }

  /* The hamburger icon is hidden on desktop */
  .hamburger {
    display: none;
    font-size: 2rem;
    padding: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  /* Dropdown menu for mobile links (initially hidden) */
  .mobile-menu {
    position: absolute;
    top: 70px; /* adjust based on header height */
    right: .15rem;
    background: ${({ theme }) => theme.colors.secondaryDark};
    padding: 1rem;
    border-radius: 4px;
    display: none;
    flex-direction: column;
    gap: 2rem;
    font-size: 1rem;
  }

  /* Visible if "menuOpen" is true */
  .mobile-menu.open {
    display: flex;
  }

  /* Responsive (mobile) adjustments */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .desktop-links {
      display: none; /* hide the extra links on mobile */
    }
    .hamburger {
      display: block; /* show hamburger on mobile */
    }
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <div className="logo">Laurino&apos;s Tavern</div>

      <nav>
        {/* Always visible "Order" link, even on mobile */}
        {/* Desktop-only links */}
        <div className="desktop-links">
          <Link href="/" className="nav-link">
            Home
          </Link>
        </div>

        {/* Hamburger icon (mobile only) */}
        <button type= 'button' className="hamburger" onClick={toggleMenu} aria-label="Menu">
          {menuOpen ? "\u2715" : "\u2630"}
          {/* \u2630 = hamburger icon, \u2715 = "X" close icon */}
        </button>

        {/* Mobile dropdown menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <Link href="/" className="nav-link" onClick={toggleMenu}>
            Home
          </Link>
        </div>
      </nav>
    </HeaderContainer>
  );
}
