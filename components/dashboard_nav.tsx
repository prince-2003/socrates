'use client';
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import ButtonPrimary from "./ui/button1";
import { TiThMenu } from "react-icons/ti";
import { LuHome } from "react-icons/lu";
import { MdLogout } from "react-icons/md";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const links = [
    { icon: LuHome, href: "/dashboard" },
    { icon: MdLogout, href: "/auth" },
  ];

  return (
    
      <nav className="flex flex-row md:flex-col bg-white md:h-[96vh] m-2 rounded-xl sticky bottom-0 z-10 py-4 justify-between bg-opacity-80 backdrop-filter backdrop-blur-xl px-4 items-center md:gap-2 lg:gap-8">
    
          <div className="flex flex-row justify-center items-center gap-6 md:flex-col">
            {links.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Link key={index} href={link.href}>
                    <IconComponent className="w-6 h-6" />
                </Link>
              );
            })}
          
        </div>
        </nav>

        
    
  );
}
