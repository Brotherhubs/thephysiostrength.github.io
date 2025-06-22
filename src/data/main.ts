import { Testimonial } from "@/types";

// Sample data for WhatWeTreat component
const conditionsData: string[] = [
  "Varicose Veins",
  "Popliteal (Baker's) Cyst",
  "Posterior Cruciate Ligament (PCL) Injury",
  "Lateral Collateral Ligament (LCL) Injury",
  "Medial Collateral Ligament (MCL) Injury",
  "Patellar Dislocation",
  "Sports Hernia",
  "Frozen Shoulder",
];

const symptomsData: string[] = [
  "Muscle Spasm",
  "Tremors",
  "Joint Cracking / Popping",
  "Foot Pain",
  "Sprains and Strains",
  "Shortness of Breath",
  "Neck Stiffness",
  "Back Ache",
];


const testimonialData: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Pal',
    location: 'Noida, India',
    imageUrl: '/images/generic-person.png',
    testimonial: 'The team here is fantastic! My back pain has significantly reduced after just a few sessions. Highly recommend their services.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Sumit Patel',
    location: 'Delhi, India',
    imageUrl: '/images/generic-person.png',
    testimonial: 'I had a sports injury and was worried I wouldn\'t recover quickly. Thanks to the expert care I received, I\'m back on the field!',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Rajni Malhotra',
    location: 'Noida, India',
    imageUrl: '/images/generic-person.png',
    testimonial: 'Very professional and knowledgeable therapists. They created a personalized plan that worked wonders for my knee.',
    rating: 4,
  },
];


export { conditionsData, symptomsData, testimonialData };