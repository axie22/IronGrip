import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
    return (
        <>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
            <Navbar.Brand href="/">Workout App</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/Workout">WorkoutInput</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
    /*
    return <nav className="nav">
        <a href="/" className="site-title">Workout App</a>
        <ul>
            <li>
                <a href="/Workout">WorkoutInput</a>
            </li>
        </ul>
    </nav>
    */
}