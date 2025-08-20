import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FeaturedDoctors = () => {
  const navigate = useNavigate();

  const featuredDoctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image: "https://plus.unsplash.com/premium_photo-1661713606200-2832945b8d3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.9,
      reviewCount: 127,
      experience: "15+ years",
      specialtyIcon: "Heart",
      availability: "Available Today",
      consultationFee: "$150",
      isOnline: true
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      rating: 4.8,
      reviewCount: 89,
      experience: "12+ years",
      specialtyIcon: "Zap",
      availability: "Available Tomorrow",
      consultationFee: "$120",
      isOnline: false
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      image: "https://plus.unsplash.com/premium_photo-1661473820951-99a3565f3fca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.9,
      reviewCount: 156,
      experience: "18+ years",
      specialtyIcon: "Baby",
      availability: "Available Today",
      consultationFee: "$100",
      isOnline: true
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      image: "https://plus.unsplash.com/premium_photo-1661718954553-f775043016d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.7,
      reviewCount: 94,
      experience: "20+ years",
      specialtyIcon: "Activity",
      availability: "Available Today",
      consultationFee: "$180",
      isOnline: false
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      specialty: "Neurology",
      image: "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.8,
      reviewCount: 112,
      experience: "14+ years",
      specialtyIcon: "Brain",
      availability: "Available Tomorrow",
      consultationFee: "$200",
      isOnline: true
    },
    {
      id: 6,
      name: "Dr. Robert Kumar",
      specialty: "Gastroenterology",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reviewCount: 78,
      experience: "16+ years",
      specialtyIcon: "Stethoscope",
      availability: "Available Today",
      consultationFee: "$160",
      isOnline: false
    },
    {
      id: 7,
      name: "Dr. Amanda Foster",
      specialty: "Psychiatry",
      image: "https://plus.unsplash.com/premium_photo-1702598784834-d454a5523e84?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.8,
      reviewCount: 143,
      experience: "11+ years",
      specialtyIcon: "Users",
      availability: "Available Today",
      consultationFee: "$140",
      isOnline: true
    },
    {
      id: 8,
      name: "Dr. David Park",
      specialty: "Oncology",
      image: "https://plus.unsplash.com/premium_photo-1681996501502-27055cd12d04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.9,
      reviewCount: 67,
      experience: "22+ years",
      specialtyIcon: "Shield",
      availability: "Available Tomorrow",
      consultationFee: "$250",
      isOnline: false
    }
  ];

  const handleBookNow = (doctorId) => {
    navigate(`/appointment-booking?doctor=${doctorId}`);
  };

  const handleViewAllDoctors = () => {
    navigate('/doctor-listing');
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars?.push(
        <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
      );
    }

    if (hasHalfStar) {
      stars?.push(
        <Icon key="half" name="Star" size={16} className="text-warning fill-current opacity-50" />
      );
    }

    return stars;
  };

  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Featured Healthcare Professionals
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Meet our top-rated doctors across various specialties, ready to provide you with exceptional care
          </p>
        </motion.div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredDoctors?.map((doctor, index) => (
            <motion.div
              key={doctor?.id}
              className="medical-card group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                {/* Doctor Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={doctor?.image}
                    alt={doctor?.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Online Status */}
                  {doctor?.isOnline && (
                    <div className="absolute top-3 right-3 flex items-center space-x-1 bg-success text-white px-2 py-1 rounded-full text-xs font-medium">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span>Online</span>
                    </div>
                  )}

                  {/* Specialty Icon */}
                  <div className="absolute top-3 left-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Icon 
                      name={doctor?.specialtyIcon} 
                      size={20} 
                      className="text-primary" 
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Doctor Info */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
                      {doctor?.name}
                    </h3>
                    <p className="text-text-secondary font-medium">
                      {doctor?.specialty}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {doctor?.experience} experience
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {renderStars(doctor?.rating)}
                    </div>
                    <span className="text-sm font-medium text-text-primary">
                      {doctor?.rating}
                    </span>
                    <span className="text-sm text-text-secondary">
                      ({doctor?.reviewCount} reviews)
                    </span>
                  </div>

                  {/* Availability & Fee */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-success font-medium">
                        {doctor?.availability}
                      </span>
                      <span className="text-lg font-bold text-primary">
                        {doctor?.consultationFee}
                      </span>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <Button
                    variant="default"
                    fullWidth
                    onClick={() => handleBookNow(doctor?.id)}
                    iconName="Calendar"
                    iconPosition="left"
                    className="group-hover:shadow-lg transform group-hover:scale-105 transition-all duration-300"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Doctors Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={handleViewAllDoctors}
            iconName="ArrowRight"
            iconPosition="right"
            className="px-8 hover:bg-primary hover:text-white hover:border-primary transform hover:scale-105 transition-all duration-300"
          >
            View All Doctors
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDoctors;