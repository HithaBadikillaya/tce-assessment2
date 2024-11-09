
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent ! We will get back to you soon');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
      <textarea name="message" placeholder="Your feedback/message to us" onChange={handleChange} required></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;