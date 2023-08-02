// Navbar Style
import styled from "styled-components";
import Flex from "../../styles/Flex";
import { NavLink } from "react-router-dom";

export const Nav = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
  justify-content: space-between;
`;

export const Logo = styled(NavLink)`
  margin-left:2rem;
  padding: 1rem 0;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.logoColor};
  transition: color 0.8s;
  :hover {
    color: ${({ theme }) => theme.colors.linkHoverColor};
  }
`;

export const Menu = styled(Flex)`
    margin-right:2rem;
`;

export const MenuLink = styled(NavLink)`
  text-align: center;
  padding: 1rem 1rem;
  cursor: pointer;
  text-decoration:none;
  color: ${({ theme }) => theme.colors.linkColor};
  :hover {
    color: ${({ theme }) => theme.colors.linkHoverColor};
  }
`;
