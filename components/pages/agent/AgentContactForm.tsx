import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { Form as FormAntd } from 'antd';
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaPencilAlt } from 'react-icons/fa';

interface ContactFormField {
  name: string;
  placeholder: string;
  rules: {
    required?: boolean;
    message?: string;
    type?: string;
  }[];
  icon: JSX.Element;
}

const formFields: ContactFormField[] = [
  {
    name: 'full_name',
    placeholder: 'Enter your full name',
    rules: [{ required: true, message: 'Please enter your full name' }],
    icon: <FaUserAlt />,
  },
  {
    name: 'email',
    placeholder: 'Enter your email address',
    rules: [
      { required: true, type: 'email', message: 'Please enter a valid email address' },
    ],
    icon: <FaEnvelope />,
  },
  {
    name: 'service_type',
    placeholder: 'Select Service Type',
    rules: [{ required: true, message: 'Please select a service type' }],
    icon: <FaUserAlt />, // Placeholder icon, replace with appropriate icon
  },
  {
    name: 'phone_number',
    placeholder: 'Enter your phone number',
    rules: [{ required: true, message: 'Please enter your phone number' }],
    icon: <FaPhoneAlt />,
  },
  {
    name: 'message',
    placeholder: 'Enter Your message',
    rules: [{ required: true, message: 'Please enter your message' }],
    icon: <FaPencilAlt />,
  },
];

interface AgentContactFormProps {
  onFinish: (values: { [key: string]: any }) => void;
}

const AgentContactForm: React.FC<AgentContactFormProps> = ({ onFinish }) => (
  <FormAntd id="contact-form" onFinish={onFinish}>
    <Row>
      {formFields.map((field) => (
        <Col key={field.name} xs={12} md={6}>
          <div className="input-item input-item-name ltn__custom-icon">
            <FormAntd.Item name={field.name} rules={field.rules}>
              <div>
              <input type="text" placeholder={field.placeholder} />
              <span className="inline-icon">{field.icon}</span>
              </div>
            </FormAntd.Item>
          </div>
        </Col>
      ))}
    </Row>
    <div className="btn-wrapper mt-0">
      <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">
        Send Message
      </button>
    </div>
    <p className="form-messege mb-0 mt-20"></p>
  </FormAntd>
);

export default AgentContactForm;
