import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Breadcrumb = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/homepage', icon: 'Home' },
    { label: 'Contact', path: '/contact', icon: 'Phone' }
  ];

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <div className="flex items-center space-x-2 text-sm">
        {breadcrumbItems?.map((item, index) => (
          <React.Fragment key={item?.path}>
            {index === 0 ? (
              <Link
                to={item?.path}
                className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-smooth focus-ring rounded px-2 py-1"
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.label}</span>
              </Link>
            ) : (
              <>
                <Icon name="ChevronRight" size={16} className="text-text-secondary" />
                <span className="flex items-center space-x-1 text-text-primary font-medium">
                  <Icon name={item?.icon} size={16} />
                  <span>{item?.label}</span>
                </span>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;