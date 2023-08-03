import React from 'react'
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from './Navbar.style'
import { useLoginContext } from '../../context/LoginContext'

const Navbar = () => {
  const{user,setUser}=useLoginContext();
  const handleClick = () =>{
    setUser(false)
  }
  return (
    <Nav>
      <Logo to="/"> HOMEPAGE </Logo>
      <Menu>
        <MenuLink to="/" >Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
       
        <MenuLink to="/register">Register</MenuLink>
       <MenuLink onClick={handleClick} to="/login" >{user ? "Logout" : "Login"}</MenuLink> 
        
      </Menu>
    </Nav>

  )
}

export default Navbar