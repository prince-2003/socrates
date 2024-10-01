import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface FeatureCardProps {

    title: ReactNode;
    shortDescription: string;
  
  index: number;
  maxHeight: number;
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, shortDescription, index, maxHeight, cardRefs }) => {
  return (
    <div
      key={index}
      className="flex flex-col gap-2 md:gap-4 items-center transform transition-transform duration-300 group hover:scale-105"
    >
      <div className="p-2 md:p-4 grayscale bg-gray-100 rounded-lg group-hover:grayscale-0 shadow-lg overflow-hidden">
        <img src={"/assets/placeholder.png"} className="rounded-lg" />
      </div>
      <div
        ref={(el) => {
          cardRefs.current[index] = el;
        }}
        className="bg-white flex flex-col group-hover:transition-shadow group-hover:shadow-lg justify-center rounded-lg p-4"
        style={{ minHeight: maxHeight }}
      >
        <h3 className="text-xl md:text-2xl font-bold">
          {title}
        </h3>
        <p className="text-sm font-light text-start">
          {shortDescription}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;