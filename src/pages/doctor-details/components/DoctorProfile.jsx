import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const DoctorProfile = ({ doctor }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center space-x-1">
        {Array(fullStars)?.fill()?.map((_, i) => (
          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
        ))}
        {hasHalfStar && (
          <Icon name="Star" size={16} className="text-yellow-400 fill-current opacity-50" />
        )}
        {Array(emptyStars)?.fill()?.map((_, i) => (
          <Icon key={i} name="Star" size={16} className="text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <motion.div 
      className="medical-card p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
        {/* Doctor Image */}
        <div className="flex-shrink-0 mb-6 lg:mb-0">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-xl bg-muted overflow-hidden mx-auto lg:mx-0">
            {doctor?.image ? (
              <img
                src={doctor?.image}
                alt={doctor?.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
              <Icon name="User" size={48} className="text-primary" />
            </div>
          </div>
        </div>

        {/* Doctor Information */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-4">
            <h1 className="text-3xl font-semibold text-text-primary mb-2">
              {doctor?.name}
            </h1>
            <p className="text-lg text-primary font-medium mb-3">
              {doctor?.specialty}
            </p>
            
            {/* Rating and Reviews */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              {renderStars(doctor?.rating)}
              <span className="text-sm font-medium text-text-primary">
                {doctor?.rating}
              </span>
              <span className="text-sm text-text-secondary">
                ({doctor?.reviewCount} reviews)
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-text-secondary mb-4">
              <Icon name="MapPin" size={16} />
              <span className="text-sm">{doctor?.location}</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-border">
            <div className="text-center">
              <div className="text-2xl font-semibold text-primary mb-1">
                {doctor?.experience}+
              </div>
              <div className="text-sm text-text-secondary">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-success mb-1">
                {doctor?.reviewCount}+
              </div>
              <div className="text-sm text-text-secondary">
                Happy Patients
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-accent mb-1">
                ${doctor?.consultation?.fee}
              </div>
              <div className="text-sm text-text-secondary">
                Consultation Fee
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-warning mb-1">
                {doctor?.consultation?.duration}min
              </div>
              <div className="text-sm text-text-secondary">
                Consultation Time
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Languages and Consultation Type */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-text-primary mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {doctor?.languages?.map((language) => (
                <span 
                  key={language}
                  className="medical-badge bg-muted text-text-secondary"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-text-primary mb-2">Consultation Type</h3>
            <span className="medical-badge bg-primary/10 text-primary">
              {doctor?.consultation?.type}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorProfile;