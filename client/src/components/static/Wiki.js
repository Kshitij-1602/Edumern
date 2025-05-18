import React from 'react';
import { Card } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaDatabase, FaCodeBranch, FaServer, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Sidebar from '../layout/Sidebar';

const Wiki = () => {
    const technologies = [
        { name: 'React', icon: <FaReact size={40} />, color: '#61DAFB' },
        { name: 'Node.js', icon: <FaNodeJs size={40} />, color: '#339933' },
        { name: 'MongoDB', icon: <FaDatabase size={40} />, color: '#47A248' },
        { name: 'Redux', icon: <FaCodeBranch size={40} />, color: '#764ABC' },
        { name: 'Express', icon: <FaServer size={40} />, color: '#000000' },
        { name: 'JWT', icon: <FaLock size={40} />, color: '#D63AFF' }
    ];

    const features = [
        'User authentication and authorization',
        'Create, read, update, and delete posts',
        'Comment on posts',
        'Like and unlike posts',
        'Follow and unfollow users',
        'Search posts by topic',
        'User profiles with social links',
        'Responsive design for all devices'
    ];

    const screenshots = [
        {
            title: 'Home Page',
            description: 'View all posts and topics',
            image: '/images/home.png'
        },
        {
            title: 'Create Post',
            description: 'Create a new post with rich text editor',
            image: '/images/create-post.png'
        },
        {
            title: 'Profile',
            description: 'View and edit your profile',
            image: '/images/profile.png'
        }
    ];

    return (
        <Sidebar>
            <div className="py-4 px-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-4" style={{ color: '#393E41', fontWeight: '600' }}>EduForum Wiki</h2>
                    
                    <Card className="mb-4 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                        <Card.Body className="p-4">
                            <h3 className="mb-3" style={{ color: '#393E41', fontWeight: '600' }}>About</h3>
                            <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                EduForum is a modern social learning platform built with the MERN stack. 
                                It provides a space for students and educators to share knowledge, 
                                ask questions, and collaborate on various topics.
                            </p>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                        <Card.Body className="p-4">
                            <h3 className="mb-3" style={{ color: '#393E41', fontWeight: '600' }}>Technologies Used</h3>
                            <div className="row g-4">
                                {technologies.map((tech, index) => (
                                    <div key={index} className="col-md-4 col-sm-6">
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Card 
                                                className="h-100 border-0" 
                                                style={{ 
                                                    backgroundColor: `${tech.color}15`,
                                                    borderRadius: '15px'
                                                }}
                                            >
                                                <Card.Body className="p-4 text-center">
                                                    <div className="mb-3">
                                                        {React.cloneElement(tech.icon, { 
                                                            style: { color: tech.color }
                                                        })}
                                                    </div>
                                                    <h4 
                                                        className="mb-0" 
                                                        style={{ 
                                                            color: '#393E41',
                                                            fontWeight: '600'
                                                        }}
                                                    >
                                                        {tech.name}
                                                    </h4>
                                                </Card.Body>
                                            </Card>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                        <Card.Body className="p-4">
                            <h3 className="mb-3" style={{ color: '#393E41', fontWeight: '600' }}>Features</h3>
                            <div className="row g-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="col-md-6">
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Card 
                                                className="h-100 border-0" 
                                                style={{ 
                                                    backgroundColor: '#f8f9fa',
                                                    borderRadius: '15px'
                                                }}
                                            >
                                                <Card.Body className="p-3">
                                                    <p 
                                                        className="mb-0" 
                                                        style={{ 
                                                            color: '#666',
                                                            fontSize: '1rem'
                                                        }}
                                                    >
                                                        {feature}
                                                    </p>
                                                </Card.Body>
                                            </Card>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </motion.div>
            </div>
        </Sidebar>
    );
};

export default Wiki;
