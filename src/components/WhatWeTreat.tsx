import React from 'react';

interface TreatmentColumnProps {
  title: string;
  items: string[];
  theme: {
    card: string;
    header: string;
    divider: string;
    hover: string;
  };
}

const TreatmentColumn: React.FC<TreatmentColumnProps> = ({ title, items, theme }) => (
  <div className={`rounded-xl shadow-lg overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out ${theme.card}`}>
    <h3 className={`text-center font-semibold uppercase py-3 px-4 tracking-wider ${theme.header}`}>
      {title}
    </h3>
    <ul className={`flex-grow ${theme.divider}`}>
      {items.map((item, index) => (
        <li 
          key={index} 
          className={`p-4 text-sm text-slate-700 transition-colors duration-150 ${theme.hover}`}
        >
          {item}
        </li>
      ))}
      {items.length === 0 && (
        <li className="p-4 text-sm text-slate-500 text-center">No items to display.</li>
      )}
    </ul>
  </div>
);

interface WhatWeTreatProps {
  conditions: string[];
  symptoms: string[];
}

const WhatWeTreat: React.FC<WhatWeTreatProps> = ({ conditions, symptoms }) => {
  const conditionsTheme = {
    card: 'bg-sky-50 border-2 border-sky-400',
    header: 'bg-sky-500 text-white',
    divider: 'divide-y divide-sky-200',
    hover: 'hover:bg-sky-100',
  };

  const symptomsTheme = {
    card: 'bg-green-50 border-2 border-green-400',
    header: 'bg-green-500 text-white',
    divider: 'divide-y divide-green-200',
    hover: 'hover:bg-green-100',
  };

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-800 tracking-tight">
            WHAT WE TREAT
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            We offer treatments across neuro / ortho / pediatrics / sports related issues using approved procedures in Physiotherapy, Chiropractor, Dry Needling, Kinesiology etc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <TreatmentColumn title="CONDITIONS" items={conditions} theme={conditionsTheme} />
          <TreatmentColumn title="SYMPTOMS" items={symptoms} theme={symptomsTheme} />
        </div>
      </div>
    </section>
  );
};

export default WhatWeTreat;
