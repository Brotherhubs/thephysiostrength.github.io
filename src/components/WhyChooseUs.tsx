import React from 'react';
import { Plan } from '@/types';
import { physioPlans } from '@/data/plans';

interface WhyChooseUsItemProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  id: string;
  theme: Plan['colorScheme'];
}


const whyChooseUsData = [
  {
    id: 'certified-physio',
    title: 'Certified Physiotherapist',
    description: 'The Physio Strength wellness center have highly experienced and certified physiotherapist.',
  },
  {
    id: 'top-doctors',
    title: 'Top Level Doctors',
    description: 'Our Physiotherapists Doctors are highly Qualified with Bachelor’s & Master’s Degree in Physiotherapy and are Exceptionally Experienced.',
  },
  {
    id: 'top-rehab',
    title: 'Top class rehabilitation',
    description: 'The Physio Strength wellness center ensure that the rehabilitation is consistent and fast.',
  }
];


const WhyChooseUsItem: React.FC<WhyChooseUsItemProps> = ({ icon, title, description, id, theme }) => (
  <div className={`rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 border-2 ${theme.bg} ${theme.border} ${theme.text}`}>
    <div className="mb-5">
      {icon}
    </div>
    <h3 id={`why-choose-us-title-${id}`} className="text-lg font-semibold mb-2">
      {title}
    </h3>
    <p className="text-sm opacity-90 leading-relaxed mb-4 flex-grow">
      {description}
    </p>
  </div>
);

interface WhyChooseUsProps {
  items?: Array<{
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = (props: WhyChooseUsProps) => {
  const items = props.items || whyChooseUsData;
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
            Why Choose Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Whether you or your close one are suffering from knee pain, low back pain, shoulder pain, paralysis, drsinghphysiocare offers certified, specialized care to recover at the comfort of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <WhyChooseUsItem
              key={item.id}
              id={item.id}
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

export default WhyChooseUs;