// TODO: add Reditrect when no profile
// TODO: bug when click social link in same tab
import React, { useEffect } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaUser, FaUniversity, FaGraduationCap, FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { getCurrentProfile } from '../../actions/profile'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import Sidebar from '../layout/Sidebar'

function Profile({ profile: {profile, loading}, getCurrentProfile }) {
  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile])

  if (loading) {
    return (
      <Sidebar>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
          <div className="spinner-border text-primary" role="status" style={{ color: '#6962A6', width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </Sidebar>
    );
  }

  if (!loading && profile === null) {
    return <Redirect to='/edit-profile' />;
  }

  return (
    <Sidebar>
      <div className="py-4 px-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-4 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
            <Card.Body className="p-4">
              <div className="d-flex align-items-center mb-4">
                {profile.avatar && profile.avatar !== '' ? (
                  <img 
                    src={profile.avatar}
                    alt={profile.user.name}
                    className="rounded-circle me-4"
                    style={{ 
                      width: '120px', 
                      height: '120px', 
                      objectFit: 'cover',
                      border: '3px solid #f8f9fa'
                    }}
                  />
                ) : (
                  <FaUserCircle 
                    className="me-4"
                    style={{
                      width: '120px',
                      height: '120px',
                      color: '#e0e0e0',
                      border: '3px solid #f8f9fa',
                      borderRadius: '50%',
                      background: '#fff'
                    }}
                  />
                )}
                <div>
                  <h2 className="mb-2" style={{ color: '#393E41', fontWeight: '600' }}>{profile.user.name}</h2>
                  <div className="d-flex align-items-center">
                    <FaUser className="me-2" style={{ color: '#6962A6' }} />
                    <p className="mb-0" style={{ color: '#666' }}>
                      {profile.status || "No status set"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <Card className="border-0" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
                    <Card.Body>
                      <h5 className="mb-3" style={{ color: '#393E41', fontWeight: '600' }}>Education</h5>
                      <div className="d-flex align-items-center mb-3">
                        <FaUniversity className="me-2" style={{ color: '#6962A6' }} />
                        <p className="mb-0" style={{ color: '#666' }}>{profile.university || 'Not specified'}</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <FaGraduationCap className="me-2" style={{ color: '#6962A6' }} />
                        <p className="mb-0" style={{ color: '#666' }}>{profile.degree || 'Not specified'}</p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-md-6">
                  <Card className="border-0" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
                    <Card.Body>
                      <h5 className="mb-3" style={{ color: '#393E41', fontWeight: '600' }}>Location</h5>
                      <div className="d-flex align-items-center">
                        <FaMapMarkerAlt className="me-2" style={{ color: '#6962A6' }} />
                        <p className="mb-0" style={{ color: '#666' }}>{profile.location || 'Not specified'}</p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>

              {profile.skills && profile.skills.length > 0 && (
                <div className="mt-4">
                  <h5 className="mb-3" style={{ color: '#393E41', fontWeight: '600' }}>Skills</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {profile.skills.map((skill, index) => (
                      <Badge 
                        key={index}
                        bg="light"
                        text="dark"
                        style={{ 
                          padding: '8px 12px',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          backgroundColor: 'rgba(105, 98, 166, 0.1)',
                          color: '#6962A6'
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {profile.social && (
                <div className="mt-4">
                  <h5 className="mb-3" style={{ color: '#393E41', fontWeight: '600' }}>Social Links</h5>
                  <div className="d-flex gap-2">
                    {profile.social.twitter && (
                      <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <Button variant="light" size="sm" style={{ borderRadius: '20px', padding: '8px 12px' }}>
                          <FaTwitter style={{ color: '#6962A6' }} />
                        </Button>
                      </a>
                    )}
                    {profile.social.youtube && (
                      <a href={profile.social.youtube} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <Button variant="light" size="sm" style={{ borderRadius: '20px', padding: '8px 12px' }}>
                          <FaYoutube style={{ color: '#6962A6' }} />
                        </Button>
                      </a>
                    )}
                    {profile.social.instagram && (
                      <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <Button variant="light" size="sm" style={{ borderRadius: '20px', padding: '8px 12px' }}>
                          <FaInstagram style={{ color: '#6962A6' }} />
                        </Button>
                      </a>
                    )}
                    {profile.social.facebook && (
                      <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <Button variant="light" size="sm" style={{ borderRadius: '20px', padding: '8px 12px' }}>
                          <FaFacebook style={{ color: '#6962A6' }} />
                        </Button>
                      </a>
                    )}
                    {profile.social.linkedin && (
                      <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <Button variant="light" size="sm" style={{ borderRadius: '20px', padding: '8px 12px' }}>
                          <FaLinkedin style={{ color: '#6962A6' }} />
                        </Button>
                      </a>
                    )}
                    {profile.social.github && (
                      <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <Button variant="light" size="sm" style={{ borderRadius: '20px', padding: '8px 12px' }}>
                          <FaGithub style={{ color: '#6962A6' }} />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="mt-4 d-flex gap-2">
                <Button
                  as={Link}
                  to="/edit-profile"
                  variant="primary"
                  style={{
                    backgroundColor: '#6962A6',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '8px 20px'
                  }}
                >
                  Edit Profile
                </Button>
              </div>
            </Card.Body>
          </Card>
        </motion.div>
      </div>
    </Sidebar>
  );
}

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
