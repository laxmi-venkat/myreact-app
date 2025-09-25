import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./ApplyModal.css";

const ApplyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    companyName: "",
    yourName: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Validate form fields
  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

    if (!values.companyName) errors.companyName = "Company Name is required";
    if (!values.yourName) errors.yourName = "Your Name is required";
    if (!values.email) errors.email = "Email is required";
    else if (!emailRegex.test(values.email)) errors.email = "Invalid email format";
    if (!values.phone) errors.phone = "Phone Number is required";
    if (!values.message) errors.message = "Description is required";
    if (!values.file) errors.file = "PPT or PDF is required";

    return errors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      console.log("Form Data:", formData);
      onClose();
    }
  };

  useEffect(() => {
    if (isSubmit && Object.keys(formErrors).length === 0) {
      console.log("Submitted Successfully:", formData);
    }
  }, [formErrors, isSubmit, formData]);

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Funding Application</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Company Name */}
          <Form.Group className="mb-3">
            <Form.Label >Company Name 
              <span className="required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
            <p className="error">{formErrors.companyName}</p>
          </Form.Group>

          {/* Your Name */}
          <Form.Group className="mb-3">
            <Form.Label > Enter Your Name
              <span className="required">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="yourName"
              value={formData.yourName}
              onChange={handleChange}
            />
            <p className="error">{formErrors.yourName}</p>
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label>Email
              <span className="required">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <p className="error">{formErrors.email}</p>
          </Form.Group>

          {/* Phone */}
          <Form.Group className="mb-3">
            <Form.Label>Phone
              <span className="required">*</span>
            </Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <p className="error">{formErrors.phone}</p>
          </Form.Group>

          {/* File Upload */}
          <Form.Group className="mb-3">
            <Form.Label>PDF or PPT
              <span className="required">*</span>
            </Form.Label>
            <Form.Control
              type="file"
              name="file"
              onChange={handleChange}
              accept=".pdf,.ppt,.pptx"
            />
            <p className="error">{formErrors.file}</p>
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-3">
            <Form.Label>Description
              <span className="required">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <p className="error">{formErrors.message}</p>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ApplyModal;
