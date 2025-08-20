import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqData = [
    {
      id: 1,
      question: "How do I book an appointment through MediBook Pro?",
      answer: `You can book an appointment by visiting our Doctor Listing page, selecting your preferred healthcare provider, and clicking the "Book Now" button. Fill out the appointment form with your preferred date, time, and personal information. You'll receive a confirmation once your appointment is scheduled.`
    },
    {
      id: 2,
      question: "Can I cancel or reschedule my appointment?",
      answer: `Yes, you can cancel or reschedule your appointment up to 24 hours before the scheduled time. Contact our appointments team at +1 (555) 123-4567 or email appointments@medibookpro.com. Please note that cancellations made less than 24 hours in advance may be subject to a cancellation fee.`
    },
    {
      id: 3,
      question: "Is my personal health information secure on this platform?",
      answer: `Absolutely. MediBook Pro is fully HIPAA compliant and uses industry-standard encryption to protect your personal health information. We never share your data with third parties without your explicit consent, and all communications are secured with SSL encryption.`
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer: `We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and most insurance plans. You can also pay through HSA/FSA accounts. Payment is typically processed at the time of service or according to your healthcare provider's billing policies.`
    },
    {
      id: 5,
      question: "How do I find doctors by specialty?",
      answer: `On our Doctor Listing page, you can use the specialty filter to narrow down healthcare providers by their medical specialization. We offer filters for cardiology, dermatology, pediatrics, orthopedics, and many other specialties to help you find the right care.`
    },
    {
      id: 6,
      question: "What if I need technical support with the platform?",
      answer: `Our technical support team is available Monday-Friday 8 AM-8 PM EST. You can reach them at +1 (555) 345-6789 or email support@medibookpro.com. For urgent technical issues, we also offer live chat support during business hours.`
    },
    {
      id: 7,
      question: "Can I book multiple appointments at once?",
      answer: `Yes, MediBook Pro supports multi-appointment booking. You can schedule appointments with different healthcare providers or multiple sessions with the same provider in a single booking session. This feature is particularly useful for families or patients requiring ongoing care.`
    },
    {
      id: 8,
      question: "Do you offer telemedicine appointments?",
      answer: `Many of our healthcare providers offer telemedicine consultations. When booking an appointment, you'll see options for both in-person and virtual visits where available. Telemedicine appointments require a stable internet connection and a device with camera and microphone capabilities.`
    }
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems?.has(id)) {
      newOpenItems?.delete(id);
    } else {
      newOpenItems?.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="medical-card p-6">
      <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
        <Icon name="HelpCircle" size={24} className="text-primary mr-3" />
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqData?.map((item) => {
          const isOpen = openItems?.has(item?.id);
          
          return (
            <div key={item?.id} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(item?.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-text-primary pr-4">
                  {item?.question}
                </span>
                <Icon
                  name={isOpen ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className="text-text-secondary flex-shrink-0 transition-transform duration-200"
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-4 border-t border-border bg-muted/30">
                  <p className="text-text-secondary leading-relaxed pt-4">
                    {item?.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-8 p-4 bg-primary/5 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="MessageCircle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-text-primary mb-2">
              Still have questions?
            </h4>
            <p className="text-sm text-text-secondary mb-3">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href="tel:+15554567890"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-smooth"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                Call us: +1 (555) 456-7890
              </a>
              <a
                href="mailto:info@medibookpro.com"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-smooth"
              >
                <Icon name="Mail" size={16} className="mr-2" />
                Email: info@medibookpro.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;