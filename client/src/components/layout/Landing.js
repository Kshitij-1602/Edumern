import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaGraduationCap, FaComments, FaUsers, FaBook, FaLightbulb, FaChartLine, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const featureCards = [
  {
    icon: <FaGraduationCap size={40} style={{ color: "#6962A6", opacity: 0.9 }} />, 
    title: "Expert Community",
    desc: "Connect with educators and learners from around the world"
  },
  {
    icon: <FaComments size={40} style={{ color: "#6962A6", opacity: 0.9 }} />, 
    title: "Rich Discussions",
    desc: "Engage in meaningful conversations and share insights"
  },
  {
    icon: <FaBook size={40} style={{ color: "#6962A6", opacity: 0.9 }} />, 
    title: "Learning Resources",
    desc: "Access a wealth of educational content and materials"
  }
];

const stats = [
  {
    icon: <FaLightbulb size={40} style={{ color: "#6962A6", opacity: 0.9 }} />,
    value: "1000+",
    label: "Active Discussions",
    delay: 0.2
  },
  {
    icon: <FaUsers size={40} style={{ color: "#6962A6", opacity: 0.9 }} />,
    value: "5000+",
    label: "Community Members",
    delay: 0.4
  },
  {
    icon: <FaChartLine size={40} style={{ color: "#6962A6", opacity: 0.9 }} />,
    value: "98%",
    label: "Satisfaction Rate",
    delay: 0.6
  }
];

function Landing() {
  return (
    <div style={{
      minHeight: "100vh",
      position: 'relative',
      overflow: 'hidden',
      padding: "2rem 0"
    }}>
      {/* Animated SVG Gradient Background */}
      <svg style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0}} viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="landingGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff8c69" />
            <stop offset="100%" stopColor="#6962A6" />
          </linearGradient>
        </defs>
        <path fill="url(#landingGradient)" fillOpacity="0.18" d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,208C840,203,960,149,1080,128C1200,107,1320,117,1380,122.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
        <circle cx="1200" cy="100" r="120" fill="#ff8c69" fillOpacity="0.12" />
        <circle cx="300" cy="500" r="180" fill="#6962A6" fillOpacity="0.10" />
      </svg>
      <Container style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-dark">
                <motion.h1
                  className="display-4 fw-bold mb-4"
                  style={{ color: "#393E41" }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                >
                  Welcome to <span style={{ color: "#6962A6" }}>EduForum</span>
                </motion.h1>
                <motion.h2
                  className="h4 mb-4"
                  style={{ color: "#6962A6", opacity: 0.9 }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  Your Learning Community
                </motion.h2>
                <motion.p
                  className="lead mb-5"
                  style={{ color: "#666", opacity: 0.8 }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                >
                  Join a vibrant community of learners and educators. Share knowledge, 
                  engage in discussions, and grow together in your educational journey.
                </motion.p>
              </div>
            </motion.div>
          </Col>

          {/* Right side - Login/Register Section */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -8, boxShadow: '0 8px 32px rgba(105,98,166,0.13)' }}
              style={{ zIndex: 2 }}
            >
              <Card
                className="border-0 shadow-lg"
                style={{
                  borderRadius: '2rem',
                  background: 'linear-gradient(135deg, #fff 60%, #f8e1d9 100%)',
                  boxShadow: '0 4px 24px rgba(255,140,105,0.10)',
                  position: 'relative',
                  overflow: 'visible',
                  minHeight: 420,
                  paddingTop: 32
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-27px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #ff8c69 0%, #6962A6 100%)',
                  borderRadius: '50%',
                  width: 54,
                  height: 54,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 12px rgba(105,98,166,0.10)',
                  zIndex: 3
                }}>
                  <FaRocket size={28} style={{ color: '#fff' }} />
                </div>
                <Card.Body className="p-5 d-flex flex-column align-items-center justify-content-center" style={{ marginTop: 18 }}>
                  <h2 className="text-center mb-4" style={{ color: "#6962A6", fontWeight: 700, letterSpacing: 1 }}>
                    Get Started
                  </h2>
                  <p className="text-muted text-center mb-4" style={{ maxWidth: 320 }}>
                    Sign in or create an account to join the EduForum community and start your learning journey!
                  </p>
                  <div className="d-grid gap-3 w-100" style={{ maxWidth: 340 }}>
                    <motion.div
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Button
                        as={Link}
                        to="/login"
                        variant="primary"
                        size="lg"
                        className="py-3 w-100"
                        style={{
                          background: "linear-gradient(90deg, #ff8c69 0%, #ff7b54 100%)",
                          border: 'none',
                          color: '#fff',
                          fontWeight: 600,
                          boxShadow: '0 2px 8px rgba(255,140,105,0.08)',
                          borderRadius: '1.5rem',
                          fontSize: '1.15rem',
                          letterSpacing: 0.5
                        }}
                      >
                        Sign In
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Button
                        as={Link}
                        to="/register"
                        variant="outline-primary"
                        size="lg"
                        className="py-3 w-100"
                        style={{
                          color: "#ff8c69",
                          borderColor: "#ff8c69",
                          fontWeight: 600,
                          background: 'transparent',
                          boxShadow: '0 2px 8px rgba(255,140,105,0.04)',
                          borderRadius: '1.5rem',
                          fontSize: '1.15rem',
                          letterSpacing: 0.5
                        }}
                      >
                        Create Account
                      </Button>
                    </motion.div>
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
          {/* Feature Cards with staggered animation */}
          {featureCards.map((card, idx) => (
            <Col md={4} className="mb-4" key={card.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.04, boxShadow: '0 8px 24px rgba(105,98,166,0.10)' }}
              >
                <Card className="border-0 shadow-sm h-100" style={{ background: "#fff", borderRadius: '18px' }}>
                  <Card.Body className="p-4 text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      style={{ display: 'inline-block' }}
                    >
                      {card.icon}
                    </motion.div>
                    <h4 style={{ color: "#393E41" }}>{card.title}</h4>
                    <p className="text-muted">{card.desc}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Stats Section */}
        <Row className="mt-5 py-5" style={{ 
          background: "#fff", 
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
        }}>
          {stats.map(stat => (
            <Col md={4} className="text-center" key={stat.label}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                whileHover={{ scale: 1.08, boxShadow: '0 4px 16px rgba(105,98,166,0.10)' }}
              >
                {stat.icon}
                <h3 className="mb-2" style={{ color: "#393E41" }}>{stat.value}</h3>
                <p className="text-muted">{stat.label}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
