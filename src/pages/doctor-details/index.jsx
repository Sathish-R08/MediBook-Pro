import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import DoctorProfile from './components/DoctorProfile';
import DoctorTabs from './components/DoctorTabs';
import BookingFloatingButton from './components/BookingFloatingButton';
import Breadcrumb from './components/Breadcrumb';

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock doctor data - In real app, this would come from API
  useEffect(() => {
    const fetchDoctorData = async () => {
      setLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock data - replace with actual API call
      const mockDoctor = {
        id: doctorId || '1',
        name: 'Dr. Sarah Johnson',
        specialty: 'Cardiologist',
        image: '/api/placeholder/200/200',
        rating: 4.9,
        reviewCount: 247,
        experience: 15,
        location: 'Heart Center, New York',
        education: 'Harvard Medical School',
        certifications: ['Board Certified Cardiologist', 'FACC', 'FSCAI'],
        languages: ['English', 'Spanish', 'French'],
        about: 'Dr. Sarah Johnson is a highly experienced cardiologist with over 15 years of practice. She specializes in interventional cardiology and has performed over 2,000 cardiac procedures. Dr. Johnson is known for her compassionate care and commitment to patient education.',
        specialties: [
          {
            name: 'Interventional Cardiology',
            description: 'Specialized procedures for heart conditions',
            icon: 'Heart'
          },
          {
            name: 'Cardiac Catheterization',
            description: 'Advanced diagnostic and treatment procedures',
            icon: 'Activity'
          },
          {
            name: 'Preventive Cardiology',
            description: 'Heart disease prevention and lifestyle counseling',
            icon: 'Shield'
          },
          {
            name: 'Heart Failure Management',
            description: 'Comprehensive care for heart failure patients',
            icon: 'Zap'
          }
        ],
        reviews: [
          {
            id: 1,
            patientName: 'John Smith',
            rating: 5,
            comment: 'Dr. Johnson is exceptional. She explained everything clearly and made me feel comfortable during the entire process.',
            date: '2024-01-15',
            verified: true
          },
          {
            id: 2,
            patientName: 'Maria Garcia',
            rating: 5,
            comment: 'Outstanding care and expertise. I highly recommend Dr. Johnson to anyone needing cardiac care.',
            date: '2024-01-10',
            verified: true
          },
          {
            id: 3,
            patientName: 'David Chen',
            rating: 4,
            comment: 'Professional and knowledgeable. The wait time was a bit long, but the care was worth it.',
            date: '2024-01-05',
            verified: true
          }
        ],
        availability: [
          { date: '2024-01-20', time: '9:00 AM', available: true },
          { date: '2024-01-20', time: '10:30 AM', available: false },
          { date: '2024-01-20', time: '2:00 PM', available: true },
          { date: '2024-01-21', time: '9:00 AM', available: true },
          { date: '2024-01-21', time: '11:00 AM', available: true },
          { date: '2024-01-21', time: '3:30 PM', available: false }
        ],
        consultation: {
          fee: 150,
          duration: 30,
          type: 'In-person & Virtual'
        }
      };

      setDoctor(mockDoctor);
      setLoading(false);
    };

    fetchDoctorData();
  }, [doctorId]);

  const handleBookAppointment = () => {
    navigate('/appointment-booking', { 
      state: { 
        selectedDoctor: doctor,
        fromDoctorDetails: true 
      } 
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-6">
            <div className="h-4 bg-muted rounded w-1/3"></div>
            <div className="h-48 bg-muted rounded"></div>
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-semibold text-text-primary mb-4">
              Doctor Not Found
            </h1>
            <p className="text-text-secondary mb-6">
              The doctor you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/doctor-listing"
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Browse All Doctors
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumb Navigation */}
        <Breadcrumb doctorName={doctor?.name} />

        {/* Doctor Profile Section */}
        <DoctorProfile doctor={doctor} />

        {/* Tabbed Content */}
        <DoctorTabs 
          doctor={doctor} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />

        {/* Desktop Booking Sidebar - Only shown on larger screens */}
        <div className="hidden lg:block">
          {/* This would be positioned as a sticky sidebar in a real implementation */}
        </div>
      </main>
      {/* Mobile Floating Book Button */}
      <BookingFloatingButton 
        onBook={handleBookAppointment}
        fee={doctor?.consultation?.fee}
      />
    </motion.div>
  );
};

export default DoctorDetails;