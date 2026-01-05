import Hero from "@/components/hero/Hero";
import AboutCoach from '@/components/about/AboutCoach';
import Testimonials from '@/components/testimonials/Testimonials';
import Programs from '@/components/programs/Programs';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';
import type { Metadata } from "next";
import FAQ from '@/components/faq/FAQ';

export const metadata: Metadata = {
  title: "Online & Offline Personal Coaching",
  description:
    "Transform your body with personalized online and offline fitness coaching. Sustainable results without extreme diets.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutCoach />
      <Testimonials />
      <Programs />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
