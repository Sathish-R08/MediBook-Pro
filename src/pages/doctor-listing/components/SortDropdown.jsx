import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SortDropdown = ({ sortBy, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant', icon: 'TrendingUp' },
    { value: 'rating', label: 'Highest Rated', icon: 'Star' },
    { value: 'experience', label: 'Most Experienced', icon: 'Award' },
    { value: 'availability', label: 'Earliest Available', icon: 'Clock' },
    { value: 'price-low', label: 'Price: Low to High', icon: 'DollarSign' },
    { value: 'price-high', label: 'Price: High to Low', icon: 'DollarSign' },
    { value: 'name', label: 'Name: A to Z', icon: 'SortAsc' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef?.current && !dropdownRef?.current?.contains(event?.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSortSelect = (value) => {
    onSortChange(value);
    setIsOpen(false);
  };

  const getCurrentSortLabel = () => {
    const currentSort = sortOptions?.find(option => option?.value === sortBy);
    return currentSort ? currentSort?.label : 'Sort By';
  };

  const getCurrentSortIcon = () => {
    const currentSort = sortOptions?.find(option => option?.value === sortBy);
    return currentSort ? currentSort?.icon : 'ArrowUpDown';
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center space-x-2 px-4 py-2.5 bg-surface border border-border rounded-lg text-sm font-medium text-text-primary hover:bg-muted hover:border-primary/50 transition-smooth focus-ring min-w-[160px] justify-between"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="flex items-center space-x-2">
          <Icon name={getCurrentSortIcon()} size={16} className="text-primary" />
          <span>{getCurrentSortLabel()}</span>
        </div>
        <Icon 
          name="ChevronDown" 
          size={16} 
          className={`text-text-secondary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 bg-surface border border-border rounded-lg shadow-floating z-50 py-1">
          {sortOptions?.map((option) => (
            <button
              key={option?.value}
              onClick={() => handleSortSelect(option?.value)}
              className={`w-full px-4 py-2.5 text-left hover:bg-muted transition-smooth flex items-center space-x-3 ${
                sortBy === option?.value ? 'bg-primary/5 text-primary' : 'text-text-primary'
              }`}
              role="option"
              aria-selected={sortBy === option?.value}
            >
              <Icon 
                name={option?.icon} 
                size={16} 
                className={sortBy === option?.value ? 'text-primary' : 'text-text-secondary'} 
              />
              <span className="text-sm font-medium">{option?.label}</span>
              {sortBy === option?.value && (
                <Icon name="Check" size={14} className="text-primary ml-auto" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;