import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Heart" size={16} />
                <span>Trusted Healthcare Platform</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
                Revolutionizing Healthcare 
                <span className="text-primary"> Access</span>
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed">
                At MediBook Pro, we're committed to making quality healthcare accessible to everyone. Our platform connects patients with verified healthcare providers, streamlining the appointment booking process while maintaining the highest standards of medical care and data security.
              </p>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-text-secondary">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-secondary">1,200+</div>
                <div className="text-sm text-text-secondary">Verified Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-accent">99.9%</div>
                <div className="text-sm text-text-secondary">Uptime</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-floating">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                alt="Modern healthcare facility with professional medical team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-surface border border-border rounded-xl p-4 shadow-floating">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={20} className="text-success" />
                </div>
                <div>
                  <div className="text-sm font-medium text-text-primary">HIPAA Compliant</div>
                  <div className="text-xs text-text-secondary">100% Secure</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-surface border border-border rounded-xl p-4 shadow-floating">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-text-primary">24/7 Support</div>
                  <div className="text-xs text-text-secondary">Always Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;