import React from 'react';
import { Plan } from '@/types';
import { physioPlans } from '@/data/plans';
import HeadsetConnectIcon from './icons/HeadsetConnectIcon';
import CalendarConfirmIcon from './icons/CalendarConfirmIcon';
import PhoneIcon from './icons/PhoneIcon';

interface ConvenienceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  theme: Plan['colorScheme'];
}

const ConvenienceItem: React.FC<ConvenienceItemProps> = ({ icon, title, description, theme }) => (
  <div className={`rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 border-2 ${theme.bg} ${theme.border} ${theme.text}`}>
    <div className="mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 uppercase tracking-wide">
      {title}
    </h3>
    <p className="text-sm opacity-90 leading-relaxed">
      {description}
    </p>
  </div>
);

const PatientConvenience: React.FC = () => {
  const convenienceItemsData = [
    {
      icon: <PhoneIcon width={60} height={60} />,
      title: 'Contact Us',
      description: 'Call / WhatsApp your location & treatment requirements.',
    },
    {
      icon: <HeadsetConnectIcon width={60} height={60} />,
      title: 'Physio Connect',
      description: 'Best suited Physio / Chiropractor connects with you.',
    },
    {
      icon: <CalendarConfirmIcon width={60} height={60} />,
      title: 'Confirm',
      description: 'Your appointment for clinic visit or home services is confirmed.',
    },
  ];

  // Get color schemes from plans, ensuring we don't go out of bounds
  const colorSchemes = [
    physioPlans[0].colorScheme,
    physioPlans[1].colorScheme,
    physioPlans[2] ? physioPlans[2].colorScheme : physioPlans[0].colorScheme, // Fallback to first
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-800 tracking-tight">
            PATIENT CONVENIENCE
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            The Physio Strength wellness center make sure accessing physiotherapy at scheduling a home visit is as easy as possible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {convenienceItemsData.map((item, index) => (
            <ConvenienceItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              theme={colorSchemes[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientConvenience;