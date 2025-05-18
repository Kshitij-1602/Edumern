import React from 'react'
import { Button } from 'react-bootstrap'
import { FaTrash, FaFlag } from 'react-icons/fa'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { deleteComment } from '../../actions/post'

const CommentItem = ({ 
    postId, 
    comment: { _id, text, name, avatar, user, date },
    auth,
    deleteComment
}) => {
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this comment?')) {
            deleteComment(postId, _id)
        }
    }

    return (
        <div className="comment-item mb-3 p-3" style={{ 
            backgroundColor: '#f8f9fa', 
            borderRadius: '10px',
            border: '1px solid #e9ecef'
        }}>
            <div className="d-flex align-items-center mb-2">
                <Link to={`/profile/${user}`} className="text-decoration-none">
                    <div className="d-flex align-items-center">
                        <img 
                            src={avatar} 
                            alt={name}
                            className="rounded-circle me-2"
                            style={{ 
                                width: '35px', 
                                height: '35px', 
                                objectFit: 'cover',
                                border: '2px solid #fff',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                        />
                        <div>
                            <h6 className="mb-0" style={{ color: '#393E41', fontWeight: '600', fontSize: '0.9rem' }}>{name}</h6>
                            <small className="text-muted" style={{ fontSize: '0.8rem' }}>
                                {new Date(date).toLocaleDateString()}
                            </small>
                        </div>
                    </div>
                </Link>
            </div>
            <p className="mb-3" style={{ 
                color: '#666', 
                fontSize: '0.95rem', 
                lineHeight: '1.5',
                marginLeft: '47px' // Aligns with the name after the avatar
            }}>{text}</p>
            <div className="d-flex align-items-center" style={{ marginLeft: '47px' }}>
                <Link 
                    to={`/report/comment/${_id}`} 
                    className="btn btn-light btn-sm me-2" 
                    style={{ 
                        borderRadius: '15px', 
                        padding: '5px 10px',
                        backgroundColor: '#fff',
                        border: '1px solid #e9ecef',
                        color: '#666',
                        transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                        e.currentTarget.style.color = '#6962A6';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff';
                        e.currentTarget.style.color = '#666';
                    }}
                >
                    <FaFlag className="me-1" />
                    Report
                </Link>
                {!auth.loading && user === auth.user._id && (
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={handleDelete}
                        style={{ 
                            borderRadius: '15px', 
                            padding: '5px 10px',
                            backgroundColor: '#fff',
                            border: '1px solid #dc3545',
                            color: '#dc3545',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#dc3545';
                            e.currentTarget.style.color = '#fff';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#fff';
                            e.currentTarget.style.color = '#dc3545';
                        }}
                    >
                        <FaTrash className="me-1" />
                        Delete
                    </Button>
                )}
            </div>
        </div>
    )
}

CommentItem.propTypes = {
    postId: PropTypes.string.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { deleteComment })(CommentItem)
