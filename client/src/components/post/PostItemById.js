import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { FaCommentAlt, FaFlag, FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { addLikeById, addDislikeById, getPost } from '../../actions/post'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function PostItemById({ getPost, post: {post, loading}, addLikeById, addDislikeById, postId }) {
    useEffect(() => {
        getPost(postId)
    }, [getPost, postId])
    if (loading || !post) return null
    return (
        <>
            <div className="d-flex align-items-center mb-3">
                <Link to={`/profile/${post.user}`} className="text-decoration-none">
                    <div className="d-flex align-items-center">
                        <img 
                            src={post.avatar} 
                            alt={post.name}
                            className="rounded-circle me-2"
                            style={{ 
                                width: '40px', 
                                height: '40px', 
                                objectFit: 'cover',
                                border: '2px solid #fff',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                        />
                        <div>
                            <h6 className="mb-0" style={{ color: '#393E41', fontWeight: '600' }}>{post.name}</h6>
                            <small className="text-muted">
                                {post.date ? new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                }) : 'Date not available'}
                            </small>
                        </div>
                    </div>
                </Link>
            </div>
            <h4 className="mb-2" style={{ color: '#393E41', fontWeight: '600' }}>{post.title}</h4>
            <p className="mb-3" style={{ color: '#666', lineHeight: '1.6' }}>{post.text}</p>
            <div className="d-flex align-items-center mb-2">
                <Button
                    variant="light"
                    className="me-2"
                    onClick={() => addLikeById(post._id)}
                    style={{ borderRadius: '20px', padding: '6px 12px', color: '#393E41', border: 'none' }}
                >
                    <FaArrowUp className="me-1" />
                </Button>
                <span style={{ fontWeight: 600, color: '#393E41', marginRight: 8 }}>{post.likes.length - post.dislikes.length}</span>
                <Button
                    variant="light"
                    className="me-2"
                    onClick={() => addDislikeById(post._id)}
                    style={{ borderRadius: '20px', padding: '6px 12px', color: '#393E41', border: 'none' }}
                >
                    <FaArrowDown className="me-1" />
                </Button>
                <Link to={`/posts/${post._id}`} className="btn btn-light btn-sm me-2" style={{ borderRadius: '15px', padding: '5px 10px', color: '#393E41', border: 'none' }}>
                    <FaCommentAlt className="me-1" />
                    <span>{post.comments.length}</span>
                    <span className="ms-1">Comment</span>
                </Link>
                <Button
                    variant="light"
                    className="btn-sm"
                    style={{ borderRadius: '15px', padding: '5px 10px', color: '#dc3545', border: 'none' }}
                    href={`mailto:devankrf@gmail.com?subject=Reporting content from EduForum`}
                >
                    <FaFlag className="me-1" />
                    Report
                </Button>
            </div>
        </>
    )
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
