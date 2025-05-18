import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

function Header({ auth: { isAuthenticated, loading, user }, logout }) {
    const authLinks = (
        <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/dashboard" className="nav-link-custom">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/posts" className="nav-link-custom">Posts</Nav.Link>
            <Nav.Link as={Link} to="/topics" className="nav-link-custom">Topics</Nav.Link>
            <Nav.Link as={Link} to="/profile" className="nav-link-custom">Profile</Nav.Link>
            <Nav.Link onClick={logout} href="#" className="nav-link-custom">
                Logout
            </Nav.Link>
        </Nav>
    );

    const guestLinks = (
        <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/login" className="nav-link-custom">Login</Nav.Link>
            <Nav.Link as={Link} to="/register" className="nav-link-custom">Register</Nav.Link>
        </Nav>
    );

    // Dynamic brand link
    const brandLink = !loading && isAuthenticated ? "/dashboard" : "/";

    return (
        <Navbar 
            bg="primary" 
            variant="dark" 
            expand="lg" 
            className="py-3"
            style={{
                background: "linear-gradient(135deg, #ff9800 0%, #ff5722 100%)",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                borderBottomLeftRadius: '18px',
                borderBottomRightRadius: '18px',
                minHeight: '70px'
            }}
        >
            <Container>
                <Navbar.Brand as={Link} to={brandLink} className="fw-bold fs-3 d-flex align-items-center" style={{ letterSpacing: '1px' }}>
                    EduForum
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {!loading && (isAuthenticated ? authLinks : guestLinks)}
                </Navbar.Collapse>
            </Container>
            <style>{`
                .nav-link-custom {
                    color: #fff !important;
                    font-weight: 500;
                    font-size: 1.08rem;
                    margin-left: 1.1rem;
                    border-radius: 12px;
                    transition: background 0.2s, color 0.2s;
                    padding: 0.5rem 1.1rem;
                }
                .nav-link-custom:hover, .nav-link-custom:focus {
                    background: rgba(255,255,255,0.18);
                    color: #393E41 !important;
                    text-decoration: none;
                }
            `}</style>
        </Navbar>
    );
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);