import { Paper } from '@material-ui/core'
import React, { Fragment } from 'react'
import Sidebar from '../layout/Sidebar'

const Rules = () => {
    return (
        <Fragment>
            <Sidebar />
            <Paper style={ruleStyle}>
                <h1> Rules </h1>
                <br />
                <h3> Type of content that will not be allowed: </h3>
                <p>
                    1. Doxxing: This site is for anonymous posting, doxxing of users will get you banned from the site.<br />
                    2. Abusing: Discussion and debating is allowed but abusing other users is not allowed.<br />
                    3. Promotions: Promotion of any products or services is not allowed.<br />
                    4. NSFW: NSFW content is not allowed.<br />
                </p>
            </Paper>
        </Fragment>
    )
}

const ruleStyle = { 
    gridArea: 'content', 
    margin: '20px', 
    paddingLeft: '30px', 
    paddingTop: '10px', 
    paddingRight: '20px', 
    height: '600px'
}

export default Rules
