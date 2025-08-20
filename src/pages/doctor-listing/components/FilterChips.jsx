import React from 'react';
import Icon from '../../../components/AppIcon';

const FilterChips = ({ filters, onRemoveFilter, onClearAll }) => {
  const getFilterChips = () => {
    const chips = [];

    // Specialty chips
    filters?.specialties?.forEach(specialty => {
      chips?.push({
        id: `specialty-${specialty}`,
        label: specialty?.charAt(0)?.toUpperCase() + specialty?.slice(1),
        type: 'specialty',
        value: specialty,
        icon: 'Stethoscope'
      });
    });

    // Rating chip
    if (filters?.rating) {
      chips?.push({
        id: `rating-${filters?.rating}`,
        label: `${filters?.rating}+ Stars`,
        type: 'rating',
        value: filters?.rating,
        icon: 'Star'
      });
    }

    // Availability chips
    filters?.availability?.forEach(avail => {
      const labels = {
        today: 'Available Today',
        tomorrow: 'Available Tomorrow',
        week: 'This Week',
        month: 'This Month'
      };
      chips?.push({
        id: `availability-${avail}`,
        label: labels?.[avail] || avail,
        type: 'availability',
        value: avail,
        icon: 'Clock'
      });
    });

    // Location chips
    filters?.locations?.forEach(location => {
      const labels = {
        downtown: 'Downtown Medical',
        northside: 'Northside Clinic',
        westend: 'West End Hospital',
        eastside: 'Eastside Center'
      };
      chips?.push({
        id: `location-${location}`,
        label: labels?.[location] || location,
        type: 'location',
        value: location,
        icon: 'MapPin'
      });
    });

    return chips;
  };

  const handleRemoveChip = (chip) => {
    onRemoveFilter(chip?.type, chip?.value);
  };

  const chips = getFilterChips();

  if (chips?.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2 p-4 bg-muted/50 rounded-lg border border-border">
      <div className="flex items-center space-x-2 text-sm text-text-secondary">
        <Icon name="Filter" size={16} />
        <span className="font-medium">Active Filters:</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {chips?.map((chip) => (
          <div
            key={chip?.id}
            className="inline-flex items-center space-x-2 px-3 py-1.5 bg-surface border border-border rounded-full text-sm font-medium text-text-primary shadow-sm hover:shadow-md transition-smooth group"
          >
            <Icon 
              name={chip?.icon} 
              size={14} 
              className="text-primary" 
            />
            <span>{chip?.label}</span>
            <button
              onClick={() => handleRemoveChip(chip)}
              className="ml-1 text-text-secondary hover:text-error transition-smooth"
              aria-label={`Remove ${chip?.label} filter`}
            >
              <Icon name="X" size={14} />
            </button>
          </div>
        ))}
      </div>
      {chips?.length > 1 && (
        <button
          onClick={onClearAll}
          className="inline-flex items-center space-x-1 px-3 py-1.5 text-sm font-medium text-error hover:text-error/80 hover:bg-error/5 rounded-full transition-smooth"
        >
          <Icon name="X" size={14} />
          <span>Clear All</span>
        </button>
      )}
    </div>
  );
};

export default FilterChips;