"use client";
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';



const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.tertiaryDark};
  color: ${({ theme }) => theme.colors.primaryLight};
  padding: 2rem;
  text-align: center;

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* Subtle divider line */
  .footer-divider {
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    opacity: 0.2;
    margin: 1rem 0;
  }

  /* Social links container */
  .socials {
    display: flex;
    gap: 1rem;

    a {
      color: ${({ theme }) => theme.colors.primaryLight};
      text-decoration: none;
      font-size: 1.4rem; /* icon size */
      transition: color 0.3s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.lighterBlue};
      }
    }
  }

  .footer-nav {
    display: flex;
    gap: 1.5rem;
    
    a {
      color: ${({ theme }) => theme.colors.primaryLight};
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;

      &:hover {
        color: ${({ theme }) => theme.colors.lighterBlue};
      }
    }
  }

  .copyright {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .footer-content {
      gap: 1rem;
      padding: 0 1rem;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div className="footer-content">
        {/* Social Links */}
        <div className="socials">
          {/* Update these links to your actual socials */}
          <a
            href="https://www.facebook.com/share/1DDB27X8jP/?mibextid=wwXIfr"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/laurinoscape?igsh=OGxmNG1nMjExMmR6"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Divider line */}
      

        {/* Optional site nav links, e.g., Privacy Policy, etc. */}
        <nav className="footer-nav">
          <a href="/about">About Us</a>
          <a href="/menu">Menu</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Another subtle divider if desired */}
        <div className="footer-divider" />

        {/* Copyright */}
        <p className="copyright">
          © {new Date().getFullYear()} Laurino&apos;s Tavern. All rights reserved.
        </p>
      </div>
    </FooterContainer>
  );
}
