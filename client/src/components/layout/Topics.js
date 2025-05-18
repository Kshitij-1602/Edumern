import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCode, FaHome, FaCalculator, FaLanguage, FaFlask, FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';

const Topics = () => {
    const topics = [
        { path: '/posts', icon: <FaHome size={40} />, title: 'All Posts', color: '#6962A6' },
        { path: '/posts/topic/maths', icon: <FaCalculator size={40} />, title: 'Maths', color: '#FF6B6B' },
        { path: '/posts/topic/programming', icon: <FaCode size={40} />, title: 'Programming', color: '#4ECDC4' },
        { path: '/posts/topic/science', icon: <FaFlask size={40} />, title: 'Science', color: '#45B7D1' },
        { path: '/posts/topic/languages', icon: <FaLanguage size={40} />, title: 'Languages', color: '#96CEB4' },
        { path: '/posts/topic/history', icon: <FaBookOpen size={40} />, title: 'History', color: '#FF9F1C' }
    ];

    return (
        <Sidebar>
            <div className="py-4 px-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-4" style={{ color: '#393E41', fontWeight: '600' }}>Topics</h2>
                    <Row className="g-4">
                        {topics.map((topic, index) => (
                            <Col key={topic.path} xs={12} sm={6} md={4}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link 
                                        to={topic.path} 
                                        className="text-decoration-none"
                                    >
                                        <Card 
                                            className="h-100 border-0 shadow-sm" 
                                            style={{ 
                                                borderRadius: '15px',
                                                overflow: 'hidden',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            <Card.Body className="p-4 text-center">
                                                <div 
                                                    className="mb-3 d-inline-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '80px',
                                                        height: '80px',
                                                        borderRadius: '50%',
                                                        backgroundColor: `${topic.color}15`,
                                                        color: topic.color
                                                    }}
                                                >
                                                    {topic.icon}
                                                </div>
                                                <h3 
                                                    className="mb-0" 
                                                    style={{ 
                                                        color: '#393E41',
                                                        fontWeight: '600'
                                                    }}
                                                >
                                                    {topic.title}
                                                </h3>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.div>
            </div>
        </Sidebar>
    );
};

export default Topics;
