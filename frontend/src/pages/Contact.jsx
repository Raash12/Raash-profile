import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        'service_2rbjaao',          // Replace with your actual service ID
        'template_9ai0xdr',         // Replace with the correct Template ID
        formData,
        'ADkfEG9bLsqhR36gn'        // Ensure this is your correct public key
      );

      console.log('Email sent successfully!', response.status, response.text);
      setSuccessMessage('Your message has been sent successfully!');
      setErrorMessage('');
      setIsSubmitted(true);
      setFormData({ fullName: '', email: '', message: '' });
    } catch (err) {
      console.error('Failed to send email. Error:', err);
      setErrorMessage('Failed to send your message. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <p className="hero-subtitle">Feel free to reach out to me</p>
        
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        
        {!isSubmitted ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-input"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="button">Send Message</button>
          </form>
        ) : (
          <div className="confirmation-message">
            <h2>Thank You!</h2>
            <p>Your message has been received. We will get back to you shortly.</p>
            <button onClick={() => setIsSubmitted(false)} className="button">Send Another Message</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;