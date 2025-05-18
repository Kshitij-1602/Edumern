import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { FaLockOpen, FaEnvelope, FaKey } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Login = ({ login, isAuthenticated, alert }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [validated, setValidated] = useState(false);

    const { email, password } = formData;

    // Stop loading if an error alert is received
    useEffect(() => {
        if (alert && alert.length > 0) {
            const hasError = alert.some(a => a.alertType === 'danger');
            if (hasError) setLoading(false);
        }
    }, [alert]);

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value 
        });
        setValidated(false);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const form = e.currentTarget;
        
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }

        setLoading(true);
        await login(email, password);
        setLoading(false);
    };

    // redirect if logged in
    if(isAuthenticated) {
        return <Redirect to='/posts' />;
    }

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6} lg={5}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="border-0 shadow-sm">
                            <Card.Body className="p-4 p-md-5">
                                <div className="text-center mb-4">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <FaLockOpen size={50} className="mb-3" style={{ color: "#6962A6" }} />
                                    </motion.div>
                                    <h2 className="fw-bold" style={{ color: "#393E41" }}>Welcome Back</h2>
                                    <p className="text-muted">Sign in to continue to EduForum</p>
                                </div>

                                {alert && alert.length > 0 && (
                                    <Alert variant="danger" className="mb-4">
                                        {alert.map((alert, index) => (
                                            <div key={index}>{alert.msg}</div>
                                        ))}
                                    </Alert>
                                )}

                                <Form noValidate validated={validated} onSubmit={onSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email Address</Form.Label>
                                        <div className="position-relative">
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={email}
                                                onChange={onChange}
                                                required
                                                placeholder="Enter your email"
                                                className="ps-5"
                                            />
                                            <FaEnvelope 
                                                className="position-absolute" 
                                                style={{ 
                                                    top: '50%', 
                                                    left: '15px', 
                                                    transform: 'translateY(-50%)',
                                                    color: '#6962A6',
                                                    opacity: 0.5
                                                }} 
                                            />
                                        </div>
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid email address.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Password</Form.Label>
                                        <div className="position-relative">
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                value={password}
                                                onChange={onChange}
                                                required
                                                placeholder="Enter your password"
                                                className="ps-5"
                                            />
                                            <FaKey 
                                                className="position-absolute" 
                                                style={{ 
                                                    top: '50%', 
                                                    left: '15px', 
                                                    transform: 'translateY(-50%)',
                                                    color: '#6962A6',
                                                    opacity: 0.5
                                                }} 
                                            />
                                        </div>
                                        <Form.Control.Feedback type="invalid">
                                            Please enter your password.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Button 
                                        variant="primary" 
                                        type="submit" 
                                        className="w-100 py-2 mb-3"
                                        disabled={loading || !email || !password}
                                        style={{
                                            backgroundColor: "#ff5722",
                                            borderColor: "#ff5722",
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
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Signing in...
                                            </>
                                        ) : (
                                            'Sign In'
                                        )}
                                    </Button>

                                    <p className="text-center mb-0">
                                        Don't have an account?{' '}
                                        <Link 
                                            to="/register" 
                                            className="text-decoration-none"
                                            style={{ color: "#ff8c69" }}
                                        >
                                            Register
                                        </Link>
                                    </p>
                                </Form>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    alert: PropTypes.array
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    alert: state.alert
});

export default connect(mapStateToProps, { login })(Login);