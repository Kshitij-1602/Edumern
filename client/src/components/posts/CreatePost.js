import React, { Fragment, useState } from 'react'
import { Button, Form, Modal, FloatingLabel } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addPost } from '../../actions/post'
import { motion } from 'framer-motion'

const CreatePost = ({ addPost }) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [show, setShow] = useState(false)
    const [topic, setTopic] = useState('')
    const [loading, setLoading] = useState(false)

    const handleClose = () => {
        setShow(false)
        setTitle('')
        setText('')
        setTopic('')
        setLoading(false)
    }

    const handleSubmit = async () => {
        setLoading(true)
        await addPost({ title, text, topic })
        setLoading(false)
        handleClose()
    }

    const isDisabled = loading || !title.trim() || !text.trim() || !topic.trim()

    return (
        <Fragment>
            <div className="d-flex justify-content-end mb-3">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        variant="primary"
                        onClick={() => setShow(true)}
                        className="rounded-circle"
                        style={{
                            width: '50px',
                            height: '50px',
                            padding: '0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#6962A6',
                            border: 'none',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}
                    >
                        <FaPlus size={20} />
                    </Button>
                </motion.div>
            </div>

            <Modal
                show={show} 
                onHide={handleClose}
                centered
                size="lg"
            >
                <Modal.Header closeButton style={{ borderBottom: 'none', padding: '1.5rem' }}>
                    <Modal.Title style={{ color: '#393E41', fontWeight: '600' }}>Create New Thread</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: '0 1.5rem 1.5rem' }}>
                    <Form>
                        <FloatingLabel
                            controlId="title"
                            label="Post Title"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                placeholder="Enter post title"
                                style={{ borderRadius: '10px' }}
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="text"
                            label="Post Content"
                            className="mb-3"
                        >
                            <Form.Control
                                as="textarea"
                                value={text}
                                onChange={e => setText(e.target.value)}
                                placeholder="Write your post content here..."
                                style={{ 
                                    height: '200px',
                                    borderRadius: '10px',
                                    resize: 'none'
                                }}
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="topic"
                            label="Select Topic"
                            className="mb-3"
                        >
                            <Form.Select
                                value={topic}
                                onChange={e => setTopic(e.target.value)}
                                style={{ borderRadius: '10px' }}
                            >
                                <option value="">Choose a topic</option>
                                <option value="science">Science</option>
                                <option value="maths">Maths</option>
                                <option value="programming">Programming</option>
                                <option value="history">History</option>
                                <option value="languages">Languages</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ borderTop: 'none', padding: '1.5rem' }}>
                    <Button 
                        variant="light" 
                        onClick={handleClose}
                        style={{ 
                            borderRadius: '20px',
                            padding: '8px 20px',
                            marginRight: '10px'
                        }}
                    >
                        Cancel
                    </Button>
                    <motion.button
                        whileTap={{ scale: 0.96 }}
                        whileHover={{ scale: 1.04, boxShadow: '0 4px 16px rgba(105,98,166,0.10)' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        as={Button}
                        variant="primary"
                        onClick={handleSubmit}
                        disabled={isDisabled}
                        style={{
                            backgroundColor: '#6962A6',
                            border: 'none',
                            borderRadius: '20px',
                            padding: '8px 20px',
                            opacity: isDisabled ? 0.6 : 1,
                            pointerEvents: isDisabled ? 'none' : 'auto',
                            cursor: isDisabled ? 'not-allowed' : 'pointer',
                            fontWeight: 600
                        }}
                        onMouseOver={e => {
                            if (!isDisabled) {
                                e.target.style.backgroundColor = '#8377D1';
                            }
                        }}
                        onMouseOut={e => {
                            if (!isDisabled) {
                                e.target.style.backgroundColor = '#6962A6';
                            }
                        }}
                    >
                        <FaPlus className="me-2" />
                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Creating...
                            </>
                        ) : (
                            'Create Post'
                        )}
                    </motion.button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

CreatePost.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(CreatePost)