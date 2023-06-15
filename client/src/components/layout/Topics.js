import React, { Fragment } from 'react'
import Sidebar from './Sidebar'
import {
    Code,
    Explore,
    Functions,
    Translate,
    FilterHdr,
    Ballot
} from '@material-ui/icons'
import { Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Topics = () => {
    return (
        <Fragment>
            <Sidebar />
            <div style={{ gridArea: 'content', marginLeft: '100px' }}>
                <h2>Topics:</h2>
                <table>
                    <tr>
                        <td style={dataCellStyle}>
                            <Link to='/posts' style={{ textDecoration: 'none' }}>
                                <Paper elevation={3} style={{ padding: '8px', textAlign: 'center' }}>
                                    <Ballot />
                                    <h3>All Posts</h3>
                                </Paper>
                            </Link>
                        </td>
                        <td style={dataCellStyle}>
                            <Link to='/posts/topic/maths' style={{ textDecoration: 'none' }}>
                                <Paper elevation={3} style={{ padding: '8px', textAlign: 'center' }}>
                                    <Functions />
                                    <h3>Maths</h3>
                                </Paper>
                            </Link>
                        </td>
                        <td style={dataCellStyle}>
                            <Link to='/posts/topic/programming' style={{ textDecoration: 'none' }}>
                                <Paper elevation={3} style={{ padding: '8px', textAlign: 'center' }}>
                                    <Code />
                                    <h3>Coding</h3>
                                </Paper>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={dataCellStyle}>
                            <Link to='/posts/topic/science' style={{ textDecoration: 'none' }}>
                                <Paper elevation={3} style={{ padding: '8px', textAlign: 'center' }}>
                                    <Explore />
                                    <h3>Science</h3>
                                </Paper>
                            </Link>
                        </td>
                        <td style={dataCellStyle}>
                            <Link to='/posts/topic/languages' style={{ textDecoration: 'none' }}>
                                <Paper elevation={3} style={{ padding: '8px', textAlign: 'center' }}>
                                    <Translate />
                                    <h3>Languages</h3>
                                </Paper>
                            </Link>
                        </td>
                        <td style={dataCellStyle}>
                            <Link to='/posts/topic/history' style={{ textDecoration: 'none' }}>
                                <Paper elevation={3} style={{ padding: '8px', textAlign: 'center' }}>
                                    <FilterHdr />
                                    <h3>History</h3>
                                </Paper>
                            </Link>
                        </td>
                    </tr>
                    {/* <tr>
                    </tr> */}
                </table>
            </div>
        </Fragment>
    )
}

const dataCellStyle = {
    margin: '60px',
    padding: '60px'
}

export default Topics
