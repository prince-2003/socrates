'use client';
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import ButtonPrimary from "./ui/button1";
import { TiThMenu } from "react-icons/ti";
import { LuHome } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { MdOutlineAdd } from "react-icons/md";


export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const links = [

    { icon: LuHome, href: "/dashboard", label: "Home" },
    { icon: MdOutlineAdd , href: "/dashboard/submit-problems" , label: "Submit a Problem" },

  ];

  return (
    

      <nav className="flex flex-row md:flex-col bg-white md:h-[96vh] m-2 rounded-xl sticky top-[0.5rem] z-10  justify-between bg-opacity-80 backdrop-filter backdrop-blur-xl p-4 items-center md:gap-2 lg:gap-8">
    
          <div className="md:mt-4 flex w-full flex-row gap-6 md:flex-col">
            {links.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Link key={index} href={link.href} className="relative group">
                    <IconComponent className="w-6 h-6" />
                    <div className="absolute whitespace-nowrap -bottom-1 left-[130%] mb-1 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1">
                        {link.label}
            </div>

                </Link>
              );
            })}
          
        </div>

        <Link  href="/auth">
                    <MdLogout className="w-6 h-6" />
                </Link>

        </nav>

        
    
  );
}
