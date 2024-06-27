import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
    return (
        <>
        <Navbar bg="secondary" variant="dark">
            <Container>
            <Navbar.Brand href="/">Iron Grip</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/Workout">Record Workout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}