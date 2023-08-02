import React from 'react'
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from './Navbar.style'
import { menuIcon } from '../../helper/iconData'

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/"> HOMEPAGE </Logo>
      <Menu>
        <MenuLink to="/" >Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        {/* <MenuLink to="/login">Logout</MenuLink> */}
        <MenuLink to="/">Register</MenuLink>
        <MenuLink to="/login" >LogIn</MenuLink>
      </Menu>
    </Nav>

  )
}

export default Navbar