import React from 'react';
import Icon from '../../../components/AppIcon';

const AboutTab = ({ doctor }) => {
  return (
    <div className="medical-card p-6 space-y-6">
      {/* About Description */}
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-3">About Dr. {doctor?.name?.split(' ')?.pop()}</h3>
        <p className="text-text-secondary leading-relaxed">
          {doctor?.about}
        </p>
      </div>
      {/* Education & Certifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 border-t border-border">
        {/* Education */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" size={18} className="text-primary" />
            </div>
            <h4 className="font-semibold text-text-primary">Education</h4>
          </div>
          <p className="text-text-secondary pl-10">
            {doctor?.education}
          </p>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
              <Icon name="Briefcase" size={18} className="text-success" />
            </div>
            <h4 className="font-semibold text-text-primary">Experience</h4>
          </div>
          <p className="text-text-secondary pl-10">
            {doctor?.experience} years of professional medical practice
          </p>
        </div>
      </div>
      {/* Certifications */}
      <div className="pt-6 border-t border-border">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="Award" size={18} className="text-accent" />
          </div>
          <h4 className="font-semibold text-text-primary">Board Certifications</h4>
        </div>
        <div className="space-y-2 pl-10">
          {doctor?.certifications?.map((certification, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
              <span className="text-text-secondary">{certification}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Professional Highlights */}
      <div className="pt-6 border-t border-border">
        <h4 className="font-semibold text-text-primary mb-4">Professional Highlights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <Icon name="Users" size={18} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <div className="font-medium text-text-primary">Patient Care</div>
              <div className="text-sm text-text-secondary">Treated over 5,000 patients</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="Target" size={18} className="text-success mt-1 flex-shrink-0" />
            <div>
              <div className="font-medium text-text-primary">Success Rate</div>
              <div className="text-sm text-text-secondary">98% treatment success rate</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="BookOpen" size={18} className="text-accent mt-1 flex-shrink-0" />
            <div>
              <div className="font-medium text-text-primary">Research</div>
              <div className="text-sm text-text-secondary">Published 25+ medical papers</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Icon name="Heart" size={18} className="text-warning mt-1 flex-shrink-0" />
            <div>
              <div className="font-medium text-text-primary">Specialization</div>
              <div className="text-sm text-text-secondary">Advanced cardiac procedures</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;