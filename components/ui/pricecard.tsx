import React from 'react';
import Link from 'next/link';
import ButtonPrimary from "./button1";

interface PriceCardProps {
  tier: {
    id: string;
    name: string;
    description: string;
    price: string | [string, string];
    cta: string;
    features: string[];
  };
}
const CheckIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-6 h-6 ${className || ""}`}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  ); 
const PriceCard: React.FC<PriceCardProps> = ({ tier }) => {
  return (
    <div
      key={tier.id}
      className={`card lg:max-w-xs ring-1 rounded-3xl p-8 md:p-8 bg-white text-black ring-gray-900 transition-transform duration-300`}
    >
      <h3 id={tier.id} className={`text-2xl font-bold tracking-tight`}>
        {tier.name}
      </h3>
      <p className={`mt-4 text-sm leading-6`}>{tier.description}</p>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-4xl font-bold tracking-tight">
          {typeof tier.price === 'string' ? tier.price : tier.price[1]}
        </span>
      </p>
      <Link
        href={
          tier.name.toLowerCase() === 'free'
            ? { pathname: '/auth', query: { view: 'signup' } }
            : ''
        }
        passHref
        aria-describedby={tier.id}
        className="flex justify-center mt-6"
      >
        <ButtonPrimary
          innerHtml={tier.cta}
          bgColor={tier.name === 'Free' ? 'transparent' : 'black'}
          className="w-full"
        />
      </Link>
      <ul className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-500">
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckIcon className="h-6 w-6 text-gray-500" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;