import React, { useState } from 'react'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value 
    })
    const onSubmit = e => {
        e.preventDefault()
        login(email, password)
    }

    // redirect if logged in
    if(isAuthenticated){
        return <Redirect to='/posts' />
    }

    return (
        <div style={{ gridColumnStart: 'sidebar', gridColumnEnd: 'content' }}>
            <div style={loginStyle}>
                <div style={loginContainer}>
                    <LockOpenIcon color="secondary" style={{ fontSize: 50 }} />
                    <h2>Sign In</h2>
                    <form onSubmit={e => onSubmit(e)}>
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
                        <Button
                            type="submit"
                            size="large"
                            variant="contained"
                            color="primary"
                        >Sign In</Button>
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

const loginStyle = {
    height: "100vh",
    background: "#f8f8f8",
    display: "grid",
    placeItems: "center",
}
const loginContainer = {
    padding: "100px",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 1px 3px #231233",
}
const textAreaStyle = {
    margin: "10px"
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { login })(Login)