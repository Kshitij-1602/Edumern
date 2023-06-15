import React, { useState } from 'react'
import { Paper, TextField, Button } from '@material-ui/core'
import Sidebar from '../layout/Sidebar'
import BlockIcon from '@material-ui/icons/Block'
import { Fragment } from 'react'
import { reportContent } from '../../actions/post'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const ReportComment = ({ history, reportContent, match }) => {
    const [formData, setFormData] =  useState({
        email: '',
        title: '',
        description: ''
    })
    const {
        email,
        title,
        description
    } = formData
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const handleSubmit = e => {
        e.preventDefault()
        const contentid = match.params.id
        const reporttype = 'comment'
        reportContent(contentid, reporttype, formData, history)
    }
    return (
        <Fragment>
            <Sidebar />
            <Paper className='content reportStyle'>
                <div style={top}>
                    <BlockIcon color="secondary" style= {{ fontSize: 40 }} />
                    <h1 style={{ display: 'inline-block', marginLeft: '10px' }}>Report Content/User</h1>
                </div>
                <small style={{ marginLeft: '20px' }}>
                    All reports are confidential
                </small>
                <form onSubmit={e => handleSubmit(e)}>
                    <TextField
                        name='email'
                        value={email}
                        variant='outlined'
                        label='Email Address'
                        type='text'
                        fullwidth
                        style={inputStyle}
                        onChange={e => onChange(e)}
                        required
                    />
                    <TextField
                        name='title'
                        value={title}
                        variant='outlined'
                        label='Title'
                        type='text'
                        fullwidth
                        style={inputStyle}
                        onChange={e => onChange(e)}
                        required
                    />
                    <TextField
                        name='description'
                        value={description}
                        variant='outlined'
                        label='Description'
                        type='text'
                        multiline
                        rows={5}
                        fullwidth
                        style={inputStyle}
                        onChange={e => onChange(e)}
                        required
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

ReportComment.propTypes = {
    reportContent: PropTypes.func.isRequired
}
export default connect(null, { reportContent })( ReportComment )
