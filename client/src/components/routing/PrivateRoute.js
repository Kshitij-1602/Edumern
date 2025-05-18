import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => {
    // Check if we're in development environment
    const isDevelopment = 'development'
    
    // // In development, bypass authentication check
    // if (isDevelopment) {
    //     return <Route {...rest} render={props => <Component {...props} />} />
    // }
    
    // // In production, maintain original authentication logic
    return (
        <Route 
            {...rest} 
            render={props => 
                !isAuthenticated && !loading ? 
                (<Redirect to='/' />) : 
                (<Component {...props} />)
            } 
        />
    )
}

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
