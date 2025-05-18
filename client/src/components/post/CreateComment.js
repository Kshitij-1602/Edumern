import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addComment } from '../../actions/post'
import { motion } from 'framer-motion'
import { FaCommentDots } from 'react-icons/fa'

const CreateComment = ({ postId, addComment }) => {
    const [text, setText] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen(false)
        setText('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim()) {
            addComment(postId, { text })
            handleClose()
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Write a comment..."
                        value={text}
                        onChange={e => setText(e.target.value)}
                        style={{
                            borderRadius: '10px',
                            resize: 'none',
                            border: '1px solid #e9ecef',
                            padding: '12px',
                            backgroundColor: '#f8f9fa'
                        }}
                    />
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <motion.button
                        whileTap={{ scale: 0.96 }}
                        whileHover={{ scale: 1.04, boxShadow: '0 4px 16px rgba(105,98,166,0.10)' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        as={Button}
                        type="submit"
                        variant="primary"
                        disabled={!text.trim()}
                        style={{
                            backgroundColor: '#6962A6',
                            border: 'none',
                            borderRadius: '20px',
                            padding: '8px 20px',
                            opacity: !text.trim() ? 0.6 : 1,
                            pointerEvents: !text.trim() ? 'none' : 'auto',
                            cursor: !text.trim() ? 'not-allowed' : 'pointer',
                            fontWeight: 600
                        }}
                        onMouseOver={e => {
                            if (text.trim()) {
                                e.target.style.backgroundColor = '#8377D1';
                            }
                        }}
                        onMouseOut={e => {
                            if (text.trim()) {
                                e.target.style.backgroundColor = '#6962A6';
                            }
                        }}
                    >
                        <FaCommentDots className="me-2" />
                        Post Comment
                    </motion.button>
                </div>
            </Form>
        </motion.div>
    )
}

CreateComment.propTypes = {
    addComment: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired
}

export default connect(null, { addComment })(CreateComment)