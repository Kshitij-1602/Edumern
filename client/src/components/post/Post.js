import React, {  useEffect } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../../actions/post'
import PropTypes from 'prop-types'
import Sidebar from '../layout/Sidebar'
import CreateComment from './CreateComment'
import CommentItem from './CommentItem'
import PostItemById from './PostItemById'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, Spinner } from 'react-bootstrap'

const Post = ({ getPost, post: {post, loading}, match }) => {
    useEffect(() => {
        getPost(match.params.id)
    }, [getPost, match.params.id])

    if (loading || !post) {
        return (
            <Sidebar>
                <div className="container py-4">
                    <div className="text-center">
                        <Spinner animation="border" role="status" variant="primary">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                </div>
            </Sidebar>
        )
    }

    return (
        <Sidebar>
            <div className="container py-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="mb-4 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                        <Card.Body className="p-4">
                            <PostItemById postId={post._id} />
                        </Card.Body>
                    </Card>

                    {/* Comments Section - no Card wrapper */}
                    <div className="mb-4 p-4" style={{ background: '#fff', borderRadius: '15px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                        <h5 className="mb-4" style={{ color: '#393E41', fontWeight: '600' }}>Comments</h5>
                        <CreateComment postId={post._id} />
                        <div className="mt-4">
                            <AnimatePresence>
                                {post.comments.map((comment, index) => (
                                    <motion.div
                                        key={comment._id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <CommentItem 
                                            comment={comment} 
                                            postId={post._id} 
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            {post.comments.length === 0 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-4"
                                >
                                    <p className="text-muted mb-0">No comments yet. Be the first to comment!</p>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </Sidebar>
    )
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPost })(Post)