import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroBanner = ({ trustIndicators }) => {
  const navigate = useNavigate();

  // Define the function to handle booking
  const handleBookAppointment = () => {
    // You can navigate to booking page or open modal
    navigate('/doctor-listing'); // <-- change route as needed
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px] py-16 lg:py-24">

          {/* Content Section */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                Book Your
                <span className="text-primary dark:text-blue-400 block">
                  Healthcare
                </span>
                Appointment
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
              >
                Connect with trusted healthcare professionals and schedule appointments at your convenience. Quality care is just a click away.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="default"
                size="lg"
                onClick={handleBookAppointment} // Fixed: function is now defined
                iconName="Calendar"
                iconPosition="left"
                className="animate-breathing shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-blue-600 text-white dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                Book Appointment Now
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/doctor-listing')}
                iconName="Search"
                iconPosition="left"
                className="hover:bg-primary/5 border border-gray-300 text-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
              >
                Find Doctors
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8"
            >
              {trustIndicators?.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Icon 
                    name={indicator?.icon} 
                    size={20} 
                    className={`${indicator?.color} dark:text-blue-300`} 
                  />
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {indicator?.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Healthcare professional with patient consultation"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              
              {/* Floating Cards */}
              <motion.div 
                className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Available Now
                  </span>
                </div>
              </motion.div>

              <motion.div 
                className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={16} className="text-warning fill-current" />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    4.9 Rating
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
