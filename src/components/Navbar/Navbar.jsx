import React from 'react'
import { Container,Wrapper,LogoContainer,LogoText,ThemeContainer,ThemeMode } from './NavbarElement'
import {BsFillSunFill,BsFillMoonStarsFill} from 'react-icons/bs'

const Navbar = ({themeToggle,theme}) => {
  return (
    <Container>
        <Wrapper>
            <LogoContainer>
                <LogoText>Where in the world?</LogoText>
            </LogoContainer>
            <ThemeContainer onClick={themeToggle}>
            {theme === 'light' ? (<BsFillMoonStarsFill/>):(<BsFillSunFill/>)}
                <ThemeMode>{theme === 'light' ? ('Dark Mode'):('Light Mode')}</ThemeMode>
            </ThemeContainer>
        </Wrapper>
    </Container>
  )
}

export default Navbar