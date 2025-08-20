import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ searchQuery, onSearchChange, onSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  const mockSuggestions = [
    { type: 'doctor', text: 'Dr. Sarah Johnson', specialty: 'Cardiology' },
    { type: 'doctor', text: 'Dr. Michael Chen', specialty: 'Dermatology' },
    { type: 'doctor', text: 'Dr. Emily Rodriguez', specialty: 'Pediatrics' },
    { type: 'specialty', text: 'Cardiology', icon: 'Heart' },
    { type: 'specialty', text: 'Dermatology', icon: 'Zap' },
    { type: 'specialty', text: 'Neurology', icon: 'Brain' },
    { type: 'specialty', text: 'Orthopedics', icon: 'Bone' },
    { type: 'specialty', text: 'Pediatrics', icon: 'Baby' },
    { type: 'location', text: 'Downtown Medical Center', icon: 'MapPin' },
    { type: 'location', text: 'Northside Clinic', icon: 'MapPin' },
    { type: 'location', text: 'West End Hospital', icon: 'MapPin' }
  ];

  useEffect(() => {
    if (searchQuery?.length > 0) {
      const filtered = mockSuggestions?.filter(suggestion =>
        suggestion?.text?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
      setSuggestions(filtered?.slice(0, 8));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef?.current && 
        !suggestionsRef?.current?.contains(event?.target) &&
        !inputRef?.current?.contains(event?.target)
      ) {
        setShowSuggestions(false);
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    onSearchChange(e?.target?.value);
  };

  const handleInputFocus = () => {
    setIsExpanded(true);
    if (searchQuery?.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion?.text);
    setShowSuggestions(false);
    setIsExpanded(false);
    onSearch(suggestion?.text);
  };

  const handleKeyDown = (e) => {
    if (e?.key === 'Enter') {
      e?.preventDefault();
      setShowSuggestions(false);
      setIsExpanded(false);
      onSearch(searchQuery);
    } else if (e?.key === 'Escape') {
      setShowSuggestions(false);
      setIsExpanded(false);
      inputRef?.current?.blur();
    }
  };

  const getSuggestionIcon = (suggestion) => {
    if (suggestion?.type === 'doctor') return 'UserCheck';
    if (suggestion?.type === 'specialty') return suggestion?.icon || 'Stethoscope';
    if (suggestion?.type === 'location') return 'MapPin';
    return 'Search';
  };

  const getSuggestionTypeLabel = (type) => {
    const labels = {
      doctor: 'Doctor',
      specialty: 'Specialty',
      location: 'Location'
    };
    return labels?.[type] || '';
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className={`relative transition-all duration-300 ${isExpanded ? 'transform scale-105' : ''}`}>
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" 
          />
          <Input
            ref={inputRef}
            type="search"
            placeholder="Search doctors, specialties, or locations..."
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onKeyDown={handleKeyDown}
            className="pl-12 pr-12 h-12 text-base bg-surface border-2 border-border focus:border-primary rounded-xl shadow-card hover:shadow-modal transition-all duration-300"
          />
          {searchQuery && (
            <button
              onClick={() => {
                onSearchChange('');
                setShowSuggestions(false);
                inputRef?.current?.focus();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-text-primary transition-smooth"
              aria-label="Clear search"
            >
              <Icon name="X" size={20} />
            </button>
          )}
        </div>

        {/* Search Suggestions */}
        {showSuggestions && suggestions?.length > 0 && (
          <div 
            ref={suggestionsRef}
            className="absolute top-full left-0 right-0 mt-2 bg-surface border border-border rounded-xl shadow-floating z-50 max-h-80 overflow-y-auto"
          >
            <div className="py-2">
              {suggestions?.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full px-4 py-3 text-left hover:bg-muted transition-smooth flex items-center space-x-3 group"
                >
                  <div className="flex-shrink-0">
                    <Icon 
                      name={getSuggestionIcon(suggestion)} 
                      size={18} 
                      className="text-primary group-hover:text-primary" 
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-text-primary truncate">
                        {suggestion?.text}
                      </span>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full flex-shrink-0">
                        {getSuggestionTypeLabel(suggestion?.type)}
                      </span>
                    </div>
                    {suggestion?.specialty && (
                      <div className="text-xs text-text-secondary mt-1">
                        {suggestion?.specialty}
                      </div>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    <Icon 
                      name="ArrowUpRight" 
                      size={14} 
                      className="text-text-secondary group-hover:text-primary" 
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Popular Searches */}
      {!searchQuery && isExpanded && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-surface border border-border rounded-xl shadow-floating z-50">
          <div className="p-4">
            <h4 className="text-sm font-semibold text-text-primary mb-3">Popular Searches</h4>
            <div className="flex flex-wrap gap-2">
              {['Cardiology', 'Dermatology', 'Pediatrics', 'General Medicine']?.map((term) => (
                <button
                  key={term}
                  onClick={() => handleSuggestionClick({ text: term, type: 'specialty' })}
                  className="px-3 py-1.5 text-sm bg-muted hover:bg-primary/10 text-text-secondary hover:text-primary rounded-full transition-smooth"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;