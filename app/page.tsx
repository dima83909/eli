import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import AboutCoach from "@/components/about/AboutCoach";
import Testimonials from "@/components/testimonials/Testimonials";
import Programs from "@/components/programs/Programs";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";
import FAQ from "@/components/faq/FAQ";

export const metadata: Metadata = {
  title: "Персональний фітнес-коучинг",
  description: "Персональний фітнес-коучинг для жінок: онлайн та офлайн тренування без крайнощів.",
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutCoach />
      <Programs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
