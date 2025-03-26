// pages/index.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ClientsImpact from '@/components/ClientsImpact';
import Resources from '@/components/Resources';
import Events from '@/components/Events';
import Experts from '@/components/Experts';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <ClientsImpact />
        <Resources />
        <Events />
        <Experts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}