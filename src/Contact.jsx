import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Dropdown, Alert } from 'react-bootstrap';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', variant: '' });

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceId = 'your_service_id';
    const templateId = 'your_template_id';
    const publicKey = 'your_public_key';

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(() => {
        setAlert({ show: true, message: 'Message sent successfully!', variant: 'success' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setAlert({ show: true, message: 'Failed to send message. Please try again.', variant: 'danger' });
      });
  };

  return (
    <div
      style={{
        background: '#111827',
        color: '#F3F4F6',
        padding: '50px 20px',
        minHeight: '100vh',
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <Container>
        <h1
          style={{
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#3B82F6',
          }}
        >
          Contact Me
        </h1>
        <p
          style={{
            textAlign: 'center',
            marginBottom: '50px',
            color: '#9CA3AF',
            fontSize: '1.1rem',
          }}
        >
          Feel free to reach out anytime! Fill out the form below or connect with me on social media.
        </p>
        {alert.show && (
          <Alert variant={alert.variant} onClose={() => setAlert({ ...alert, show: false })} dismissible>
            {alert.message}
          </Alert>
        )}
        <Row>
          <Col md={6}>
            <div
              style={{
                backgroundColor: '#1F2937',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
              }}
            >
              <h3 style={{ marginBottom: '20px', color: '#3B82F6' }}>Get in Touch</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    style={{
                      background: '#2D3748',
                      border: 'none',
                      color: '#F3F4F6',
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email (e.g., example@domain.com)"
                    required
                    style={{
                      background: '#2D3748',
                      border: 'none',
                      color: '#F3F4F6',
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="message" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here"
                    required
                    style={{
                      background: '#2D3748',
                      border: 'none',
                      color: '#F3F4F6',
                    }}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  style={{
                    background: '#3B82F6',
                    border: 'none',
                    padding: '10px 20px',
                  }}
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
          <Col md={6}>
            <div
              style={{
                marginTop: '30px',
                textAlign: 'center',
              }}
            >
              <h3 style={{ color: '#3B82F6' }}>Connect with Me</h3>
              <p style={{ color: '#9CA3AF' }}>
                Follow me on social media for updates and more.
              </p>
              <div style={{ fontSize: '24px', display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
                <a
                  href="https://www.facebook.com/envergajino"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#3B82F6', textDecoration: 'none' }}
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://github.com/JinoEnverga"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#F3F4F6', textDecoration: 'none' }}
                >
                  <FaGithub />
                </a>
              </div>
              <Dropdown className="mt-4">
                <Dropdown.Toggle
                  style={{
                    background: '#3B82F6',
                    border: 'none',
                  }}
                >
                  More Options
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#" onClick={toggleContactInfo}>
                    Contact Me
                  </Dropdown.Item>
                  <Dropdown.Item href="/about">About Me</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {showContactInfo && (
                <div
                  style={{
                    marginTop: '20px',
                    backgroundColor: '#1F2937',
                    padding: '15px',
                    borderRadius: '8px',
                  }}
                >
                  <h5>Contact Information</h5>
                  <p>
                    <strong>Email:</strong> jenverga@gbox.ncf.edu.ph
                  </p>
                  <p>
                    <strong>Phone:</strong> 09917337143
                  </p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
