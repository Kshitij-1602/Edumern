import React from 'react'
import PropTypes from 'prop-types'
import { removeAlert } from '../../actions/alert'
import { connect } from 'react-redux'

const Snackbar = ({ alerts, removeAlert }) => 
    alerts !== null &&
    alerts.length > 0 &&
    (<div className='snackbar-container'>
        {alerts.map(alert => (
            <div key={alert.id} className={`snackbar snackbar-${alert.alertType}`}>
                {alert.msg}
                <button className='snackbar-button' onClick={() => removeAlert(alert.id)}>X</button>
            </div>
        ))}
    </div>)


Snackbar.propTypes = {
    alerts: PropTypes.array.isRequired,
    removeAlert: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    alerts: state.alert
})
export default connect(mapStateToProps, { removeAlert })(Snackbar)
