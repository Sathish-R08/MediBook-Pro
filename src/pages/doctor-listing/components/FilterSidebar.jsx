import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isOpen, 
  onClose 
}) => {
  const specialties = [
    { id: 'cardiology', label: 'Cardiology', icon: 'Heart', count: 24 },
    { id: 'dermatology', label: 'Dermatology', icon: 'Zap', count: 18 },
    { id: 'neurology', label: 'Neurology', icon: 'Brain', count: 15 },
    { id: 'orthopedics', label: 'Orthopedics', icon: 'Bone', count: 22 },
    { id: 'pediatrics', label: 'Pediatrics', icon: 'Baby', count: 19 },
    { id: 'psychiatry', label: 'Psychiatry', icon: 'Users', count: 12 },
    { id: 'radiology', label: 'Radiology', icon: 'Scan', count: 8 },
    { id: 'surgery', label: 'Surgery', icon: 'Scissors', count: 16 }
  ];

  const ratings = [
    { id: '5', label: '5 Stars', count: 45 },
    { id: '4', label: '4+ Stars', count: 78 },
    { id: '3', label: '3+ Stars', count: 92 },
    { id: '2', label: '2+ Stars', count: 98 }
  ];

  const availability = [
    { id: 'today', label: 'Available Today', count: 12 },
    { id: 'tomorrow', label: 'Available Tomorrow', count: 28 },
    { id: 'week', label: 'This Week', count: 85 },
    { id: 'month', label: 'This Month', count: 120 }
  ];

  const locations = [
    { id: 'downtown', label: 'Downtown Medical', count: 35 },
    { id: 'northside', label: 'Northside Clinic', count: 28 },
    { id: 'westend', label: 'West End Hospital', count: 42 },
    { id: 'eastside', label: 'Eastside Center', count: 25 }
  ];

  const handleSpecialtyChange = (specialtyId, checked) => {
    const newSpecialties = checked 
      ? [...filters?.specialties, specialtyId]
      : filters?.specialties?.filter(id => id !== specialtyId);
    onFilterChange({ ...filters, specialties: newSpecialties });
  };

  const handleRatingChange = (rating) => {
    onFilterChange({ ...filters, rating: filters?.rating === rating ? '' : rating });
  };

  const handleAvailabilityChange = (availabilityId, checked) => {
    const newAvailability = checked 
      ? [...filters?.availability, availabilityId]
      : filters?.availability?.filter(id => id !== availabilityId);
    onFilterChange({ ...filters, availability: newAvailability });
  };

  const handleLocationChange = (locationId, checked) => {
    const newLocations = checked 
      ? [...filters?.locations, locationId]
      : filters?.locations?.filter(id => id !== locationId);
    onFilterChange({ ...filters, locations: newLocations });
  };

  const getActiveFiltersCount = () => {
    return filters?.specialties?.length + 
           (filters?.rating ? 1 : 0) + 
           filters?.availability?.length + 
           filters?.locations?.length;
  };

  const FilterSection = ({ title, children }) => (
    <div className="border-b border-border pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0">
      <h3 className="text-sm font-semibold text-text-primary mb-4">{title}</h3>
      {children}
    </div>
  );

  const sidebarContent = (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border lg:p-0 lg:border-b-0 lg:mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="Filter" size={20} className="text-primary" />
          <h2 className="text-lg font-semibold text-text-primary">Filters</h2>
          {getActiveFiltersCount() > 0 && (
            <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-primary rounded-full">
              {getActiveFiltersCount()}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          {getActiveFiltersCount() > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-text-secondary hover:text-text-primary"
            >
              Clear All
            </Button>
          )}
          <button
            onClick={onClose}
            className="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg text-text-secondary hover:text-text-primary hover:bg-muted transition-smooth focus-ring"
            aria-label="Close filters"
          >
            <Icon name="X" size={20} />
          </button>
        </div>
      </div>

      {/* Filter Content */}
      <div className="flex-1 overflow-y-auto p-6 lg:p-0">
        <div className="space-y-6">
          {/* Medical Specialties */}
          <FilterSection title="Medical Specialties">
            <div className="space-y-3">
              {specialties?.map((specialty) => (
                <div key={specialty?.id} className="flex items-center justify-between">
                  <Checkbox
                    checked={filters?.specialties?.includes(specialty?.id)}
                    onChange={(e) => handleSpecialtyChange(specialty?.id, e?.target?.checked)}
                    label={
                      <div className="flex items-center space-x-2">
                        <Icon name={specialty?.icon} size={16} className="text-primary" />
                        <span className="text-sm text-text-primary">{specialty?.label}</span>
                      </div>
                    }
                  />
                  <span className="text-xs text-text-secondary">({specialty?.count})</span>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Rating */}
          <FilterSection title="Minimum Rating">
            <div className="space-y-3">
              {ratings?.map((rating) => (
                <div key={rating?.id} className="flex items-center justify-between">
                  <Checkbox
                    checked={filters?.rating === rating?.id}
                    onChange={() => handleRatingChange(rating?.id)}
                    label={
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)]?.map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={14}
                              className={i < parseInt(rating?.id) ? 'text-warning fill-current' : 'text-border'}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-text-primary">{rating?.label}</span>
                      </div>
                    }
                  />
                  <span className="text-xs text-text-secondary">({rating?.count})</span>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Availability */}
          <FilterSection title="Availability">
            <div className="space-y-3">
              {availability?.map((avail) => (
                <div key={avail?.id} className="flex items-center justify-between">
                  <Checkbox
                    checked={filters?.availability?.includes(avail?.id)}
                    onChange={(e) => handleAvailabilityChange(avail?.id, e?.target?.checked)}
                    label={
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={16} className="text-success" />
                        <span className="text-sm text-text-primary">{avail?.label}</span>
                      </div>
                    }
                  />
                  <span className="text-xs text-text-secondary">({avail?.count})</span>
                </div>
              ))}
            </div>
          </FilterSection>

          {/* Location */}
          <FilterSection title="Location">
            <div className="space-y-3">
              {locations?.map((location) => (
                <div key={location?.id} className="flex items-center justify-between">
                  <Checkbox
                    checked={filters?.locations?.includes(location?.id)}
                    onChange={(e) => handleLocationChange(location?.id, e?.target?.checked)}
                    label={
                      <div className="flex items-center space-x-2">
                        <Icon name="MapPin" size={16} className="text-accent" />
                        <span className="text-sm text-text-primary">{location?.label}</span>
                      </div>
                    }
                  />
                  <span className="text-xs text-text-secondary">({location?.count})</span>
                </div>
              ))}
            </div>
          </FilterSection>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 bg-surface border-r border-border">
        {sidebarContent}
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Slide-up Panel */}
          <div className="fixed bottom-0 left-0 right-0 bg-surface rounded-t-2xl shadow-floating max-h-[85vh] animate-slide-up">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;