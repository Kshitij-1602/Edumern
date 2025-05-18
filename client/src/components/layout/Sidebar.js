import React, { useState } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import { FaUser, FaHome, FaList, FaGavel, FaBook, FaSignOutAlt, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { motion } from 'framer-motion';

function Sidebar({ logout, children }) {
    const location = useLocation();
    const [showSidebar, setShowSidebar] = useState(false);

    const isActive = (path) => {
        return location.pathname === path;
    };

    const navItems = [
        { path: '/profile', icon: <FaUser />, text: 'Profile' },
        { path: '/topics', icon: <FaHome />, text: 'Topics' },
        { path: '/posts', icon: <FaList />, text: 'All Posts' },
        { path: '/rules', icon: <FaGavel />, text: 'Rules' },
        { path: '/wiki', icon: <FaBook />, text: 'Wiki' }
    ];

    const SidebarContent = () => (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                backgroundColor: '#fff',
                borderRadius: '15px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                padding: '1rem',
                margin: '1rem',
                height: 'fit-content',
                position: 'sticky',
                top: '1rem'
            }}
        >
            <Nav className="flex-column">
                {navItems.map((item) => (
                    <Nav.Item key={item.path}>
                        <Nav.Link 
                            as={Link} 
                            to={item.path}
                            className="d-flex align-items-center mb-2"
                            style={{ 
                                color: isActive(item.path) ? '#6962A6' : '#666',
                                backgroundColor: isActive(item.path) ? 'rgba(105, 98, 166, 0.1)' : 'transparent',
                                borderRadius: '10px',
                                padding: '0.75rem 1rem',
                                transition: 'all 0.2s ease',
                                textDecoration: 'none',
                                fontWeight: isActive(item.path) ? '600' : '400'
                            }}
                            onMouseEnter={(e) => {
                                if (!isActive(item.path)) {
                                    e.currentTarget.style.backgroundColor = 'rgba(105, 98, 166, 0.05)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isActive(item.path)) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }
                            }}
                        >
                            <span className="me-3" style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                            {item.text}
                        </Nav.Link>
                    </Nav.Item>
                ))}

                <Nav.Item>
                    <Nav.Link 
                        onClick={logout}
                        className="d-flex align-items-center mt-2"
                        style={{ 
                            color: '#dc3545',
                            borderRadius: '10px',
                            padding: '0.75rem 1rem',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(220, 53, 69, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        <span className="me-3" style={{ fontSize: '1.1rem' }}><FaSignOutAlt /></span>
                        Sign Out
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </motion.div>
    );

    return (
        <div className="d-flex">
            {/* Desktop Sidebar */}
            <div className="d-none d-lg-block" style={{ width: '250px', flexShrink: 0 }}>
                <SidebarContent />
            </div>

            {/* Mobile Sidebar Toggle */}
            <button
                onClick={() => setShowSidebar(true)}
                className="btn btn-link position-fixed d-lg-none"
                style={{
                    top: '1rem',
                    left: '1rem',
                    zIndex: 1000,
                    color: '#6962A6',
                    textDecoration: 'none'
                }}
            >
                <FaBars size={24} />
            </button>

            {/* Mobile Sidebar */}
            <Offcanvas
                show={showSidebar}
                onHide={() => setShowSidebar(false)}
                placement="start"
                style={{ width: '250px' }}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                    <SidebarContent />
                </Offcanvas.Body>
            </Offcanvas>

            {/* Main Content */}
            <div className="flex-grow-1">
                {children}
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    logout: PropTypes.func.isRequired,
    children: PropTypes.node
};

export default connect(null, { logout })(Sidebar);