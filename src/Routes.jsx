import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import AppointmentBooking from './pages/appointment-booking';
import AppointmentConfirmation from './pages/appointment-confirmation';
import Contact from './pages/contact';
import DoctorListing from './pages/doctor-listing';
import DoctorDetails from './pages/doctor-details';
import AboutUs from './pages/about-us';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/appointment-booking" element={<AppointmentBooking />} />
        <Route path="/appointment-confirmation" element={<AppointmentConfirmation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor-listing" element={<DoctorListing />} />
        <Route path="/doctor-details/:doctorId?" element={<DoctorDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;