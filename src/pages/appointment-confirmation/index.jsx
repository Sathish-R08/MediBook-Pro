import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import SuccessHeader from './components/SuccessHeader';
import AppointmentCard from './components/AppointmentCard';
import TrustSignals from './components/TrustSignals';
import ActionButtons from './components/ActionButtons';
import EmailConfirmationStatus from './components/EmailConfirmationStatus';

const AppointmentConfirmation = () => {
  // Mock appointment data - in a real app, this would come from state/props
  const confirmedAppointments = [
    {
      id: 1,
      confirmationNumber: "APT-2025-001234",
      doctorName: "Dr. Sarah Johnson",
      doctorImage: "https://plus.unsplash.com/premium_photo-1661713606200-2832945b8d3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      specialty: "Cardiologist",
      location: "Heart Care Center, Downtown",
      rating: "4.9",
      date: "January 20, 2025",
      time: "10:30 AM",
      patientName: "John Smith",
      patientAge: 35,
      patientPhone: "+1 (555) 123-4567",
      patientEmail: "john.smith@email.com",
      clinicPhone: "+1 (555) 987-6543"
    },
    {
      id: 2,
      confirmationNumber: "APT-2025-001235",
      doctorName: "Dr. Michael Chen",
      doctorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      specialty: "Dermatologist",
      location: "Skin Health Clinic, Midtown",
      rating: "4.8",
      date: "January 22, 2025",
      time: "2:15 PM",
      patientName: "John Smith",
      patientAge: 35,
      patientPhone: "+1 (555) 123-4567",
      patientEmail: "john.smith@email.com",
      clinicPhone: "+1 (555) 456-7890"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-spacing">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <SuccessHeader />

          {/* Email Confirmation Status */}
          <EmailConfirmationStatus patientEmail={confirmedAppointments?.[0]?.patientEmail} />

          {/* Appointment Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-6 mb-8"
          >
            {confirmedAppointments?.map((appointment, index) => (
              <AppointmentCard
                key={appointment?.id}
                appointment={appointment}
                index={index}
              />
            ))}
          </motion.div>

          {/* Trust Signals */}
          <TrustSignals />

          {/* Action Buttons */}
          <ActionButtons />

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 text-center"
          >
            <div className="medical-card p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                What's Next?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-semibold">1</span>
                  </div>
                  <h4 className="font-medium text-text-primary mb-2">Prepare for Visit</h4>
                  <p className="text-text-secondary">
                    Bring your ID, insurance card, and any relevant medical records
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent font-semibold">2</span>
                  </div>
                  <h4 className="font-medium text-text-primary mb-2">Arrive Early</h4>
                  <p className="text-text-secondary">
                    Please arrive 15 minutes before your scheduled appointment time
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-success font-semibold">3</span>
                  </div>
                  <h4 className="font-medium text-text-primary mb-2">Follow Up</h4>
                  <p className="text-text-secondary">
                    Schedule any recommended follow-up appointments before leaving
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-8 text-center text-sm text-text-secondary"
          >
            <p>
              Questions about your appointment? Contact us at{' '}
              <a href="tel:+1-555-0123" className="text-primary hover:underline font-medium">
                +1 (555) 012-3456
              </a>{' '}
              or visit our{' '}
              <a href="/contact" className="text-primary hover:underline font-medium">
                contact page
              </a>
            </p>
            <p className="mt-2">
              © {new Date()?.getFullYear()} MediBook Pro. All rights reserved.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AppointmentConfirmation;