import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Sidebar from '../layout/Sidebar';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';

const Dashboard = ({ profile: { profile, loading }, auth: { user }, getCurrentProfile }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return (
        <Sidebar>
            <div className="py-4 px-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="border-0 shadow-sm mb-4" style={{ borderRadius: '15px' }}>
                        <Card.Body className="p-4">
                            <h2 className="mb-4" style={{ color: '#393E41', fontWeight: '600' }}>
                                Welcome to EduForum{user && user.name ? `, ${user.name}` : ''}!
                            </h2>
                            <p style={{ color: '#666', fontSize: '1.1rem' }}>
                                Your educational community platform for sharing knowledge and connecting with fellow learners.
                            </p>
                        </Card.Body>
                    </Card>

                    
                </motion.div>
            </div>
        </Sidebar>
    );
};

Dashboard.propTypes = {
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
