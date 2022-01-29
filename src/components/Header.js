import React from "react"
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu"

const Header = () => {
    return <Container>
        <a href="">
            <img src="/images/logo.svg" alt=""/>
        </a>
        <Menu>
            <a href="#section1" id="asection1">Model 3</a>
            <a href="#section2" id="asection2">Model Y</a>
            <a href="#section3">Model S</a>
            <a href="#section4">Model X</a>

        </Menu>
        <RigthMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
           <CustomMenu/>
        </RigthMenu>
    </Container>
}

const Container = styled.div`
  width: 100vw;
  min-height: 60px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`

const Menu = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
  @media (max-width: 1024px){
    display: none;
  }
`

const RigthMenu = styled.div`
  display: flex;
  margin: 0 10px;
  justify-content: space-between;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
export default Header