import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      role: "Working Mother",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
      rating: 5,
      content: `MediBook Pro has completely transformed how I manage my family's healthcare. The ability to book multiple appointments in one session saves me so much time. The platform is intuitive and the doctors are all top-notch professionals.`,
      appointmentsBooked: 12,
      memberSince: "2023"
    },
    {
      id: 2,
      name: "Robert John",
      role: "Senior Executive",
      location: "New York, NY",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=400&h=400&fit=crop",
      rating: 5,
      content: `As someone with a busy schedule, I appreciate the 24/7 access and quick booking process. The security measures give me confidence that my medical information is protected. Highly recommend this platform.`,
      appointmentsBooked: 8,
      memberSince: "2023"
    },
    {
      id: 3,
      name: "Amanda Joe",
      role: "Healthcare Provider",
      location: "Chicago, IL",
      image: "https://images.pixabay.com/photo/2017/08/06/12/06/people-2592247_1280.jpg?w=400&h=400&fit=crop",
      rating: 5,
      content: `From a provider's perspective, MediBook Pro streamlines patient scheduling and reduces no-shows. The verification process ensures we're connecting with serious patients who value their healthcare.`,
      appointmentsBooked: 150,
      memberSince: "2022"
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      role: "Retired Teacher",
      location: "Phoenix, AZ",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      rating: 5,
      content: `The customer support is exceptional. When I had questions about booking my first appointment, the team walked me through everything. The interface is user-friendly even for someone like me who isn't tech-savvy.`,
      appointmentsBooked: 6,
      memberSince: "2024"
    }
  ];

  const trustSignals = [
    {
      icon: "Shield",
      title: "HIPAA Certified",
      description: "Full compliance with healthcare privacy regulations"
    },
    {
      icon: "Award",
      title: "Industry Recognition",
      description: "Winner of Healthcare Innovation Award 2024"
    },
    {
      icon: "Users",
      title: "50,000+ Patients",
      description: "Trusted by thousands of healthcare consumers"
    },
    {
      icon: "Star",
      title: "4.9/5 Rating",
      description: "Consistently high patient satisfaction scores"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-warning fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="MessageCircle" size={16} />
            <span>Patient Testimonials</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real experiences from real patients who have transformed their healthcare journey with MediBook Pro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials?.map((testimonial) => (
            <div key={testimonial?.id} className="medical-card">
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 overflow-hidden rounded-full border-2 border-primary/20">
                    <Image
                      src={testimonial?.image}
                      alt={`${testimonial?.name} profile photo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-text-primary">
                      {testimonial?.name}
                    </h4>
                    <p className="text-sm text-text-secondary mb-1">
                      {testimonial?.role}
                    </p>
                    <p className="text-xs text-text-secondary mb-2">
                      {testimonial?.location}
                    </p>
                    <div className="flex items-center gap-1">
                      {renderStars(testimonial?.rating)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-text-secondary leading-relaxed mb-6">
                  "{testimonial?.content}"
                </blockquote>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      <span>{testimonial?.appointmentsBooked} appointments</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      <span>Since {testimonial?.memberSince}</span>
                    </div>
                  </div>
                  <div className="text-xs text-success font-medium">
                    Verified Patient
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Trusted by Healthcare Professionals
            </h3>
            <p className="text-text-secondary">
              Our commitment to excellence is recognized across the healthcare industry
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals?.map((signal, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={signal?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  {signal?.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {signal?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;