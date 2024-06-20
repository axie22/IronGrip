import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  return (
    <Navbar className="bg-body-tertiary custom-background">
      <Container>
        <Navbar.Brand className="custom-text" href="#home">Iron Grip</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="custom-text">
            Signed in as: <a href="#login" className='custom-text'>Alex Xie</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
