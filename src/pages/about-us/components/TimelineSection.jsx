import React from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const milestones = [
    {
      id: 1,
      year: "2022",
      quarter: "Q1",
      title: "Company Founded",
      description: "MediBook Pro was established with a vision to revolutionize healthcare accessibility through technology.",
      icon: "Rocket",
      achievements: [
        "Secured initial funding of $2M",
        "Assembled core team of healthcare and tech experts",
        "Developed MVP platform architecture"
      ]
    },
    {
      id: 2,
      year: "2022",
      quarter: "Q3",
      title: "Platform Launch",
      description: "Successfully launched our beta platform with 50 verified healthcare providers across major metropolitan areas.",
      icon: "Globe",
      achievements: [
        "Onboarded first 50 healthcare providers",
        "Processed 1,000+ successful appointments",
        "Achieved HIPAA compliance certification"
      ]
    },
    {
      id: 3,
      year: "2023",
      quarter: "Q1",
      title: "Major Partnerships",
      description: "Formed strategic partnerships with leading healthcare networks and medical institutions.",
      icon: "Handshake",
      achievements: [
        "Partnership with 5 major hospital networks",
        "Integration with leading EHR systems",
        "Expanded to 10 major cities"
      ]
    },
    {
      id: 4,
      year: "2023",
      quarter: "Q3",
      title: "Mobile App Release",
      description: "Launched native mobile applications for iOS and Android, making healthcare more accessible on-the-go.",
      icon: "Smartphone",
      achievements: [
        "50,000+ mobile app downloads",
        "4.8-star rating on app stores",
        "Mobile-first user experience optimization"
      ]
    },
    {
      id: 5,
      year: "2024",
      quarter: "Q1",
      title: "AI Integration",
      description: "Introduced AI-powered appointment matching and intelligent scheduling recommendations.",
      icon: "Brain",
      achievements: [
        "AI-powered doctor matching algorithm",
        "Reduced appointment booking time by 60%",
        "Improved patient-provider compatibility by 40%"
      ]
    },
    {
      id: 6,
      year: "2024",
      quarter: "Q3",
      title: "National Expansion",
      description: "Expanded services nationwide with 1,200+ verified healthcare providers across all 50 states.",
      icon: "MapPin",
      achievements: [
        "Nationwide coverage in all 50 states",
        "1,200+ verified healthcare providers",
        "50,000+ patients served successfully"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Timeline" size={16} />
            <span>Our Journey</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Milestones & Achievements
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From a startup vision to a trusted healthcare platform serving thousands of patients nationwide. 
            Here's how we've grown and evolved to better serve your healthcare needs.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:transform lg:-translate-x-0.5"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div key={milestone?.id} className={`relative flex items-start ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center lg:transform lg:-translate-x-4 z-10">
                  <Icon name={milestone?.icon} size={16} color="white" />
                </div>

                {/* Content Card */}
                <div className={`ml-16 lg:ml-0 lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <div className="medical-card">
                    <div className="p-6 lg:p-8">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {milestone?.year} {milestone?.quarter}
                        </div>
                        <div className="h-1 flex-1 bg-gradient-to-r from-primary/20 to-transparent rounded"></div>
                      </div>

                      <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-3">
                        {milestone?.title}
                      </h3>
                      
                      <p className="text-text-secondary leading-relaxed mb-6">
                        {milestone?.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {milestone?.achievements?.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-2 text-sm text-text-secondary">
                              <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Telescope" size={28} color="white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                Looking Ahead: 2025 & Beyond
              </h3>
              <p className="text-lg text-text-secondary mb-8">
                We're committed to continuous innovation in healthcare technology. Our roadmap includes 
                telemedicine integration, AI-powered health insights, and expanded international coverage 
                to serve patients globally.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Q1 2025</div>
                  <div className="text-sm text-text-secondary">Telemedicine Launch</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">Q3 2025</div>
                  <div className="text-sm text-text-secondary">International Expansion</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">2026</div>
                  <div className="text-sm text-text-secondary">AI Health Insights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;