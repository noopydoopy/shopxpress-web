import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from '../../logo.svg';
import { PublicRoutes } from "../../constants/ApplicationRoutes";

const TopNavBar: React.FC = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <Navbar collapseOnSelect className="navbar-pastel-orange"  expand="sm">
                <Container>
                    <Navbar.Brand role="button" onClick={() => navigate('/')} className="text-white">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        ShopXPress
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end text-white" >
                        {
                            isAuthenticated ? <NavDropdown title="Login as XXX" id="basic-nav-dropdown">
                                {/* <NavDropdown.Divider /> */}
                                <NavDropdown.Item onClick={() => { logout() }}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown> :
                                <Nav>
                                    <Nav.Link onClick={() => navigate(PublicRoutes.LOGIN)}>Login</Nav.Link>
                                </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default TopNavBar;