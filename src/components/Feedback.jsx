// src/components/Feedback.js
import React from 'react';
import './Feedback.css';

const Feedback = () => {
  const feedbacks = [
    {
      customer: 'Jenny Wilson',
      rating: 5,
      feedback: 'The food was excellent and so was the service.',
      profilePic: 'https://via.placeholder.com/20'
    },
    {
      customer: 'Dianne Russell',
      rating: 4,
      feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia.',
      profilePic: 'https://via.placeholder.com/20'
    },
    {
      customer: 'Devon Lane',
      rating: 4,
      feedback: 'Normally wines are thin, theirs are lean meaty and tender.',
      profilePic: 'https://via.placeholder.com/20'
    },
  ];

  return (
    <div className="feedback">
      <h3>Customer's Feedback</h3>
      {feedbacks.map((feedback, index) => (
        <div key={index} className={`feedback-card ${index < feedbacks.length - 1 ? 'border-bottom' : ''}`}>
          <div className="customer-info">
            <img src={feedback.profilePic} alt={feedback.customer} className="profile-pic" />
            <h4>{feedback.customer}</h4>
          </div>
          <div className="rating">
            {'★'.repeat(feedback.rating)}
            {'☆'.repeat(5 - feedback.rating)}
          </div>
          <p>{feedback.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
