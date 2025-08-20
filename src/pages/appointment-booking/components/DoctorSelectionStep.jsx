import React from 'react';
import { motion } from 'framer-motion';
import Select from '../../../components/ui/Select';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const DoctorSelectionStep = ({ selectedDoctor, onDoctorChange, doctors }) => {
  const doctorOptions = doctors?.map(doctor => ({
    value: doctor?.id,
    label: doctor?.name,
    description: doctor?.specialty
  }));

  const selectedDoctorData = doctors?.find(d => d?.id === selectedDoctor);

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-semibold text-text-primary">
          Select Your Doctor
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose from our qualified healthcare professionals
        </p>
      </div>
      {/* Doctor Selection */}
      <div className="max-w-2xl mx-auto">
        <Select
          label="Choose Doctor"
          placeholder="Select a doctor"
          options={doctorOptions}
          value={selectedDoctor}
          onChange={onDoctorChange}
          searchable
          required
          className="text-base"
        />
      </div>
      {/* Selected Doctor Display */}
      {selectedDoctorData && (
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="medical-card p-8 relative overflow-hidden"
          >
            {/* Selection Indicator */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center space-x-2 bg-success/10 text-success px-3 py-1 rounded-full">
                <Icon name="Check" size={14} />
                <span className="text-sm font-medium">Selected</span>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              {/* Doctor Image */}
              <div className="relative flex-shrink-0">
                <Image
                  src={selectedDoctorData?.image}
                  alt={selectedDoctorData?.name}
                  className="w-24 h-24 rounded-2xl object-cover shadow-md"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                  <Icon name="Check" size={16} color="white" />
                </div>
              </div>

              {/* Doctor Information */}
              <div className="flex-1 min-w-0">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-text-primary">
                      Dr. {selectedDoctorData?.name}
                    </h3>
                    <p className="text-primary font-semibold text-lg">
                      {selectedDoctorData?.specialty}
                    </p>
                  </div>

                  {/* Doctor Stats */}
                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 bg-warning/10 text-warning px-2 py-1 rounded-md">
                        <Icon name="Star" size={14} className="fill-current" />
                        <span className="font-semibold">{selectedDoctorData?.rating}</span>
                      </div>
                      <span className="text-muted-foreground">Rating</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={16} className="text-muted-foreground" />
                      <span className="text-text-primary font-medium">
                        {selectedDoctorData?.location}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span className="text-text-primary font-medium">
                        {selectedDoctorData?.experience} years experience
                      </span>
                    </div>
                  </div>

                  {/* Doctor Bio */}
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedDoctorData?.bio}
                  </p>

                  {/* Next Step Hint */}
                  <div className="mt-6 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Icon name="ArrowRight" size={16} className="text-primary" />
                      <span className="text-sm text-primary font-medium">
                        Ready to proceed? Click "Next" to select your appointment date and time.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      {/* Empty State */}
      {!selectedDoctor && (
        <div className="max-w-2xl mx-auto text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="UserCircle" size={24} className="text-muted-foreground" />
          </div>
          <p className="text-muted-foreground">
            Please select a doctor from the dropdown above to continue
          </p>
        </div>
      )}
    </div>
  );
};

export default DoctorSelectionStep;