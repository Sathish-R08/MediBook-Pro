import React from 'react';
import Icon from '../../../components/AppIcon';

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      icon: "Calendar",
      title: "Easy Appointment Booking",
      description: "Schedule appointments with verified healthcare providers in just a few clicks. Our intuitive interface makes booking simple and stress-free.",
      stats: "Average booking time: 2 minutes",
      color: "primary"
    },
    {
      id: 2,
      icon: "UserCheck",
      title: "Verified Healthcare Providers",
      description: "All doctors on our platform are thoroughly vetted and verified. We ensure they meet the highest standards of medical practice and credentials.",
      stats: "100% verified professionals",
      color: "secondary"
    },
    {
      id: 3,
      icon: "Shield",
      title: "HIPAA Compliant Security",
      description: "Your medical information is protected with enterprise-grade security. We maintain strict HIPAA compliance to safeguard your privacy.",
      stats: "Bank-level encryption",
      color: "accent"
    },
    {
      id: 4,
      icon: "Clock",
      title: "24/7 Platform Access",
      description: "Book appointments, manage your healthcare schedule, and access support anytime, anywhere. Our platform never sleeps.",
      stats: "99.9% uptime guarantee",
      color: "success"
    },
    {
      id: 5,
      icon: "Smartphone",
      title: "Mobile-First Design",
      description: "Optimized for all devices with a responsive design that works seamlessly on desktop, tablet, and mobile platforms.",
      stats: "Works on any device",
      color: "warning"
    },
    {
      id: 6,
      icon: "Heart",
      title: "Patient-Centered Care",
      description: "Every feature is designed with patient needs in mind. We prioritize your health journey and make healthcare more accessible.",
      stats: "95% patient satisfaction",
      color: "error"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary",
      secondary: "bg-secondary/10 text-secondary",
      accent: "bg-accent/10 text-accent",
      success: "bg-success/10 text-success",
      warning: "bg-warning/10 text-warning",
      error: "bg-error/10 text-error"
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Star" size={16} />
            <span>Platform Benefits</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Why Choose MediBook Pro?
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We've built a comprehensive healthcare platform that prioritizes your needs, 
            security, and convenience at every step of your healthcare journey.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits?.map((benefit) => (
            <div key={benefit?.id} className="medical-card group">
              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${getColorClasses(benefit?.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                  <Icon name={benefit?.icon} size={28} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-text-primary">
                    {benefit?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {benefit?.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Icon name="TrendingUp" size={16} className="text-success" />
                      <span className="text-sm font-medium text-success">
                        {benefit?.stats}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience Better Healthcare?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of patients who trust MediBook Pro for their healthcare needs. 
              Start your journey to better health today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-smooth flex items-center justify-center gap-2">
                <Icon name="Calendar" size={20} />
                Book Your First Appointment
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-smooth flex items-center justify-center gap-2">
                <Icon name="Play" size={20} />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;