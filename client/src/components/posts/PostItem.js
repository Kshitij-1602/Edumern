import React from 'react'
import { Paper, IconButton, Avatar } from '@material-ui/core'
import { Comment, Block, KeyboardArrowUp, KeyboardArrowDown, Delete } from '@material-ui/icons'
import { addLike, addDislike, deletePost } from '../../actions/post'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function PostItem({
    addLike,
    addDislike,
    auth,
    deletePost,
    post: { _id, title, text, name, avatar, user, likes, dislikes, comments, date }
}) {
    return (
        <div style={previewStyle}>
            <Paper elevation={3}>
                <Link to={`/profile/${user}`} style={linkStyle}>
                    <Avatar src={avatar} style={avatarStyle}/>
                    <span style={nameStyle}>{name}</span>
                </Link>
                <h3 style={textStyle}>{title}</h3>
                <p style={textStyle}>{text}</p>

                <div style={buttonStyle}>
                    <IconButton size='small' onClick={e => addLike(_id)}>
                        <KeyboardArrowUp fontSize='default' />
                    </IconButton>
                    <h5>{likes.length - dislikes.length}</h5>
                    <IconButton size='small' onClick={e => addDislike(_id)}>
                        <KeyboardArrowDown fontSize='default' />
                    </IconButton>
                    <IconButton size='small' component={Link} to={`/posts/${_id}`}>
                        <Comment fontSize='inherit' />
                        <h5>{comments.length}</h5>
                        <span style={{ fontSize: '0.7em', marginLeft: '2px' }}>
                            Comment
                        </span>
                    </IconButton>
                    {/* <IconButton size='small' href="mailto:devankrf@gmail.com?subject=Reporting content from EduForum">
                        <Block fontSize='inherit' />
                        <span style={{ fontSize: '0.7em' }}>Report</span>
                    </IconButton> */}
                    <IconButton size='small' component={Link} to={`/report/post/${_id}`}>
                        <Block fontSize='inherit' />
                        <span style={{ fontSize: '0.7em' }}>Report</span>
                    </IconButton>
                    {!auth.loading && user === auth.user._id && (
                        <IconButton size='small' onClick={e => deletePost(_id)}>
                            <Delete fontSize='default' />
                        </IconButton>
                    )}
                </div>
            </Paper>
        </div>
    )
}
const previewStyle = {
    margin: '15px'
}

const textStyle = {
    margin: '14px',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word'
}

const buttonStyle = {
    margin: '5px',
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '5px'
}

const linkStyle = { 
    padding: '8px 8px',
    display: 'table',
    textDecoration: 'none' 
}
const avatarStyle = { 
    display: 'table-cell' 
}
const nameStyle = { 
    display: 'table-cell', 
    verticalAlign: 'middle', 
    padding: '5px', 
    color: 'black' 
}

PostItem.propTypes = {
    addLike: PropTypes.func.isRequired,
    addDislike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { addLike, addDislike, deletePost })( PostItem )
