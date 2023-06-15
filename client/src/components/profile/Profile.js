// TODO: add Reditrect when no profile
// TODO: bug when click social link in same tab
import React, { useEffect } from "react";
import { Paper, Avatar, Chip, IconButton, Button } from "@material-ui/core";
import Sidebar from '../layout/Sidebar'
import { getCurrentProfile, deleteAccount } from '../../actions/profile'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { 
  Done, 
  Twitter, 
  YouTube, 
  Instagram, 
  Facebook, 
  LinkedIn, 
  GitHub } from '@material-ui/icons'
import { Link, Redirect } from 'react-router-dom'


function Profile({ profile: {profile, loading}, getCurrentProfile, deleteAccount }) {
  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile])

  return (
    <React.Fragment>
      {!loading && profile !== null && (
        <React.Fragment>
          <Sidebar />
          <Paper className="content profile-style">
            <div style={profileHeader}>
              <Avatar alt="user image" style={avatarStyle} src={profile.avatar} />
              <div style={{ margin: "25px" }}>
                <h2>{profile.user.name}</h2>
                <fieldset style={{ width: "700px", height: "200px", border: "1px solid black", padding: "8px" }}>
                  <legend style={{ width: "auto", fontSize: "18px", margin: "8px" }}>
                    Status
              </legend>
                  {profile.status ? (profile.status) : ("Edit Profile to add Status")}
                </fieldset>
              </div>
            </div>
            <div style={profileMain}>
              {profile.skills && profile.skills.length > 0 && (
                <div style={{ display: 'block', marginTop: '5px' }}>
                  <h4>Skills:</h4>
                  {profile.skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      color="primary"
                      onDelete={() => { }}
                      style={{ margin: '10px' }}
                      deleteIcon={<Done />}
                    />
                  ))}
                </div>
              )}
              <h4>University:</h4>
              <p style={profileText}>{profile.university}</p>
              <h4>Degree:</h4>
              <p style={profileText}>{profile.degree}</p>
              <h4>Location:</h4>
              <p style={profileText}>{profile.location}</p>
              {profile.social && (
                <div style={{ display: 'block', marginTop: '5px' }}>
                  <h4>Social Links:</h4>
                  {profile.social.twitter && (
                    <IconButton href={profile.social.twitter}>
                      <Twitter />
                    </IconButton>
                  )}
                  {profile.social.youtube && (
                    <IconButton href={profile.social.youtube}>
                      <YouTube />
                    </IconButton>
                  )}
                  {profile.social.instagram && (
                    <IconButton href={profile.social.instagram}>
                      <Instagram />
                    </IconButton>
                  )}
                  {profile.social.facebook && (
                    <IconButton href={profile.social.facebook}>
                      <Facebook />
                    </IconButton>
                  )}
                  {profile.social.linkedin && (
                    <IconButton href={profile.social.linkedin}>
                      <LinkedIn />
                    </IconButton>
                  )}
                  {profile.social.github && (
                    <IconButton href={profile.social.github}>
                      <GitHub />
                    </IconButton>
                  )}
                </div>
              )}
              <p style={{ margin: '10px' }}>
                <Button
                  variant='contained'
                  color='secondary'
                  // style={{ display: 'block' }}
                  component={Link}
                  to='/edit-profile'>
                    Edit Profile
                </Button>
                <Button
                  variant='contained'
                  style={{ marginLeft: '10px', backgroundColor: '#343a40', color: 'white' }}
                  onClick={() => deleteAccount()}
                >
                  Delete Account
                </Button>
              </p>
            </div>
          </Paper>
        </React.Fragment>
      )}
      {!loading && profile === null && (
        <Redirect to='edit-profile' />
      )}
    </React.Fragment>
  );
}

const profileHeader = {
  display: "flex",
};

const avatarStyle = {
  margin: "15px",
  alignSelf: "center",
  backgroundColor: "orange",
  height: "150px",
  width: "150px",
};

const profileMain = {
  margin: "18px",
  marginLeft: "100px",
};

const profileText = {
  display: "inline-block",
  border: "1px solid black",
  padding: "8px",
  width: "600px",
  borderRadius: "5px",
};

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Profile);
