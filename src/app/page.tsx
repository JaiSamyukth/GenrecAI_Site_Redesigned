import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Process from '@/components/home/Process';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import Integrations from '@/components/home/Integrations';
import CTA from '@/components/home/CTA';

export const metadata = {
  title: 'Genrec AI - Privacy-First Engineering for Enterprise',
  description: 'We don\'t just build software, we create leverage for your business. Privacy-first AI solutions for construction, hospitality, and education.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Process />
      <Stats />
      <Testimonials />
      <Integrations />
      <CTA />
    </>
  );
}
