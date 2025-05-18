import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { FaUser, FaUniversity, FaGraduationCap, FaMapMarkerAlt, FaLink } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import { withRouter } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';

const EditProfile = ({ createProfile, getCurrentProfile, profile: { profile, loading }, history }) => {
    const [formData, setFormData] = useState({
        university: '',
        degree: '',
        location: '',
        status: '',
        skills: '',
        youtube: '',
        twitter: '',
        instagram: '',
        linkedin: '',
        github: '',
        facebook: ''
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);
    const [errors, setErrors] = useState({});
    const [profileLoaded, setProfileLoaded] = useState(false);

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    useEffect(() => {
        if (!loading && profile && !profileLoaded) {
            const social = profile.social || {};
            setFormData({
                university: profile.university || '',
                degree: profile.degree || '',
                location: profile.location || '',
                status: profile.status || '',
                skills: profile.skills ? profile.skills.join(', ') : '',
                youtube: social.youtube || '',
                twitter: social.twitter || '',
                instagram: social.instagram || '',
                linkedin: social.linkedin || '',
                github: social.github || '',
                facebook: social.facebook || ''
            });
            setProfileLoaded(true);
        }
    }, [loading, profile, profileLoaded]);

    const {
        university,
        degree,
        location,
        status,
        skills,
        youtube,
        twitter,
        instagram,
        linkedin,
        github,
        facebook
    } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when field is edited
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!university.trim()) newErrors.university = 'University is required';
        if (!degree.trim()) newErrors.degree = 'Degree is required';
        if (!location.trim()) newErrors.location = 'Location is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = e => {
        e.preventDefault();
        if (!validateForm()) return;

        // Format skills before submission
        const formattedSkills = skills
            .split(',')
            .map(skill => skill.trim())
            .filter(skill => skill.length > 0)
            .join(', ');

        const profileData = {
            university,
            degree,
            location,
            status,
            skills: formattedSkills,
            social: {
                youtube,
                twitter,
                instagram,
                linkedin,
                github,
                facebook
            }
        };
        createProfile(profileData, history);
    };

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1">
                <div className="container py-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="mb-4" style={{ color: '#393E41', fontWeight: '600' }}>Edit Profile</h2>
                        <Card className="border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                            <Card.Body className="p-4">
                                <Form onSubmit={onSubmit}>
                                    <div className="mb-4">
                                        <Form.Group className="mb-3">
                                            <Form.Label className="d-flex align-items-center" style={{ color: '#393E41', fontWeight: '500' }}>
                                                <FaUser className="me-2" style={{ color: '#6962A6' }} />
                                                Status
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="What are you currently doing?"
                                                name="status"
                                                value={status}
                                                onChange={onChange}
                                                style={{ borderRadius: '10px' }}
                                            />
                                            <Form.Text className="text-muted">
                                                Give us an idea of what you are currently doing
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="d-flex align-items-center" style={{ color: '#393E41', fontWeight: '500' }}>
                                                <FaUniversity className="me-2" style={{ color: '#6962A6' }} />
                                                University
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="University"
                                                name="university"
                                                value={university}
                                                onChange={onChange}
                                                style={{ borderRadius: '10px' }}
                                                isInvalid={!!errors.university}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.university}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="d-flex align-items-center" style={{ color: '#393E41', fontWeight: '500' }}>
                                                <FaGraduationCap className="me-2" style={{ color: '#6962A6' }} />
                                                Degree
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Degree"
                                                name="degree"
                                                value={degree}
                                                onChange={onChange}
                                                style={{ borderRadius: '10px' }}
                                                isInvalid={!!errors.degree}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.degree}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="d-flex align-items-center" style={{ color: '#393E41', fontWeight: '500' }}>
                                                <FaMapMarkerAlt className="me-2" style={{ color: '#6962A6' }} />
                                                Location
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Location"
                                                name="location"
                                                value={location}
                                                onChange={onChange}
                                                style={{ borderRadius: '10px' }}
                                                isInvalid={!!errors.location}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.location}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ color: '#393E41', fontWeight: '500' }}>Skills</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Skills"
                                                name="skills"
                                                value={skills}
                                                onChange={onChange}
                                                style={{ borderRadius: '10px' }}
                                            />
                                            <Form.Text className="text-muted">
                                                Please use comma separated values (eg. HTML,CSS,JavaScript)
                                            </Form.Text>
                                        </Form.Group>
                                    </div>

                                    <div className="mb-4">
                                        <Button
                                            type="button"
                                            variant="light"
                                            className="mb-3"
                                            onClick={() => toggleSocialInputs(!displaySocialInputs)}
                                            style={{ 
                                                borderRadius: '20px',
                                                padding: '8px 20px',
                                                color: '#6962A6',
                                                border: '1px solid #6962A6'
                                            }}
                                        >
                                            <FaLink className="me-2" />
                                            Add Social Network Links
                                        </Button>

                                        {displaySocialInputs && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ color: '#393E41', fontWeight: '500' }}>GitHub</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="GitHub URL"
                                                        name="github"
                                                        value={github}
                                                        onChange={onChange}
                                                        style={{ borderRadius: '10px' }}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ color: '#393E41', fontWeight: '500' }}>LinkedIn</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="LinkedIn URL"
                                                        name="linkedin"
                                                        value={linkedin}
                                                        onChange={onChange}
                                                        style={{ borderRadius: '10px' }}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ color: '#393E41', fontWeight: '500' }}>Twitter</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Twitter URL"
                                                        name="twitter"
                                                        value={twitter}
                                                        onChange={onChange}
                                                        style={{ borderRadius: '10px' }}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ color: '#393E41', fontWeight: '500' }}>Instagram</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Instagram URL"
                                                        name="instagram"
                                                        value={instagram}
                                                        onChange={onChange}
                                                        style={{ borderRadius: '10px' }}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ color: '#393E41', fontWeight: '500' }}>Facebook</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Facebook URL"
                                                        name="facebook"
                                                        value={facebook}
                                                        onChange={onChange}
                                                        style={{ borderRadius: '10px' }}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ color: '#393E41', fontWeight: '500' }}>YouTube</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="YouTube URL"
                                                        name="youtube"
                                                        value={youtube}
                                                        onChange={onChange}
                                                        style={{ borderRadius: '10px' }}
                                                    />
                                                </Form.Group>
                                            </motion.div>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="primary"
                                        style={{
                                            backgroundColor: '#6962A6',
                                            border: 'none',
                                            borderRadius: '20px',
                                            padding: '8px 20px'
                                        }}
                                    >
                                        Save Changes
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile));
