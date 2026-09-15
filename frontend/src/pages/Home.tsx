import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandStory from '@/components/BrandStory';
import Collections from '@/components/Collections';
import BespokeSection from '@/components/BespokeSection';
import HeritageSection from '@/components/HeritageSection';
import StreetEdit from '@/components/StreetEdit';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <BrandStory />
      <Collections />
      <BespokeSection />
      <HeritageSection />
      <StreetEdit />
      <Testimonials />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  );
}
