import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import redbackLogo from './images/redback-logo.png'; // Adjust the path as necessary

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    text-decoration: underline;
  }
`;


const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px; // Adjust the size as necessary
  height: 40px; // Adjust the size as necessary
  margin-right: 0.5rem;
  border-radius: 120px;
`;

const Header = () => (
  <Nav>
    <LogoContainer>
      <Logo src={redbackLogo} alt="Redback Logo" />
      <NavLink to="/">
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Athlete Insight Hub
        </span>
      </NavLink>
    </LogoContainer>
    <NavLinkContainer>
      <NavLink to="/profile">My Profile</NavLink>
      <NavLink to="/team">My Team</NavLink>
      <NavLink to="/stats">My Stats</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/PiCam">PiCam</NavLink>
    </NavLinkContainer>
  </Nav>
);

export default Header;