import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactDetails = [
    {
      id: 1,
      title: "Appointments",
      phone: "+1 (555) 123-4567",
      email: "appointments@medibookpro.com",
      icon: "Calendar",
      description: "Schedule or modify appointments"
    },
    {
      id: 2,
      title: "Billing Support",
      phone: "+1 (555) 234-5678",
      email: "billing@medibookpro.com",
      icon: "CreditCard",
      description: "Payment and insurance inquiries"
    },
    {
      id: 3,
      title: "Technical Support",
      phone: "+1 (555) 345-6789",
      email: "support@medibookpro.com",
      icon: "Headphones",
      description: "Platform and technical assistance"
    },
    {
      id: 4,
      title: "General Inquiries",
      phone: "+1 (555) 456-7890",
      email: "info@medibookpro.com",
      icon: "MessageCircle",
      description: "General questions and information"
    }
  ];

  const operatingHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM EST" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM EST" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM EST" }
  ];

  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="medical-card p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
          <Icon name="Phone" size={24} className="text-primary mr-3" />
          Contact Information
        </h3>
        
        <div className="space-y-4">
          {contactDetails?.map((contact) => (
            <div key={contact?.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted transition-smooth">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                <Icon name={contact?.icon} size={20} className="text-primary" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-text-primary mb-1">{contact?.title}</h4>
                <p className="text-sm text-text-secondary mb-3">{contact?.description}</p>
                
                <div className="space-y-2">
                  <button
                    onClick={() => handleCall(contact?.phone)}
                    className="flex items-center text-sm text-primary hover:text-primary/80 transition-smooth"
                  >
                    <Icon name="Phone" size={16} className="mr-2" />
                    {contact?.phone}
                  </button>
                  
                  <button
                    onClick={() => handleEmail(contact?.email)}
                    className="flex items-center text-sm text-primary hover:text-primary/80 transition-smooth"
                  >
                    <Icon name="Mail" size={16} className="mr-2" />
                    {contact?.email}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Operating Hours */}
      <div className="medical-card p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
          <Icon name="Clock" size={24} className="text-primary mr-3" />
          Operating Hours
        </h3>
        
        <div className="space-y-3">
          {operatingHours?.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
              <span className="font-medium text-text-primary">{schedule?.day}</span>
              <span className="text-text-secondary appointment-time">{schedule?.hours}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-error/10 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="AlertTriangle" size={20} className="text-error flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-error mb-1">Emergency Contact</h4>
              <p className="text-sm text-text-secondary">
                For medical emergencies, please call 911 or visit your nearest emergency room. 
                This platform is not for urgent medical situations.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Location */}
      <div className="medical-card p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
          <Icon name="MapPin" size={24} className="text-primary mr-3" />
          Our Location
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Icon name="Building" size={20} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-text-primary">MediBook Pro Headquarters</p>
              <p className="text-text-secondary">
                123 Healthcare Plaza, Suite 400<br />
                Medical District, Tamil Nadu<br />
                India
              </p>
            </div>
          </div>
          
          <div className="mt-6 h-64 rounded-lg overflow-hidden border border-border">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="MediBook Pro Location"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248755.79475951716!2d80.04385848151072!3d13.047807814214309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1755688796564!5m2!1sen!2sin"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;