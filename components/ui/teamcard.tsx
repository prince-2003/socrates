import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

interface TeamMember {
  picture: string;
  fullName: string;
  designation: string;
  socialLinks: { icon: any; href: string }[];
}

export const TeamMemberItem = ({ member }: { member: TeamMember }) => (
  <div className="bg-white dark:bg-slate-800 flex flex-col space-between shadow-xl rounded-xl transform transition-transform duration-300 hover:scale-105 h-full p-6 lg:p-8">
    <img
      src={member.picture}
      alt={member.fullName}
      className="max-w-full h-auto rounded-full border-4 p-1 border-gray-600 grayscale hover:grayscale-0 mx-auto"
      width="120"
    />
    <div className="mt-6">
      <h4 className="text-2xl font-medium mb-1">{member.fullName}</h4>
      <p className="mb-4 text-sm">{member.designation}</p>
    </div>
    <div className="mt-auto">
      {member.socialLinks.map((item, i) => (
        <a
          href={item.href}
          className={`inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 ${
            i + 1 !== member.socialLinks.length && "mr-4"
          }`}
          key={i}
        >
          <FontAwesomeIcon icon={item.icon} />
        </a>
      ))}
    </div>
  </div>
);

TeamMemberItem.propTypes = {
  member: PropTypes.object.isRequired,
};