import { Paper, TextField, Button } from '@material-ui/core'
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import React, { Fragment, useState } from 'react'
import Sidebar from '../layout/Sidebar'
import { createProfile } from '../../actions/profile'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const EditProfile = ({ createProfile, history }) => {
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
        facebook: '',
    })
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
        facebook,
    } = formData
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const onSubmit = e => {
        e.preventDefault()
        createProfile(formData, history)
    }
    return (
        <Fragment>
            <Sidebar />
            <Paper className="content profileStyle">
                <div style={top}>
                    <ReceiptOutlinedIcon color="secondary" style= {{ fontSize: 40 }} />
                    <h1 style={{ display: 'inline-block', marginLeft: '10px' }}>Edit Profile</h1>
                </div>
                <small style={{ marginLeft: '20px' }}>
                    To add avatar go to gravatar.com and register your universal avatar.
                </small>
                <form onSubmit={e => onSubmit(e)}>
                    <TextField 
                        name="university"
                        value={university}
                        variant="outlined"
                        label="University"
                        type="text"
                        fullWidth
                        style={inputStyle}
                        onChange={e => onChange(e)}
                        required
                    />
                    <TextField 
                        name="degree"
                        value={degree}
                        variant="outlined"
                        label="Degree"
                        type="text"
                        fullWidth
                        style={inputStyle}
                        onChange={e => onChange(e)}
                        required
                    />
                    <TextField 
                        name="location"
                        value={location}
                        variant="outlined"
                        label="Location"
                        type="text"
                        fullWidth
                        style={inputStyle}
                        onChange={e => onChange(e)}
                        required
                    />
                    <TextField 
                        name="status"
                        value={status}
                        variant="outlined"
                        label="Status"
                        type="text"
                        fullWidth
                        style={inputStyle}
                        onChange={e => onChange(e)}
                    />
                    <TextField 
                        name="skills"
                        value={skills}
                        variant="outlined"
                        label="Skills"
                        type="text"
                        fullWidth
                        style={inputStyle}
                        onChange={e => onChange(e)}
                    />
                    <TextField 
                        name="youtube"
                        value={youtube}
                        variant="outlined"
                        label="Youtube"
                        type="text"
                        fullWidth
                        style={inputStyle}
                        onChange={e => onChange(e)}
                    />
                    <TextField 
                        name="twitter"
                        value={twitter}
                        variant="outlined"
                        label="Twitter"
                        type="text"
                        fullWidth
                        style={inputStyle}
                        onChange={e => onChange(e)}
                    />
                    <TextField 
                        name="instagram"
                        value={instagram}
                        variant="outlined"
                        label="Instagram"
                        type="text"
                        fullWidth
                        style={inputStyle}
                        onChange={e => onChange(e)}
                    />
                    <TextField 
                        name="linkedin"
                        value={linkedin}
                        variant="outlined"
                        label="Linkedin"
                        type="text"
                        style={inputStyle}
                        onChange={e => onChange(e)}
                    />
                    <TextField 
                        name="github"
                        value={github}
                        variant="outlined"
                        label="Github"
                        type="text"
                        style={inputStyle}
                        onChange={e => onChange(e)}
                    />
                    <TextField 
                        name="facebook"
                        value={facebook}
                        variant="outlined"
                        label="Facebook"
                        type="text"
                        style={inputStyle}
                        onChange={e => onChange(e)}
                    />
                    <Button
                        type="submit"
                        size="large"
                        variant="contained"
                        color="primary"
                        style={buttonStyle}
                    >Submit</Button>
                </form>
            </Paper>
        </Fragment>
    )
}

const inputStyle = {
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: '15px',
    width: '80%',
    display: 'flex'
}

const buttonStyle = {
    margin: '25px',
}

const top = {
    marginTop: '10px',
    marginLeft: '25px'
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
}

export default connect(null, { createProfile })(EditProfile)
