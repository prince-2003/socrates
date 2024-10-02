'use client';

import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import {Review} from "@/components/review";
import Team from "@/components/team";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      <ul className="flex flex-col md:flex-row w-full max-w-2xl justify-center items-center gap-6 py-4 z-10">
        <li className="w-full md:w-auto">
          <Link href="/auth" passHref>
            <Button className="w-full hover:scale-105 transition-transform">
              Login/Sign Up
            </Button>
          </Link>
        </li>
        <li className="w-full md:w-auto">
          <Link href="/dashboard/submit-problems" passHref>
            <Button className="w-full hover:scale-105 transition-transform">
              Submit a New Problem
            </Button>
          </Link>
        </li>
        <li className="w-full md:w-auto">
          <Link href="/problems" passHref>
            <Button className="w-full hover:scale-105 transition-transform">
              Solve Problems
            </Button>
          </Link>
        </li>
      </ul>
      <Footer />
    </>
  );
}
