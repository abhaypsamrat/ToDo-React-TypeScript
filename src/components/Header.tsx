import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';


interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar fixed="top" bg="success" variant="dark">
    <Container>
        <Navbar.Brand>
            ToDo 
        </Navbar.Brand>
    </Container>
</Navbar>
  );
};

export default Header;
