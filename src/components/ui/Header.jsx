import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const navigationItems = [
    { label: 'Home', path: '/', icon: 'Home' },
    { label: 'Doctors', path: '/doctor-listing', icon: 'UserCheck' },
    { label: 'About', path: '/about-us', icon: 'Info' },
    { label: 'Contact', path: '/contact', icon: 'Phone' }
  ];

  const isActivePath = (path) => {
    if (path === '/') {
      return location?.pathname === '/' || location?.pathname === '/homepage';
    }
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleBookAppointment = () => {
    navigate('/doctor-listing');
    closeMobileMenu();
  };

  const handleFindDoctors = () => {
    navigate('/doctor-listing');
    closeMobileMenu();
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-surface border-b border-border z-navigation">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 lg:h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center space-x-3 focus-ring rounded-lg p-2 -ml-2"
                onClick={closeMobileMenu}
              >
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                  <Icon name="Heart" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-semibold text-text-primary tracking-tight">
                    MediBook
                  </span>
                  <span className="text-xs text-primary font-medium -mt-1">
                    Pro
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth focus-ring touch-target ${
                    isActivePath(item?.path)
                      ? 'bg-primary/10 text-primary' :'text-text-secondary hover:text-text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.label}</span>
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Find Doctors Button */}
              <Button
                variant="outline"
                onClick={handleFindDoctors}
                iconName="Search"
                iconPosition="left"
                size="sm"
              >
                Find Doctors
              </Button>

              {/* Book Appointment Button */}
              <Button
                variant="default"
                onClick={handleBookAppointment}
                iconName="Calendar"
                iconPosition="left"
                className="animate-breathing"
              >
                Book Appointment
              </Button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 rounded-lg text-text-secondary hover:text-text-primary hover:bg-muted transition-smooth focus-ring touch-target"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <Icon 
                  name={theme === 'light' ? 'Moon' : 'Sun'} 
                  size={20} 
                />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-text-secondary hover:text-text-primary hover:bg-muted transition-smooth focus-ring touch-target"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-mobile-menu lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-surface border-l border-border shadow-floating animate-slide-in">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                    <Icon name="Heart" size={18} color="white" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-text-primary">
                      MediBook Pro
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {/* Dark Mode Toggle */}
                  <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-10 h-10 rounded-lg text-text-secondary hover:text-text-primary hover:bg-muted transition-smooth focus-ring touch-target"
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                  >
                    <Icon 
                      name={theme === 'light' ? 'Moon' : 'Sun'} 
                      size={20} 
                    />
                  </button>
                  <button
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center w-10 h-10 rounded-lg text-text-secondary hover:text-text-primary hover:bg-muted transition-smooth focus-ring touch-target"
                    aria-label="Close mobile menu"
                  >
                    <Icon name="X" size={24} />
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 px-6 py-6">
                <div className="space-y-2">
                  {navigationItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      onClick={closeMobileMenu}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-smooth focus-ring touch-target ${
                        isActivePath(item?.path)
                          ? 'bg-primary/10 text-primary' :'text-text-secondary hover:text-text-primary hover:bg-muted'
                      }`}
                    >
                      <Icon name={item?.icon} size={20} />
                      <span>{item?.label}</span>
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Mobile CTA Section */}
              <div className="p-6 border-t border-border space-y-3">
                {/* Find Doctors Button */}
                <Button
                  variant="outline"
                  onClick={handleFindDoctors}
                  iconName="Search"
                  iconPosition="left"
                  fullWidth
                >
                  Find Doctors
                </Button>

                {/* Book Appointment Button */}
                <Button
                  variant="default"
                  onClick={handleBookAppointment}
                  iconName="Calendar"
                  iconPosition="left"
                  fullWidth
                  className="animate-breathing"
                >
                  Book Appointment
                </Button>
                
                {/* Trust Indicators */}
                <div className="mt-4 space-y-2">
                  <div className="trust-indicator">
                    <Icon name="Shield" size={16} className="text-success" />
                    <span>HIPAA Compliant</span>
                  </div>
                  <div className="trust-indicator">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>24/7 Support Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Spacer to prevent content overlap */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Header;