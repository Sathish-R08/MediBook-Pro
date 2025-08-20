import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryOptions = [
    { value: 'appointments', label: 'Appointment Booking' },
    { value: 'technical', label: 'Technical Issues' },
    { value: 'billing', label: 'Billing & Insurance' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'feedback', label: 'Feedback & Suggestions' },
    { value: 'partnership', label: 'Partnership Opportunities' }
  ];

  const maxMessageLength = 500;

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: value
    }));
    
    if (errors?.inquiryType) {
      setErrors(prev => ({
        ...prev,
        inquiryType: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData?.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="medical-card p-8 text-center">
        <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-6">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        
        <h3 className="text-2xl font-semibold text-text-primary mb-4">
          Message Sent Successfully!
        </h3>
        
        <p className="text-text-secondary mb-6">
          Thank you for contacting us. We've received your inquiry and will respond within 24 hours during business days.
        </p>
        
        <div className="space-y-3 text-sm text-text-secondary">
          <div className="trust-indicator justify-center">
            <Icon name="Clock" size={16} className="text-primary" />
            <span>Response time: Within 24 hours</span>
          </div>
          
          <div className="trust-indicator justify-center">
            <Icon name="Shield" size={16} className="text-success" />
            <span>Your information is secure and HIPAA compliant</span>
          </div>
        </div>
        
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="mt-6"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="medical-card p-6">
      <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
        <Icon name="MessageSquare" size={24} className="text-primary mr-3" />
        Send Us a Message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData?.name}
            onChange={handleInputChange}
            error={errors?.name}
            required
          />
          
          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData?.email}
            onChange={handleInputChange}
            error={errors?.email}
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="+1 (555) 123-4567"
            value={formData?.phone}
            onChange={handleInputChange}
            error={errors?.phone}
            required
          />
          
          <Select
            label="Inquiry Type"
            placeholder="Select inquiry type"
            options={inquiryOptions}
            value={formData?.inquiryType}
            onChange={handleSelectChange}
            error={errors?.inquiryType}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            name="message"
            rows={6}
            placeholder="Please describe your inquiry in detail..."
            value={formData?.message}
            onChange={handleInputChange}
            maxLength={maxMessageLength}
            className={`w-full px-4 py-3 border rounded-lg resize-none transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors?.message ? 'border-error' : 'border-border'
            }`}
          />
          <div className="flex justify-between items-center mt-2">
            <span className={`text-sm ${errors?.message ? 'text-error' : 'text-text-secondary'}`}>
              {errors?.message || ''}
            </span>
            <span className="text-sm text-text-secondary">
              {formData?.message?.length}/{maxMessageLength}
            </span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            variant="default"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="left"
            className="flex-1"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
          
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setFormData({
                name: '',
                email: '',
                phone: '',
                inquiryType: '',
                message: ''
              });
              setErrors({});
            }}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Clear Form
          </Button>
        </div>
        
        <div className="pt-4 border-t border-border">
          <div className="trust-indicator">
            <Icon name="Shield" size={16} className="text-success" />
            <span>Your information is protected and HIPAA compliant</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;