'use client';
import { useRef, useState, useEffect } from "react";
import { TbBoxMultiple } from "react-icons/tb";
import { SiGooglegemini } from "react-icons/si";
import { FiRefreshCw } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "./ui/featurecard";

const features = [
  {
    imgSrc: "/images/multi-language-support.png",
    title: (
      <>
        <TbBoxMultiple className="inline-block mr-2" size={20} />
        Multi-Language Code Execution
      </>
    ),
    shortDescription:
      "Supports multiple programming languages, allowing users to write, run, and test code in real-time across languages like Python, Java, C++, and JavaScript.",
  },
  {
    imgSrc: "/images/ai-powered-assistance.png",
    title: (
      <>
        <SiGooglegemini className="inline-block mr-2" size={20} /> AI-Powered
        Code Assistance
      </>
    ),
    shortDescription:
      "Integrated AI assistant helps users debug, correct, and optimize their code with contextual suggestions, fixes, and auto-completion.",
  },
  {
    imgSrc: "/images/automated-testing.png",
    title: (
      <>
        <FiRefreshCw className="inline-block mr-2" size={20} />
        Automated Code Review and Testing
      </>
    ),
    shortDescription:
      "Automated testing and review system that checks for errors and suggests improvements to ensure clean, efficient, and high-quality code.",
  },
  {
    imgSrc: "/images/smart-code-recommendations.png",
    title: (
      <>
        <FaLaptopCode className="inline-block mr-2" size={20} />
        Smart Code Recommendations
      </>
    ),
    shortDescription:
      "AI-generated code recommendations help users with coding patterns, libraries, and snippets, optimizing code efficiency and expanding their knowledge.",
  },
];

export default function Feature() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      const heights = cardRefs.current.map((ref) => ref?.clientHeight || 0);
      setMaxHeight(Math.max(...heights));
    }
  }, [features]);

  return (
    <section
      id="features"
      className="w-[96vw] m-2 rounded-xl  p-10 md:p-20 bg-gray-100"
    >
      <div className="flex flex-col justify-center gap-10 md:gap-20">
        <div className="text-2xl md:text-4xl flex flex-col gap-2 font-bold text-start">
          <div className="inline-flex gap-1 items-center bg-black/5 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl px-4 py-2 text-black text-[.8rem] md:text-[1rem] max-w-max">
            
            <span className="bg-black/5 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-md px-2 text-black">
              <FontAwesomeIcon icon={faBox} />
            </span>Features
          </div>
          <h2>Everything Your Need to Learn to Code</h2>
          <p className="text-sm font-light">
            Socrates exceptional flexibility can handle any problems in
            programming. And we never stop innovating.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
                title={feature.title}
                shortDescription={feature.shortDescription}
              index={index}
              maxHeight={maxHeight}
              cardRefs={cardRefs}   />
          ))}
        </div>
      </div>
    </section>
  );
}
