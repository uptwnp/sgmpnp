import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}