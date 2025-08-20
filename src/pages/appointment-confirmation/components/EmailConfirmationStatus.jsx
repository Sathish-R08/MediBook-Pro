import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const EmailConfirmationStatus = ({ patientEmail }) => {
  const [emailStatus, setEmailStatus] = useState('sending');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate email sending process
    const timer = setTimeout(() => {
      setEmailStatus('sent');
      setProgress(100);
    }, 2000);

    // Animate progress
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);

  const getStatusConfig = () => {
    switch (emailStatus) {
      case 'sending':
        return {
          icon: 'Mail',
          iconColor: 'text-primary',
          bgColor: 'bg-primary/10',
          title: 'Sending Confirmation Email...',
          description: 'Please wait while we send your appointment details'
        };
      case 'sent':
        return {
          icon: 'MailCheck',
          iconColor: 'text-success',
          bgColor: 'bg-success/10',
          title: 'Email Confirmation Sent!',
          description: 'Check your inbox for detailed appointment information'
        };
      default:
        return {
          icon: 'MailX',
          iconColor: 'text-error',
          bgColor: 'bg-error/10',
          title: 'Email Delivery Failed',
          description: 'Please check your email address or contact support'
        };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9 }}
      className="medical-card p-6 mb-6"
    >
      <div className="flex items-start space-x-4">
        <div className={`flex items-center justify-center w-12 h-12 ${statusConfig?.bgColor} rounded-lg`}>
          <Icon 
            name={statusConfig?.icon} 
            size={24} 
            className={statusConfig?.iconColor}
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary mb-1">
            {statusConfig?.title}
          </h3>
          <p className="text-text-secondary mb-3">
            {statusConfig?.description}
          </p>
          
          <div className="flex items-center space-x-3 text-sm">
            <Icon name="Mail" size={16} className="text-text-secondary" />
            <span className="text-text-secondary">Sent to:</span>
            <span className="font-medium text-text-primary">{patientEmail}</span>
          </div>

          {emailStatus === 'sending' && (
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm text-text-secondary mb-2">
                <span>Sending progress</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  className="bg-primary h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          {emailStatus === 'sent' && (
            <div className="mt-4 p-3 bg-success/5 rounded-lg border border-success/20">
              <div className="flex items-center space-x-2 text-sm text-success">
                <Icon name="CheckCircle" size={16} />
                <span className="font-medium">Delivered successfully</span>
                <span className="text-text-secondary">• Just now</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {emailStatus === 'sent' && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm text-text-secondary text-center">
            Didn't receive the email? Check your spam folder or{' '}
            <button className="text-primary hover:underline font-medium">
              resend confirmation
            </button>
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default EmailConfirmationStatus;