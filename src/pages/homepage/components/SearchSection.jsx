import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SearchSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const specialtyOptions = [
    { value: '', label: 'All Specialties' },
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'dermatology', label: 'Dermatology' },
    { value: 'endocrinology', label: 'Endocrinology' },
    { value: 'gastroenterology', label: 'Gastroenterology' },
    { value: 'neurology', label: 'Neurology' },
    { value: 'oncology', label: 'Oncology' },
    { value: 'orthopedics', label: 'Orthopedics' },
    { value: 'pediatrics', label: 'Pediatrics' },
    { value: 'psychiatry', label: 'Psychiatry' },
    { value: 'radiology', label: 'Radiology' }
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params?.set('search', searchQuery);
    if (selectedSpecialty) params?.set('specialty', selectedSpecialty);
    
    navigate(`/doctor-listing?${params?.toString()}`);
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter') {
      handleSearch();
    }
  };

  const quickSearchOptions = [
    { label: 'General Physician', specialty: 'general', icon: 'Stethoscope' },
    { label: 'Cardiologist', specialty: 'cardiology', icon: 'Heart' },
    { label: 'Dermatologist', specialty: 'dermatology', icon: 'Zap' },
    { label: 'Pediatrician', specialty: 'pediatrics', icon: 'Baby' }
  ];

  const handleQuickSearch = (specialty) => {
    setSelectedSpecialty(specialty);
    navigate(`/doctor-listing?specialty=${specialty}`);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Find Your Perfect Doctor
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Search through our network of qualified healthcare professionals and book appointments instantly
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="bg-surface rounded-2xl shadow-lg border border-border p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="md:col-span-2">
                <Input
                  type="search"
                  placeholder="Search by doctor name, condition, or treatment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e?.target?.value)}
                  onKeyPress={handleKeyPress}
                  className="h-12"
                />
              </div>
              
              <Select
                placeholder="Select Specialty"
                options={specialtyOptions}
                value={selectedSpecialty}
                onChange={setSelectedSpecialty}
                searchable
                className="h-12"
              />
            </div>

            <div className="flex justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={handleSearch}
                iconName="Search"
                iconPosition="left"
                className="px-8 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Search Doctors
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Quick Search Options */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Popular Specialties
            </h3>
            <p className="text-text-secondary">
              Quick access to commonly searched medical specialties
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {quickSearchOptions?.map((option, index) => (
              <motion.button
                key={option?.specialty}
                onClick={() => handleQuickSearch(option?.specialty)}
                className="group bg-surface hover:bg-primary/5 border border-border hover:border-primary/20 rounded-xl p-6 text-center transition-all duration-300 focus-ring"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <Icon 
                      name={option?.icon} 
                      size={24} 
                      className="text-primary" 
                    />
                  </div>
                  <span className="font-medium text-text-primary group-hover:text-primary transition-colors duration-300">
                    {option?.label}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: '500+', label: 'Qualified Doctors', icon: 'UserCheck' },
            { number: '50K+', label: 'Happy Patients', icon: 'Users' },
            { number: '25+', label: 'Medical Specialties', icon: 'Award' },
            { number: '24/7', label: 'Support Available', icon: 'Clock' }
          ]?.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                {stat?.number}
              </div>
              <div className="text-sm text-text-secondary font-medium">
                {stat?.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SearchSection;