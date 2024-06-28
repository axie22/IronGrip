import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

export default function Navigation() {
    return (
        <>
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/">Iron Grip</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link className="nav-title" href="/Workout">Record Workout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}