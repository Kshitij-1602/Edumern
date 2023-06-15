import React from 'react'
import { Paper, IconButton, Avatar } from '@material-ui/core'
import { Block, KeyboardArrowUp, KeyboardArrowDown, Delete } from '@material-ui/icons'
import { addCommentLike, addCommentDislike, deleteComment } from '../../actions/post'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function CommentItem({
    postId,
    addCommentLike,
    addCommentDislike,
    deleteComment,
    auth,
    comment: { _id, text, name, avatar, user, likes, dislikes, date }
}) {
    return (
        <div style={previewStyle}>
            <Paper elevation={3}>
                <Link to={`/profile/${user}`} style={linkStyle}>
                    <Avatar src={avatar} style={avatarStyle}/>
                    <span style={nameStyle}>{name}</span>
                </Link>
                <p style={textStyle}>{ text }</p>
                <div style={buttonStyle}>
                    <IconButton size='small' onClick={e => addCommentLike(postId, _id)}>
                        <KeyboardArrowUp fontSize='default' />
                    </IconButton>
                    <h5>{likes.length - dislikes.length}</h5>
                    <IconButton size='small' onClick={e => addCommentDislike(postId, _id)}>
                        <KeyboardArrowDown fontSize='default' />
                    </IconButton>
                    {/* <IconButton size='small' href="mailto:devankrf@gmail.com?subject=Reporting content from EduForum">
                        <Block fontSize='inherit' />
                        <span style={{ fontSize: '0.7em' }}>Report</span>
                    </IconButton> */}
                    <IconButton size='small' component={Link} to={`/report/comment/${_id}`}>
                        <Block fontSize='inherit' />
                        <span style={{ fontSize: '0.7em' }}>Report</span>
                    </IconButton>
                    {!auth.loading && user === auth.user._id && (
                        <IconButton size='small' onClick={e => deleteComment(postId, _id)}>
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

CommentItem.propTypes = {
    deleteComment: PropTypes.func.isRequired,
    addCommentLike: PropTypes.func.isRequired,
    addCommentDislike: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, { addCommentLike, addCommentDislike, deleteComment })( CommentItem )
