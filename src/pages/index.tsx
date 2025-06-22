import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlanCards from "@/components/PlanCards";
import { physioPlans } from '@/data/plans';
import { HeroSlideData, Plan } from '@/types';
import HeroCarousel from "@/components/HeroCarousel";
import { heroSlidesData } from "@/data/hero-slides";
import WhatWeTreat from "@/components/WhatWeTreat";
import { conditionsData, symptomsData, testimonialData } from "@/data/main";
import PatientConvenience from "@/components/PatientConvenience";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurTestimonials from "@/components/OurTestimonials";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import nextConfig from '../../next.config';
// import LocationMap from "@/components/LocationMap";

// const sampleClinicLocation = "Apollo Physiotherapy Center, Andheri West, Mumbai, Maharashtra 400058";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ plans, heroSlides }: { plans: Plan[], heroSlides: HeroSlideData[] }) {
  return (
    <>
      <Head>
        <title>Expert Physiotherapy at Home & Clinic | The Physio Strength Wellness Center</title>
        <meta name="description" content="Regain strength and live pain-free with The Physio Strength Wellness Center. We offer expert physiotherapy for neuro, ortho, and sports injuries at our clinic or in the comfort of your home." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        <link rel="icon" href={`${nextConfig.basePath}/favicon.svg`} type="image/svg+xml" />
        <link rel="canonical" href="https://www.thephysiostrength.com/" />
        {/* --- Open Graph / Facebook --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thephysiostrength.com/" />
        <meta property="og:title" content="Expert Physiotherapy at Home & Clinic | The Physio Strength Wellness Center" />
        <meta property="og:description" content="Regain strength and live pain-free with The Physio Strength Wellness Center. We offer expert physiotherapy for neuro, ortho, and sports injuries." />
        <meta property="og:image" content={`https://www.thephysiostrength.com/${nextConfig.basePath}/images/medical-assistant-helping-patient-with-physiotherapy-exercises.jpg`} />
        <meta property="og:site_name" content="The Physio Strength Wellness Center" />

        {/* --- Twitter --- */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.your-domain.com/" />
        <meta property="twitter:title" content="Expert Physiotherapy at Home & Clinic | The Physio Strength Wellness Center" />
        <meta property="twitter:description" content="Regain strength and live pain-free with The Physio Strength Wellness Center. We offer expert physiotherapy for neuro, ortho, and sports injuries." />
        <meta property="twitter:image" content="https://www.your-domain.com/og-image.png" />
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gradient-to-br from-slate-100 to-sky-100`} >
        <Header />
        <main >
          <HeroCarousel slides={heroSlides} />
          {/* What We Treat Section */}
          <PlanCards plans={plans} />
          <WhatWeTreat conditions={conditionsData} symptoms={symptomsData} />
          <WhyChooseUs />
          <PatientConvenience /> {/* Add the new component here */}
          <OurTestimonials testimonials={testimonialData} />
          {/* <LocationMap location={sampleClinicLocation} title="Visit Our Clinic"  mapFrameTitle={`Map showing location of clinic at ${sampleClinicLocation}`} */}
        </main>
        <Footer />
        <FloatingActionButtons />
      </div>
    </>
  );
}


export async function getStaticProps() {
  const plans = physioPlans;
  const heroSlides = heroSlidesData;

  return { props: { plans, heroSlides } }
}
