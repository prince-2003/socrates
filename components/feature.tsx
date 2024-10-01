import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import { TbBoxMultiple } from "react-icons/tb";
import { SiGooglegemini } from "react-icons/si";
import { FiRefreshCw } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
    <div
      id="features"
      className="w-[96vw] m-2 rounded-xl  p-10 md:p-20 bg-gray-100"
    >
      <div className="flex flex-col justify-center gap-10 md:gap-20">
        <div className="text-2xl md:text-4xl flex flex-col gap-2 font-bold text-start">
          <div className="inline-flex gap-1 items-center bg-black/5 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl px-4 py-2 text-black text-[.8rem] md:text-[1rem] max-w-max">
            Features
            <span className="bg-black/5 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-md px-2 text-black">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
          <h2>Everything Your Need to Learn to Code</h2>
          <p className="text-sm font-light">
            Socrates exceptional flexibility can handle any problems in
            programming. And we never stop innovating.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 md:gap-4 items-center transform transition-transform duration-300 group hover:scale-105 "
            >
              <div className="p-2 md:p-4 grayscale bg-gray-100 rounded-lg group-hover:grayscale-0  shadow-lg overflow-hidden">
                <img src={"/assets/placeholder.png"} className="rounded-lg " />
              </div>
              <div
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="bg-white flex flex-col group-hover:transition-shadow group-hover:shadow-lg justify-center rounded-lg p-4"
                style={{ minHeight: maxHeight }}
              >
                <h3 className="text-xl md:text-2xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-sm font-light text-start">
                  {feature.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
