import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitterSquare,
  faYoutube,
  faFacebookSquare,
  faPinterest,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

const quickLinks = [
  { value: "Terms & Conditions", href: "#!" },
  { value: "Privacy Policy", href: "#!" },
  { value: "Refund Policy", href: "#!" },
];

const socialMedia = [
  { value: "Facebook", href: "#!" },
  { value: "Instagram", href: "#!" },
  { value: "LinkedIn", href: "#!" },
  { value: "Twitter", href: "#!" },
];

const jobInfo = [
  { value: "Select", href: "#!" },
  { value: "Service", href: "#!" },
  { value: "Payment", href: "#!" },
];

const languageOptions = [
  { value: "en", text: "English" },
  { value: "bn", text: "Bangla" },
];

const socialIcons = [
  { icon: faLinkedin, href: "#!" },
  { icon: faTwitterSquare, href: "#!" },
  { icon: faYoutube, href: "#!" },
  { icon: faFacebookSquare, href: "#!" },
];

const Footer = () => {
  return (
    <footer className="w-[96vw] m-2 rounded-xl p-10 md:p-20 bg-gray-100 text-gray-700 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3  justify-between gap-2">
          
          <Link href="/" passHref>
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
          </Link>

          
          
            
            <div>
              <h5 className="text-lg font-bold mb-4">Quick Links</h5>
              <ul>
                {quickLinks.map((link, i) => (
                  <li key={i} className="mb-2">
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      {link.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

        
            <div>
              <h5 className="text-lg font-bold mb-4">Social Media</h5>
              <ul>
                {socialMedia.map((link, i) => (
                  <li key={i} className="mb-2">
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      {link.value}
                    </a>
                  </li>
                ))}
              </ul>
            
         
          </div>
        </div>

      
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center border-t pt-6">

          <div className="flex space-x-6">
            {socialIcons.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-xl"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <span>Copyright © Socrates, All rights reserved</span>
        </div>
    </footer>
  );
};

export default Footer;
