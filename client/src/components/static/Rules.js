import React from 'react';
import { Card } from 'react-bootstrap';
import { FaUserShield, FaExclamationTriangle, FaBullhorn, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Sidebar from '../layout/Sidebar';

const Rules = () => {
    const rules = [
        {
            title: 'No Doxxing',
            description: 'Do not share personal information about other users.',
            icon: <FaUserShield size={40} />,
            color: '#FF6B6B'
        },
        {
            title: 'No Abuse',
            description: 'Be respectful and kind to other users.',
            icon: <FaExclamationTriangle size={40} />,
            color: '#FF9F1C'
        },
        {
            title: 'No Promotions',
            description: 'Do not promote your own content or services.',
            icon: <FaBullhorn size={40} />,
            color: '#4ECDC4'
        },
        {
            title: 'No NSFW Content',
            description: 'Keep the content appropriate for all ages.',
            icon: <FaEye size={40} />,
            color: '#45B7D1'
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
                    <h2 className="mb-4" style={{ color: '#393E41', fontWeight: '600' }}>Community Rules</h2>
                    <div className="row g-4">
                        {rules.map((rule, index) => (
                            <div key={index} className="col-md-6">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Card 
                                        className="h-100 border-0 shadow-sm" 
                                        style={{ 
                                            borderRadius: '15px',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <Card.Body className="p-4">
                                            <div 
                                                className="mb-3 d-inline-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '50%',
                                                    backgroundColor: `${rule.color}15`,
                                                    color: rule.color
                                                }}
                                            >
                                                {rule.icon}
                                            </div>
                                            <h3 
                                                className="mb-2" 
                                                style={{ 
                                                    color: '#393E41',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                {rule.title}
                                            </h3>
                                            <p 
                                                className="mb-0" 
                                                style={{ 
                                                    color: '#666',
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                {rule.description}
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Sidebar>
    );
};

export default Rules;
