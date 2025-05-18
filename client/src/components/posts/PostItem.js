import React, { useState } from 'react';
import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaThumbsUp, FaThumbsDown, FaComment, FaFlag, FaTrash } from 'react-icons/fa';
import { addLike, addDislike, deletePost } from '../../actions/post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function PostItem({
    addLike,
    addDislike,
    auth,
    deletePost,
    post: { _id, title, text, name, avatar, user, likes, dislikes, comments, date }
}) {
    const [isLiked, setIsLiked] = useState(likes.includes(auth.user?._id));
    const [isDisliked, setIsDisliked] = useState(dislikes.includes(auth.user?._id));

    const handleLike = () => {
        if (!isLiked) {
            addLike(_id);
            setIsLiked(true);
            if (isDisliked) {
                setIsDisliked(false);
            }
        }
    };

    const handleDislike = () => {
        if (!isDisliked) {
            addDislike(_id);
            setIsDisliked(true);
            if (isLiked) {
                setIsLiked(false);
            }
        }
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            deletePost(_id);
        }
    };

    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
        >
            <Card className="mb-3 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                        <Link to={`/profile/${user}`} className="text-decoration-none">
                            <div className="d-flex align-items-center">
                                <img 
                                    src={avatar} 
                                    alt={name}
                                    className="rounded-circle me-3"
                                    style={{ 
                                        width: '45px', 
                                        height: '45px', 
                                        objectFit: 'cover',
                                        border: '2px solid #f8f9fa'
                                    }}
                                />
                                <div>
                                    <h6 className="mb-0" style={{ color: '#393E41', fontWeight: '600' }}>{name}</h6>
                                    <small className="text-muted">
                                        {new Date(date).toLocaleDateString()}
                                    </small>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <Link to={`/posts/${_id}`} className="text-decoration-none">
                        <Card.Title className="mb-3" style={{ color: '#393E41', fontWeight: '600' }}>{title}</Card.Title>
                        <Card.Text className="text-muted" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
                            {text}
                        </Card.Text>
                    </Link>

                    <div className="d-flex align-items-center mt-4">
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Like</Tooltip>}
                        >
                            <Button
                                variant="light"
                                size="sm"
                                className="me-2 d-flex align-items-center"
                                onClick={handleLike}
                                style={{
                                    backgroundColor: isLiked ? 'rgba(105, 98, 166, 0.1)' : 'transparent',
                                    color: isLiked ? '#6962A6' : '#666',
                                    border: 'none',
                                    borderRadius: '20px',
                                    padding: '6px 12px'
                                }}
                            >
                                <FaThumbsUp className="me-1" />
                                <span>{likes.length}</span>
                            </Button>
                        </OverlayTrigger>

                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Dislike</Tooltip>}
                        >
                            <Button
                                variant="light"
                                size="sm"
                                className="me-2 d-flex align-items-center"
                                onClick={handleDislike}
                                style={{
                                    backgroundColor: isDisliked ? 'rgba(105, 98, 166, 0.1)' : 'transparent',
                                    color: isDisliked ? '#6962A6' : '#666',
                                    border: 'none',
                                    borderRadius: '20px',
                                    padding: '6px 12px'
                                }}
                            >
                                <FaThumbsDown className="me-1" />
                                <span>{dislikes.length}</span>
                            </Button>
                        </OverlayTrigger>

                        <Link to={`/posts/${_id}`} className="text-decoration-none">
                            <Button
                                variant="light"
                                size="sm"
                                className="me-2 d-flex align-items-center"
                                style={{ 
                                    color: '#666', 
                                    border: 'none',
                                    borderRadius: '20px',
                                    padding: '6px 12px'
                                }}
                            >
                                <FaComment className="me-1" />
                                <span>{comments.length}</span>
                            </Button>
                        </Link>

                        <Link to={`/report/post/${_id}`} className="text-decoration-none">
                            <Button
                                variant="light"
                                size="sm"
                                className="me-2"
                                style={{ 
                                    color: '#666', 
                                    border: 'none',
                                    borderRadius: '20px',
                                    padding: '6px 12px'
                                }}
                            >
                                <FaFlag />
                            </Button>
                        </Link>

                        {!auth.loading && user === auth.user._id && (
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Delete Post</Tooltip>}
                            >
                                <Button
                                    variant="light"
                                    size="sm"
                                    onClick={handleDelete}
                                    style={{ 
                                        color: '#dc3545', 
                                        border: 'none',
                                        borderRadius: '20px',
                                        padding: '6px 12px'
                                    }}
                                >
                                    <FaTrash />
                                </Button>
                            </OverlayTrigger>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </motion.div>
    );
}

PostItem.propTypes = {
    addLike: PropTypes.func.isRequired,
    addDislike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { addLike, addDislike, deletePost })(PostItem);
