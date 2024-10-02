'use client';

import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import {Review} from "@/components/review";
import Team from "@/components/team";


export default function App() {
  
  const NavLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricings" },
    { href: "#review", label: "Reviews" },
    { href: "#team", label: "Team" },
  ];
  return (
    <>
      <Header navLinks={NavLinks} />
      <Hero />
      <Feature />
      <Pricing />
      <Review />
      <Team />
      <Footer />
    </>
  );
}
