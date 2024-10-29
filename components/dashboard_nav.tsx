'use client';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuHome } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { MdOutlineAdd } from "react-icons/md";

export default function Header() {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(`https://socrates-be-msw1.onrender.com/sessionLogout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        router.push('/auth');
      } else {
        const errorData = await response.json();
        console.error('Logout failed:', errorData.detail);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const links = [
    { icon: LuHome, href: "/dashboard", label: "Home" },
    { icon: MdOutlineAdd, href: "/dashboard/submit-problems", label: "Submit a Problem" },
  ];

  return (
    <nav className="flex flex-row md:flex-col bg-white md:h-[96vh] m-2 rounded-xl sticky top-[0.5rem] z-10 justify-between bg-opacity-80 backdrop-filter backdrop-blur-xl p-4 items-center md:gap-2 lg:gap-8">
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

      <button onClick={handleLogout} className="relative group">
        <MdLogout className="w-6 h-6" />
        <div className="absolute whitespace-nowrap -bottom-1 left-[130%] mb-1 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1">
          Logout
        </div>
      </button>
    </nav>
  );
}