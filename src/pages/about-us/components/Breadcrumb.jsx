import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Breadcrumb = () => {
  const breadcrumbItems = [
    {
      label: 'Home',
      path: '/homepage',
      icon: 'Home'
    },
    {
      label: 'About Us',
      path: '/about-us',
      icon: 'Info',
      current: true
    }
  ];

  return (
    <nav className="bg-muted/30 border-b border-border" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-12">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbItems?.map((item, index) => (
              <li key={item?.path} className="flex items-center">
                {index > 0 && (
                  <Icon 
                    name="ChevronRight" 
                    size={16} 
                    className="text-text-secondary mx-2" 
                  />
                )}
                
                {item?.current ? (
                  <span className="flex items-center gap-2 text-text-primary font-medium">
                    <Icon name={item?.icon} size={16} />
                    {item?.label}
                  </span>
                ) : (
                  <Link
                    to={item?.path}
                    className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-smooth focus-ring rounded px-2 py-1 -mx-2 -my-1"
                  >
                    <Icon name={item?.icon} size={16} />
                    {item?.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;