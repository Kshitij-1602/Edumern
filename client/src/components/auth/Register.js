import React, { useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'
import Alert from '../layout/Alert'

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, email, password, password2 } = formData
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value 
    })
    const onSubmit = e => {
        e.preventDefault()
        if(password !== password2){
            setAlert('Passwords do not match', 'danger', 3000)
        } else {
            register({ name, email, password })
            console.log('SUCCESS')
        }
    }
    // redirect if logged in
    if(isAuthenticated){
        return <Redirect to='/posts' />
    }
    return (
        <div style={{ gridColumnStart: 'sidebar', gridColumnEnd: 'content' }}>
            <div style={registerStyle}>
                <div style={registerContainer}>
                    <AccountCircleIcon color="secondary" style={{ fontSize: 50 }} />
                    <h2>Register</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <TextField
                            style={textAreaStyle}
                            name="name"
                            value={name}
                            variant="outlined"
                            label="Your Name"
                            type="text"
                            fullWidth
                            required
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            style={textAreaStyle}
                            name="email"
                            value={email}
                            variant="outlined"
                            label="Email Address"
                            type="email"
                            fullWidth
                            required
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            style={textAreaStyle}
                            name="password"
                            value={password}
                            variant="outlined"
                            label="Password"
                            type="password"
                            fullWidth
                            required
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            style={textAreaStyle}
                            name="password2"
                            value={password2}
                            variant="outlined"
                            label="Confirm Password"
                            type="password"
                            fullWidth
                            required
                            onChange={e => onChange(e)}
                        />
                        <Button
                            type="submit"
                            size="large"
                            variant="contained"
                            color="primary"
                        >Register</Button>
                        <p>Already have an account? <Link to="/login">Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

const registerStyle = {
    height: "100vh",
    background: "#f8f8f8",
    display: "grid",
    placeItems: "center",
}
const registerContainer = {
    padding: "100px",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 1px 3px #231233",
}
const textAreaStyle = {
    margin: "10px"
}

Register.protoTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { setAlert, register })( Register )