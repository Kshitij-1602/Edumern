import React, { useEffect } from 'react'
import { Paper, IconButton, Avatar } from '@material-ui/core'
import { Comment, Block, KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons'
import { addLikeById, addDislikeById, getPost } from '../../actions/post'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function PostItemById({ getPost, post: {post, loading}, addLikeById, addDislikeById, postId }) {
    useEffect(() => {
        getPost(postId)
    }, [getPost])
    return !loading && post !== null && (
        <div style={previewStyle}>
            <Paper elevation={3}>
                <Link to={`/profile/${post.user}`} style={linkStyle}>
                    <Avatar src={post.avatar} style={avatarStyle}/>
                    <span style={nameStyle}>{post.name}</span>
                </Link>
                <h3 style={textStyle}>{post.title}</h3>
                <p style={textStyle}>{post.text}</p>

                <div style={buttonStyle}>
                    <IconButton size='small' onClick={e => addLikeById(post._id)}>
                        <KeyboardArrowUp fontSize='default' />
                    </IconButton>
                    <h5>{post.likes.length - post.dislikes.length}</h5>
                    <IconButton size='small' onClick={e => addDislikeById(post._id)}>
                        <KeyboardArrowDown fontSize='default' />
                    </IconButton>
                    <IconButton size='small' component={Link} to={`/posts/${post._id}`}>
                        <Comment fontSize='inherit' />
                        <h5>{post.comments.length}</h5>
                        <span style={{ fontSize: '0.7em', marginLeft: '2px' }}>
                            Comment
                        </span>
                    </IconButton>
                    <IconButton size='small' href="mailto:devankrf@gmail.com?subject=Reporting content from EduForum">
                        <Block fontSize='inherit' />
                        <span style={{ fontSize: '0.7em' }}>Report</span>
                    </IconButton>
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

PostItemById.propTypes = {
    addLikeById: PropTypes.func.isRequired,
    addDislikeById: PropTypes.func.isRequired,
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    post: state.post
})
export default connect(mapStateToProps, { addLikeById, addDislikeById, getPost })( PostItemById )
