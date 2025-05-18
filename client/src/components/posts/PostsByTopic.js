import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import CreatePost from './CreatePost'
import Sidebar from '../layout/Sidebar'
import { getPostsByTopic } from '../../actions/post'
import PropTypes from 'prop-types'
import PostItem from './PostItem'
import { motion, AnimatePresence } from 'framer-motion'
import { Spinner } from 'react-bootstrap'

const PostsByTopic = ({ getPostsByTopic, post: {posts, loading}, match }) => {
    useEffect(() => {
        getPostsByTopic(match.params.topicName)
    }, [getPostsByTopic, match.params.topicName])

    if (loading) {
        return (
            <Sidebar>
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                    <Spinner animation="border" role="status" variant="primary" style={{ color: '#6962A6', width: '3rem', height: '3rem' }}>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            </Sidebar>
        )
    }

    return (
        <Sidebar>
            <div className="py-4 px-3">
                <div className="d-flex align-items-start justify-content-between mb-4" style={{ gap: '1rem' }}>
                    <h2 className="mb-0" style={{ color: '#393E41', fontWeight: '600' }}>
                        {match.params.topicName.charAt(0).toUpperCase() + match.params.topicName.slice(1)} Posts
                    </h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <CreatePost />
                    </motion.div>
                </div>
                <div>
                    <AnimatePresence>
                        {posts.map((post, index) => (
                            <motion.div
                                key={post._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <PostItem post={post} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {posts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-5"
                            style={{
                                backgroundColor: '#f8f9fa',
                                borderRadius: '15px',
                                marginTop: '2rem'
                            }}
                        >
                            <h4 className="text-muted mb-3">No posts yet</h4>
                            <p className="text-muted mb-0">Be the first to start a discussion!</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </Sidebar>
    )
}

PostsByTopic.propTypes = {
    getPostsByTopic: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    post: state.post
})
export default connect(mapStateToProps, { getPostsByTopic })(PostsByTopic)