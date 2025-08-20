import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import AboutTab from './AboutTab';
import SpecialtiesTab from './SpecialtiesTab';
import ReviewsTab from './ReviewsTab';
import AvailabilityTab from './AvailabilityTab';

const DoctorTabs = ({ doctor, activeTab, setActiveTab }) => {
  const tabs = [
    {
      id: 'about',
      label: 'About',
      icon: 'User',
      component: AboutTab
    },
    {
      id: 'specialties',
      label: 'Specialties',
      icon: 'Award',
      component: SpecialtiesTab
    },
    {
      id: 'reviews',
      label: 'Reviews',
      icon: 'Star',
      badge: doctor?.reviewCount
    },
    {
      id: 'availability',
      label: 'Availability',
      icon: 'Calendar',
      component: AvailabilityTab
    }
  ];

  const ActiveComponent = tabs?.find(tab => tab?.id === activeTab)?.component;

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg overflow-x-auto">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-smooth focus-ring ${
              activeTab === tab?.id
                ? 'bg-surface text-primary shadow-sm'
                : 'text-text-secondary hover:text-text-primary hover:bg-surface/50'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
            {tab?.badge && (
              <span className="medical-badge bg-primary/10 text-primary text-xs">
                {tab?.badge}
              </span>
            )}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="min-h-[400px]"
        >
          {activeTab === 'about' && <AboutTab doctor={doctor} />}
          {activeTab === 'specialties' && <SpecialtiesTab doctor={doctor} />}
          {activeTab === 'reviews' && <ReviewsTab doctor={doctor} />}
          {activeTab === 'availability' && <AvailabilityTab doctor={doctor} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DoctorTabs;