import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      specialty: "Internal Medicine",
      experience: "15+ years",
      image: "https://plus.unsplash.com/premium_photo-1661713606200-2832945b8d3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      credentials: ["MD", "FACP", "Board Certified"],
      description: "Leading our medical advisory board with extensive experience in internal medicine and healthcare technology integration."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chief Technology Officer",
      specialty: "Healthcare IT",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      credentials: ["MS Computer Science", "CISSP", "HIMSS Fellow"],
      description: "Architecting secure, scalable healthcare technology solutions that prioritize patient privacy and data security."
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Head of Patient Experience",
      specialty: "Family Medicine",
      experience: "10+ years",
      image: "https://plus.unsplash.com/premium_photo-1661473820951-99a3565f3fca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      credentials: ["MD", "AAFP", "Patient Safety Certified"],
      description: "Ensuring every patient interaction meets the highest standards of care and satisfaction through our platform."
    },
    {
      id: 4,
      name: "David Kim",
      role: "VP of Operations",
      specialty: "Healthcare Operations",
      experience: "14+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      credentials: ["MBA Healthcare", "PMP", "Lean Six Sigma"],
      description: "Streamlining healthcare delivery processes to ensure efficient, reliable service for both patients and providers."
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      role: "Director of Quality Assurance",
      specialty: "Preventive Medicine",
      experience: "11+ years",
      image: "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      credentials: ["MD", "MPH", "Quality Improvement Certified"],
      description: "Maintaining the highest standards of medical care quality and safety across our healthcare network."
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Head of Security",
      specialty: "Cybersecurity",
      experience: "13+ years",
      image: "https://plus.unsplash.com/premium_photo-1661718954553-f775043016d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      credentials: ["CISSP", "CISM", "Healthcare Security"],
      description: "Protecting patient data and ensuring HIPAA compliance through advanced cybersecurity measures and protocols."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Users" size={16} />
            <span>Our Leadership Team</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Meet the Experts Behind MediBook Pro
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our diverse team of healthcare professionals, technology experts, and industry leaders 
            work together to deliver exceptional healthcare experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers?.map((member) => (
            <div key={member?.id} className="medical-card group">
              <div className="p-6">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto overflow-hidden rounded-full border-4 border-primary/10">
                    <Image
                      src={member?.image}
                      alt={`${member?.name} - ${member?.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {member?.experience}
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-1">
                      {member?.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-1">
                      {member?.role}
                    </p>
                    <p className="text-text-secondary text-sm">
                      {member?.specialty}
                    </p>
                  </div>

                  {/* Credentials */}
                  <div className="flex flex-wrap justify-center gap-1">
                    {member?.credentials?.map((credential, index) => (
                      <span
                        key={index}
                        className="medical-badge bg-secondary/10 text-secondary"
                      >
                        {credential}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {member?.description}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex justify-center space-x-4">
                    <button className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-smooth">
                      <Icon name="Mail" size={16} />
                    </button>
                    <button className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-smooth">
                      <Icon name="Linkedin" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;