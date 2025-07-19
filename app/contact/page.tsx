import Contact from '@/components/sections/Contact';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Contact Sigma Industrial Park Panipat | Book Site Visit | +91-91383-31357',
  description: 'Contact Sigma Industrial Park Panipat for site visits, plot booking, and investment queries. Call +91-91383-31357 or WhatsApp for instant support. Free consultation available.',
  keywords: 'contact sigma panipat, sigma industrial park contact, book site visit panipat, industrial plot booking panipat, sigma group contact number',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16 sm:pt-20">
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}