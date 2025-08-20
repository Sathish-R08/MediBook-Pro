import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DoctorCard = ({ doctor, onBookNow }) => {
  const renderStars = (rating) => {
    return [...Array(5)]?.map((_, i) => (
      <Icon
        key={i}
        name="Star"
        size={14}
        className={i < Math.floor(rating) ? 'text-warning fill-current' : 'text-border'}
      />
    ));
  };

  const getSpecialtyIcon = (specialty) => {
    const iconMap = {
      'Cardiology': 'Heart',
      'Dermatology': 'Zap',
      'Neurology': 'Brain',
      'Orthopedics': 'Bone',
      'Pediatrics': 'Baby',
      'Psychiatry': 'Users',
      'Radiology': 'Scan',
      'Surgery': 'Scissors',
      'General Medicine': 'Stethoscope',
      'Oncology': 'Shield',
      'Gynecology': 'User',
      'Ophthalmology': 'Eye'
    };
    return iconMap?.[specialty] || 'UserCheck';
  };

  const formatNextAvailable = (date) => {
    const today = new Date();
    const availableDate = new Date(date);
    const diffTime = availableDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays <= 7) return `In ${diffDays} days`;
    return availableDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="medical-card group cursor-pointer">
      <div className="p-6">
        {/* Doctor Image and Basic Info */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
              <Image
                src={doctor?.image}
                alt={`Dr. ${doctor?.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            {doctor?.isVerified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                <Icon name="Check" size={12} color="white" strokeWidth={3} />
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-text-primary mb-1 truncate">
              Dr. {doctor?.name}
            </h3>
            <div className="flex items-center space-x-2 mb-2">
              <Icon 
                name={getSpecialtyIcon(doctor?.specialty)} 
                size={16} 
                className="text-primary flex-shrink-0" 
              />
              <span className="text-sm text-text-secondary truncate">
                {doctor?.specialty}
              </span>
            </div>
            <div className="flex items-center space-x-1">
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
          </div>
        </div>

        {/* Experience and Location */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2">
            <Icon name="Award" size={16} className="text-accent" />
            <span className="text-sm text-text-secondary">
              {doctor?.experience} years experience
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={16} className="text-error" />
            <span className="text-sm text-text-secondary truncate">
              {doctor?.location}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="DollarSign" size={16} className="text-success" />
            <span className="text-sm text-text-secondary">
              Consultation: ${doctor?.consultationFee}
            </span>
          </div>
        </div>

        {/* Next Available Slot */}
        <div className="bg-muted rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-primary" />
              <span className="text-sm font-medium text-text-primary">
                Next Available
              </span>
            </div>
            <span className="text-sm font-semibold text-primary">
              {formatNextAvailable(doctor?.nextAvailable)}
            </span>
          </div>
          {doctor?.nextAvailableTime && (
            <div className="mt-1 text-xs text-text-secondary">
              {doctor?.nextAvailableTime}
            </div>
          )}
        </div>

        {/* Languages Spoken */}
        {doctor?.languages && doctor?.languages?.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="MessageCircle" size={16} className="text-secondary" />
              <span className="text-sm font-medium text-text-primary">Languages</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {doctor?.languages?.slice(0, 3)?.map((language, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary"
                >
                  {language}
                </span>
              ))}
              {doctor?.languages?.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-text-secondary">
                  +{doctor?.languages?.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Book Now Button */}
        <Button
          variant="default"
          fullWidth
          onClick={() => onBookNow(doctor)}
          iconName="Calendar"
          iconPosition="left"
          className="group-hover:animate-breathing"
        >
          Book Appointment
        </Button>

        {/* Quick Actions */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <button className="flex items-center space-x-1 text-sm text-text-secondary hover:text-primary transition-smooth">
            <Icon name="Phone" size={14} />
            <span>Call</span>
          </button>
          <button className="flex items-center space-x-1 text-sm text-text-secondary hover:text-primary transition-smooth">
            <Icon name="MessageSquare" size={14} />
            <span>Message</span>
          </button>
          <button className="flex items-center space-x-1 text-sm text-text-secondary hover:text-primary transition-smooth">
            <Icon name="Share2" size={14} />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;