import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer 
      className="py-4 mt-auto"
      style={{
        background: "linear-gradient(135deg, #ff9800 0%, #ff5722 100%)",
        color: "white",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-0">EduForum</h5>
            <small>Your Learning Community</small>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <div className="d-flex justify-content-center gap-3">
              <Link to="/about" className="text-white text-decoration-none">About</Link>
              <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
              <Link to="/rules" className="text-white text-decoration-none">Rules</Link>
            </div>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <p className="mb-0">© {new Date().getFullYear()} EduForum</p>
            <small>All rights reserved</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;