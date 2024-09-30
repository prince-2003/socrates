import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import ButtonPrimary from "./ui/button1";

export default function Header() {
  const navLinksRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricings" },
    { href: "#review", label: "Reviews" },
    { href: "#team", label: "Team" },
  ];
  useEffect(() => {
    if (navLinksRef.current) {
        const grandChildren = navLinksRef.current.querySelectorAll('div > *');
        gsap.fromTo(
          grandChildren,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
        );
      }
      
    if (buttonsRef.current) {
      gsap.fromTo(
        buttonsRef.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
      );
    }
    if (mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <>
      <nav className=" flex bg-white w-[96vw] m-2 rounded-xl sticky top-0 z-10 py-4 justify-between bg-opacity-75 backdrop-filter backdrop-blur-lg px-4  items-center md:gap-2 lg:gap-8 ">
        <div
          ref={navLinksRef}
          className="flex justify-center items-center gap-20 text-black"
        >
          <div className="flex items-center gap-0">
            <svg
              className="w-8 md:w-6 md:h-6 lg:w-10 lg:h-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 9L11 12L8 15M13 15H16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="md:text-[.8rem] lg:text-xl font-semibold cursor-pointer">
              SOCRATES
            </span>
          </div>

          <div className="hidden justify-center items-center gap-6 md:flex">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.href}
                className="text-black text-center md:text-[.7rem] lg:text-[1rem] font-[400] hover:text-gray-400"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div ref={buttonsRef} className=" hidden md:flex gap-2">
          <Link href={{ pathname: "/auth", query: { view: "login" } }} passHref>
            <ButtonPrimary innerHtml="Login" />
          </Link>
          <Link
            href={{ pathname: "/auth", query: { view: "signup" } }}
            passHref
          >
            <ButtonPrimary innerHtml="Sign Up" bgColor="black" />
          </Link>
        </div>

        <div
          ref={mobileMenuRef}
          onClick={handleNav}
          className="block md:hidden cursor-pointer text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </nav>

      <div
        className={
          !nav
            ? "fixed left-[-100%]"
            : "fixed z-20 rounded-tr-2xl rounded-xl bg-opacity-10 backdrop-filter backdrop-blur-lg right-0 top-0 w-[50%]  border-r border-r-gray-900 bg-black ease-in-out duration-500 m-2 "
        }
      >
        <div onClick={handleNav} className="absolute right-4 top-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width="24"
            height="24"
            fill="white"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
        <div className="text-black font-normal text-base flex flex-col gap-6 py-8 px-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
