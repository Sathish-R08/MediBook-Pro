import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactSection = () => {
  const contactInfo = [
    {
      id: 1,
      icon: "Phone",
      title: "Phone Support",
      primary: "+1 (555) 123-4567",
      secondary: "24/7 Patient Support",
      description: "Speak with our healthcare support team anytime, day or night.",
      action: "Call Now"
    },
    {
      id: 2,
      icon: "Mail",
      title: "Email Support",
      primary: "support@medibookpro.com",
      secondary: "Response within 2 hours",
      description: "Send us your questions and we\'ll get back to you quickly.",
      action: "Send Email"
    },
    {
      id: 3,
      icon: "MessageCircle",
      title: "Live Chat",
      primary: "Available 24/7",
      secondary: "Instant assistance",
      description: "Get immediate help with our live chat support system.",
      action: "Start Chat"
    }
  ];

  const officeLocations = [
    {
      id: 1,
      name: "Headquarters",
      address: "123 Healthcare Plaza, Suite 500",
      city: "Tamil Nadu, India",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM PST",
      coordinates: "37.7749,-122.4194"
    },
    {
      id: 2,
      name: "East Coast Office",
      address: "456 Medical Center Drive, Floor 12",
      city: "New York, NY 10001",
      phone: "+1 (555) 987-6543",
      hours: "Mon-Fri: 9:00 AM - 7:00 PM EST",
      coordinates: "40.7128,-74.0060"
    },
    {
      id: 3,
      name: "Midwest Hub",
      address: "789 Innovation Boulevard, Suite 300",
      city: "Chicago, IL 60601",
      phone: "+1 (555) 456-7890",
      hours: "Mon-Fri: 8:30 AM - 5:30 PM CST",
      coordinates: "41.8781,-87.6298"
    }
  ];

  const emergencyInfo = {
    title: "Medical Emergency?",
    description: "For immediate medical emergencies, please call 911 or visit your nearest emergency room. MediBook Pro is for non-emergency appointment scheduling only.",
    phone: "911",
    alternativeText: "For urgent but non-emergency care, contact your primary care provider or visit an urgent care center."
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-error/10 text-error px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="MapPin" size={16} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Need assistance with your healthcare appointments or have questions about our platform? 
            We're here to help you every step of the way.
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="bg-error/5 border border-error/20 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-error/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon name="AlertTriangle" size={24} className="text-error" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-error mb-2">
                {emergencyInfo?.title}
              </h3>
              <p className="text-text-secondary mb-4">
                {emergencyInfo?.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="destructive" iconName="Phone" iconPosition="left">
                  Call {emergencyInfo?.phone}
                </Button>
                <div className="text-sm text-text-secondary">
                  {emergencyInfo?.alternativeText}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo?.map((contact) => (
            <div key={contact?.id} className="medical-card group">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-smooth">
                  <Icon name={contact?.icon} size={28} />
                </div>
                
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {contact?.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="text-lg font-medium text-primary">
                    {contact?.primary}
                  </div>
                  <div className="text-sm text-success font-medium">
                    {contact?.secondary}
                  </div>
                </div>
                
                <p className="text-text-secondary text-sm mb-6">
                  {contact?.description}
                </p>
                
                <Button variant="outline" fullWidth>
                  {contact?.action}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Office Locations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Our Office Locations
            </h3>
            <p className="text-lg text-text-secondary">
              Visit us at any of our locations for in-person support and consultations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {officeLocations?.map((location) => (
              <div key={location?.id} className="medical-card">
                <div className="p-6">
                  {/* Map */}
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                    <iframe
                      width="100%"
                      height="100%"
                      loading="lazy"
                      title={location?.name}
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248755.79475951716!2d80.04385848151072!3d13.047807814214309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1755688796564!5m2!1sen!2sin`}
                      className="border-0"
                    />
                  </div>

                  {/* Location Info */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-text-primary">
                      {location?.name}
                    </h4>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <Icon name="MapPin" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-text-primary">{location?.address}</div>
                          <div className="text-text-secondary">{location?.city}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Icon name="Phone" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-text-primary">{location?.phone}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Icon name="Clock" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-text-secondary">{location?.hours}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button variant="outline" fullWidth iconName="Navigation" iconPosition="left">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Support */}
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Need Additional Support?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Our comprehensive help center includes FAQs, video tutorials, and step-by-step guides 
            to help you make the most of MediBook Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" iconName="BookOpen" iconPosition="left">
              Visit Help Center
            </Button>
            <Button variant="outline" iconName="Video" iconPosition="left">
              Watch Tutorials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;