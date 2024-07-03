import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navigation() {
    return (
        <>
            <Navbar bg="light" variant="light" className='custom-nav-color'>
                <Container>
                    <Navbar.Brand className="nav-brand" href="/">Iron Grip</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/workout" className="nav-title" activeClassName="active-nav-title">
                            Record Workout
                        </Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Weekly Workout Time: 10 hours
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
