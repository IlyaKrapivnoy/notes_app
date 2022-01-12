import React from 'react';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';

const Header: React.FunctionComponent = () => {
    return (
        <Navbar fixed='top' bg='dark' variant='dark'>
            <Container>
                <NavbarBrand>TypeScript Practice</NavbarBrand>
            </Container>
        </Navbar>
    );
};

export default Header;
