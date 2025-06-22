import React from 'react';
import { Plan } from '../types';

const WHATSAPP_NUMBER = '919927772973';

interface PlanCardProps {
  plan: Plan;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  const captionText = plan.id.replace('-', ' ').toUpperCase() + ' PLAN';
  const price = plan.price;
  const displayPrice = `${plan.currencySymbol}${price}`;

  return (
    <div
      className={`relative flex flex-col p-6 rounded-xl shadow-lg h-full 
                 ${plan.colorScheme.bg} border-2 ${plan.colorScheme.border} ${plan.colorScheme.text}
                 transform hover:scale-105 transition-transform duration-300 ease-in-out group`}
      role="article"
      aria-labelledby={`plan-title-${plan.id}`}
    >
      {/* Caption */}
      <span className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${plan.colorScheme.text} opacity-70`}>
        {captionText}
      </span>

      {/* Title */}
      <h3 id={`plan-title-${plan.id}`} className="text-2xl font-bold mb-3">{plan.name}</h3>

      {/* Short Description */}
      <p className="text-sm opacity-90 mb-4 flex-grow">{plan.description}</p>

      {/* Pricing Section */}
      <div className={`my-4 text-left ${plan.colorScheme.text}`}>
        <span className="text-4xl font-bold">{displayPrice}</span>
        <span className="text-base font-medium opacity-80">/{plan.noOfSessions}</span>
      </div>

      {/* CTA Button */}
      <button
        className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors duration-200 border 
                   mt-auto ${plan.colorScheme.buttonBg} ${plan.colorScheme.buttonText} 
                   hover:${plan.colorScheme.buttonHoverBg} border-black/20 
                   focus:ring-2 focus:ring-offset-2 ${plan.colorScheme.border} cursor-pointer`}
        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I'm interested in the ${plan.name} plan.`, '_blank')}
        aria-label={`Chat on WhatsApp about the ${plan.name} plan`}
      >
        Chat on WhatsApp
      </button>
    </div>
  );
};


export default PlanCard;