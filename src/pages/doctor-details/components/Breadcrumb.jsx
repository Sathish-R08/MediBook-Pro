import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Breadcrumb = ({ doctorName }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-text-secondary mb-6" aria-label="Breadcrumb">
      <Link 
        to="/" 
        className="hover:text-text-primary transition-colors focus-ring rounded px-1 py-0.5"
      >
        Home
      </Link>
      <Icon name="ChevronRight" size={16} className="text-border" />
      <Link 
        to="/doctor-listing" 
        className="hover:text-text-primary transition-colors focus-ring rounded px-1 py-0.5"
      >
        Doctors
      </Link>
      <Icon name="ChevronRight" size={16} className="text-border" />
      <span className="text-text-primary font-medium truncate max-w-xs" title={doctorName}>
        {doctorName}
      </span>
    </nav>
  );
};

export default Breadcrumb;