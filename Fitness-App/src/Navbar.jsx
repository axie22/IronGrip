import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './assets/Navbar.css';
import profile_icon from './assets/UserProfile.jpg';

export default function Navigation() {
    return (
        <>
            <Navbar bg="light" variant="light" className='custom-nav-color'>
                <Container>
                    <Navbar.Brand className="nav-brand" href="/">Iron Grip</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/workout" className="nav-title">
                            Record Workout
                        </Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="me-3">
                            Weekly Workout Time: 10 hours
                        </Navbar.Text>
                        <Nav>
                            <Nav.Link as={NavLink} to="/user-profile">
                                <Image 
                                    src={profile_icon} 
                                    alt="User Profile Image" 
                                    style={{ borderRadius: "50%", height: "40px", width: "40px" }}
                                />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
