import React from 'react';
import logo from '../../assets/tabaslogo.png'
import {Container, InsideContainer, ImageLogo} from './styles'

const Header = () => {
    return (
        <Container>
            <InsideContainer>
                <ImageLogo src={logo} />
            </InsideContainer>
        </Container>
    )
}

export default Header;