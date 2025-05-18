import React, { useState } from 'react';
import { Container, Row, Col, Offcanvas } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <Container fluid className="px-0">
            <Row className="g-0">
                {/* Desktop Sidebar */}
                <Col lg={3} xl={2} className="d-none d-lg-block">
                    <Sidebar />
                </Col>

                {/* Mobile Sidebar Toggle */}
                <Col className="d-lg-none">
                    <button
                        onClick={() => setShowSidebar(true)}
                        className="btn btn-link position-fixed"
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
                </Col>

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
                        <Sidebar />
                    </Offcanvas.Body>
                </Offcanvas>

                {/* Main Content */}
                <Col lg={9} xl={10} className="ps-lg-4">
                    <div className="py-4 px-3">
                        {children}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MainLayout; 