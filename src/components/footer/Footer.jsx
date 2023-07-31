import React from 'react'
import { useThemeContext } from '../../context/ThemeContext'
import { darkIcon, lightIcon } from '../../helper/iconData'
import { FooterButton, FooterContainer } from './Footer.style'
const Footer = () => {
  const {myTheme, setMyTheme} = useThemeContext()

  const handleClick = () =>{
    if(myTheme==="light"){
      setMyTheme("dark")
    }else{
      setMyTheme("light")
    }
  }


  return (
    <FooterContainer>
      <FooterButton onClick={handleClick}>
        {myTheme==="light" ? lightIcon : darkIcon}
      </FooterButton>
    </FooterContainer>

  )
}

export default Footer