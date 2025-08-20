import React from 'react';
import Icon from '../../../components/AppIcon';

const SpecialtiesTab = ({ doctor }) => {
  return (
    <div className="space-y-6">
      {/* Main Specialty */}
      <div className="medical-card p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Icon name="Heart" size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-text-primary">Primary Specialty</h3>
            <p className="text-primary font-medium">{doctor?.specialty}</p>
          </div>
        </div>
        <p className="text-text-secondary leading-relaxed">
          Specialized in comprehensive cardiac care with expertise in both diagnostic and interventional procedures. 
          Focused on providing personalized treatment plans for complex cardiovascular conditions.
        </p>
      </div>
      {/* Specialty Areas */}
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-4">Areas of Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {doctor?.specialties?.map((specialty, index) => (
            <div key={index} className="medical-card p-5">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name={specialty?.icon} size={18} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary mb-2">
                    {specialty?.name}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {specialty?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Treatment Procedures */}
      <div className="medical-card p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Common Procedures</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            'Cardiac Catheterization',
            'Angioplasty & Stenting',
            'Echocardiography',
            'Stress Testing',
            'Heart Rhythm Monitoring',
            'Preventive Screenings',
            'Cholesterol Management',
            'Hypertension Treatment',
            'Heart Disease Prevention'
          ]?.map((procedure, index) => (
            <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted transition-colors">
              <Icon name="Check" size={16} className="text-success flex-shrink-0" />
              <span className="text-sm text-text-secondary">{procedure}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Conditions Treated */}
      <div className="medical-card p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Conditions Treated</h3>
        <div className="space-y-3">
          {[
            { 
              condition: 'Coronary Artery Disease', 
              description: 'Comprehensive management including lifestyle counseling and interventional procedures' 
            },
            { 
              condition: 'Heart Failure', 
              description: 'Advanced treatment options and ongoing monitoring for optimal outcomes' 
            },
            { 
              condition: 'Arrhythmias', 
              description: 'Diagnosis and treatment of irregular heart rhythms using latest technology' 
            },
            { 
              condition: 'Valvular Heart Disease', 
              description: 'Evaluation and management of heart valve disorders' 
            },
            { 
              condition: 'Hypertension', 
              description: 'Comprehensive blood pressure management and cardiovascular risk reduction' 
            }
          ]?.map((item, index) => (
            <div key={index} className="p-3 border border-border rounded-lg">
              <h4 className="font-medium text-text-primary mb-1">{item?.condition}</h4>
              <p className="text-sm text-text-secondary">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialtiesTab;