import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { FaUserPlus } from 'react-icons/fa';

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value 
    });

    const onSubmit = e => {
        e.preventDefault();
        if(password !== password2) {
            setAlert('Passwords do not match', 'danger', 3000);
        } else {
            register({ name, email, password });
        }
    };

    // redirect if logged in
    if(isAuthenticated) {
        return <Redirect to='/posts' />;
    }

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="border-0 shadow-lg">
                        <Card.Body className="p-5">
                            <div className="text-center mb-4">
                                <FaUserPlus size={50} className="text-primary mb-3" />
                                <h2 className="fw-bold">Create Account</h2>
                                <p className="text-muted">Join our learning community</p>
                            </div>

                            <Form onSubmit={onSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={onChange}
                                        required
                                        placeholder="Enter your full name"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={onChange}
                                        required
                                        placeholder="Enter your email"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={onChange}
                                        required
                                        placeholder="Create a password"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password2"
                                        value={password2}
                                        onChange={onChange}
                                        required
                                        placeholder="Confirm your password"
                                    />
                                </Form.Group>

                                <Button 
                                    variant="primary" 
                                    type="submit" 
                                    className="w-100 py-2 mb-3"
                                    style={{
                                        backgroundColor: "#ff5722",
                                        borderColor: "#ff5722",
                                        transition: "all 0.3s ease"
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.backgroundColor = "#f4511e";
                                        e.target.style.borderColor = "#f4511e";
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.backgroundColor = "#ff5722";
                                        e.target.style.borderColor = "#ff5722";
                                    }}
                                >
                                    Create Account
                                </Button>

                                <p className="text-center mb-0">
                                    Already have an account?{' '}
                                    <Link 
                                        to="/login" 
                                        className="text-decoration-none"
                                        style={{ color: "#ff5722" }}
                                    >
                                        Sign In
                                    </Link>
                                </p>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);