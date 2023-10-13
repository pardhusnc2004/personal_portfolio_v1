import React, { useState } from 'react';
import '../styles/home.css';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to a server
    console.log('Form data submitted:', formData);
    // Optionally, reset the form fields
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-me">
      <h5 className=' text-center'>Contact Me</h5>
      <form onSubmit={handleSubmit} style={{fontSize: "10px"}}>
        <div className="form-group row">
          <label className='col-md-2 col-form-label' htmlFor="name">Name</label>
          <input className='col-md-10'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div class="form-group row">
          <label for="name" class="col-md-2 col-form-label">Name:</label>
          <div class="col-md-10">
            <input type="text" id="name" name="name" class="form-control" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}