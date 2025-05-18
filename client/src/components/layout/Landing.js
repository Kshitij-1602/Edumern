import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaGraduationCap, FaComments, FaUsers, FaBook, FaLightbulb, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function Landing() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#fafafa",
      padding: "2rem 0"
    }}>
      <Container>
        {/* Hero Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-dark">
                <h1 className="display-4 fw-bold mb-4" style={{ color: "#393E41" }}>
                  Welcome to <span style={{ color: "#6962A6" }}>EduForum</span>
                </h1>
                <h2 className="h4 mb-4" style={{ color: "#6962A6", opacity: 0.9 }}>Your Learning Community</h2>
                <p className="lead mb-5" style={{ color: "#666", opacity: 0.8 }}>
                  Join a vibrant community of learners and educators. Share knowledge, 
                  engage in discussions, and grow together in your educational journey.
                </p>
              </div>
            </motion.div>
          </Col>

          {/* Right side - Login/Register Section */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-5">
                  <h2 className="text-center mb-4" style={{ color: "#6962A6" }}>
                    Get Started
                  </h2>
                  
                  <div className="d-grid gap-3">
                    <Button
                      as={Link}
                      to="/login"
                      variant="primary"
                      size="lg"
                      className="py-3"
                      style={{
                        backgroundColor: "#ff8c69",
                        borderColor: "#ff8c69",
                        transition: "all 0.3s ease"
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#ff7b54";
                        e.target.style.borderColor = "#ff7b54";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#ff8c69";
                        e.target.style.borderColor = "#ff8c69";
                      }}
                    >
                      Sign In
                    </Button>
                    
                    <Button
                      as={Link}
                      to="/register"
                      variant="outline-primary"
                      size="lg"
                      className="py-3"
                      style={{
                        color: "#ff8c69",
                        borderColor: "#ff8c69",
                        transition: "all 0.3s ease"
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = "rgba(255, 140, 105, 0.04)";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = "transparent";
                      }}
                    >
                      Create Account
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Features Section */}
        <Row className="mt-5">
          <Col xs={12}>
            <h3 className="text-center mb-5" style={{ color: "#393E41" }}>Why Choose EduForum?</h3>
          </Col>
          
          {/* Feature Cards */}
          <Col md={4} className="mb-4">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-sm h-100" style={{ background: "#fff" }}>
                <Card.Body className="p-4 text-center">
                  <FaGraduationCap size={40} className="mb-3" style={{ color: "#6962A6", opacity: 0.9 }} />
                  <h4 style={{ color: "#393E41" }}>Expert Community</h4>
                  <p className="text-muted">Connect with educators and learners from around the world</p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col md={4} className="mb-4">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-sm h-100" style={{ background: "#fff" }}>
                <Card.Body className="p-4 text-center">
                  <FaComments size={40} className="mb-3" style={{ color: "#6962A6", opacity: 0.9 }} />
                  <h4 style={{ color: "#393E41" }}>Rich Discussions</h4>
                  <p className="text-muted">Engage in meaningful conversations and share insights</p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col md={4} className="mb-4">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-sm h-100" style={{ background: "#fff" }}>
                <Card.Body className="p-4 text-center">
                  <FaBook size={40} className="mb-3" style={{ color: "#6962A6", opacity: 0.9 }} />
                  <h4 style={{ color: "#393E41" }}>Learning Resources</h4>
                  <p className="text-muted">Access a wealth of educational content and materials</p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="mt-5 py-5" style={{ 
          background: "#fff", 
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
        }}>
          <Col md={4} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaLightbulb size={40} className="mb-3" style={{ color: "#6962A6", opacity: 0.9 }} />
              <h3 className="mb-2" style={{ color: "#393E41" }}>1000+</h3>
              <p className="text-muted">Active Discussions</p>
            </motion.div>
          </Col>

          <Col md={4} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FaUsers size={40} className="mb-3" style={{ color: "#6962A6", opacity: 0.9 }} />
              <h3 className="mb-2" style={{ color: "#393E41" }}>5000+</h3>
              <p className="text-muted">Community Members</p>
            </motion.div>
          </Col>

          <Col md={4} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <FaChartLine size={40} className="mb-3" style={{ color: "#6962A6", opacity: 0.9 }} />
              <h3 className="mb-2" style={{ color: "#393E41" }}>98%</h3>
              <p className="text-muted">Satisfaction Rate</p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
