import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const PatientInfoStep = ({ patientInfo, onPatientInfoChange, errors }) => {
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
  ];

  const handleInputChange = (field, value) => {
    onPatientInfoChange({
      ...patientInfo,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          Patient Information
        </h2>
        <p className="text-muted-foreground">
          Please provide your details for the appointment
        </p>
      </div>
      <div className="medical-card p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Icon name="User" size={20} className="text-primary" />
          <h3 className="text-lg font-medium text-text-primary">Personal Details</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            label="Full Name"
            placeholder="Enter your full name"
            value={patientInfo?.fullName || ''}
            onChange={(e) => handleInputChange('fullName', e?.target?.value)}
            error={errors?.fullName}
            required
          />

          <Input
            type="number"
            label="Age"
            placeholder="Enter your age"
            value={patientInfo?.age || ''}
            onChange={(e) => handleInputChange('age', e?.target?.value)}
            error={errors?.age}
            min="1"
            max="120"
            required
          />

          <Select
            label="Gender"
            placeholder="Select gender"
            options={genderOptions}
            value={patientInfo?.gender || ''}
            onChange={(value) => handleInputChange('gender', value)}
            error={errors?.gender}
            required
          />

          <Input
            type="tel"
            label="Phone Number"
            placeholder="Enter your phone number"
            value={patientInfo?.phone || ''}
            onChange={(e) => handleInputChange('phone', e?.target?.value)}
            error={errors?.phone}
            required
          />
        </div>
      </div>
      <div className="medical-card p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Icon name="Mail" size={20} className="text-primary" />
          <h3 className="text-lg font-medium text-text-primary">Contact Information</h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <Input
            type="email"
            label="Email Address"
            placeholder="Enter your email address"
            value={patientInfo?.email || ''}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            error={errors?.email}
            description="We'll send appointment confirmation to this email"
            required
          />

          <Input
            type="text"
            label="Address"
            placeholder="Enter your address"
            value={patientInfo?.address || ''}
            onChange={(e) => handleInputChange('address', e?.target?.value)}
            error={errors?.address}
          />
        </div>
      </div>
      <div className="medical-card p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Icon name="FileText" size={20} className="text-primary" />
          <h3 className="text-lg font-medium text-text-primary">Additional Information</h3>
        </div>

        <div className="space-y-4">
          <Input
            type="text"
            label="Reason for Visit"
            placeholder="Brief description of your concern"
            value={patientInfo?.reason || ''}
            onChange={(e) => handleInputChange('reason', e?.target?.value)}
            error={errors?.reason}
            description="This helps the doctor prepare for your appointment"
          />

          <div className="space-y-2">
            <label className="block text-sm font-medium text-text-primary">
              Medical History (Optional)
            </label>
            <textarea
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
              rows="3"
              placeholder="Any relevant medical history, allergies, or current medications"
              value={patientInfo?.medicalHistory || ''}
              onChange={(e) => handleInputChange('medicalHistory', e?.target?.value)}
            />
            <p className="text-xs text-muted-foreground">
              This information is confidential and helps provide better care
            </p>
          </div>
        </div>
      </div>
      <div className="medical-card p-4 bg-primary/5 border-primary/20">
        <div className="flex items-start space-x-3">
          <Icon name="Shield" size={20} className="text-primary mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-medium text-primary">
              Your Privacy is Protected
            </p>
            <p className="text-xs text-muted-foreground">
              All information is encrypted and HIPAA compliant. We never share your personal data without consent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfoStep;