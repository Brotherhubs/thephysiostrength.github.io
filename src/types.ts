
export enum BillingCycle {
  ANNUAL = 'Annual',
  MONTHLY = 'Monthly',
}

export interface PlanFeature {
  prefix?: string; 
  description: string;
  highlight?: boolean; 
  icon?: React.ReactNode;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  currencySymbol: string;
  noOfSessions: string;
  colorScheme: {
    bg: string; 
    border: string; 
    text: string;
    buttonBg: string;
    buttonText: string;
    buttonHoverBg: string;
    bestValueBadgeBg: string;
    bestValueBadgeText: string;
    featureHighlightBg?: string;
    featureHighlightText?: string;
  };
}



export interface HeroSlideData {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}



export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  imageUrl: string;
  testimonial: string;
  rating?: number; // Optional rating, e.g., 1-5
}