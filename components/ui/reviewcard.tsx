'use client';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Fragment } from "react";
import {
    faStar as fasStar,
    faStarHalfAlt,
  } from "@fortawesome/free-solid-svg-icons";
  import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

  const Rating = ({ rating }: { rating: number }) => (
    <p className="text-sm mb-4">
      <span className="text-black">
        {[...Array(5)].map((_, i) => {
          const index = i + 1;
          let content: JSX.Element | null = null;
          if (index <= Math.floor(rating))
            content = <FontAwesomeIcon icon={fasStar} />;
          else if (rating > i && rating < index + 1)
            content = <FontAwesomeIcon icon={faStarHalfAlt} />;
          else if (index > rating) content = <FontAwesomeIcon icon={farStar} />;
  
          return <Fragment key={i}>{content}</Fragment>;
        })}
      </span>
      <span className="mx-1">{rating.toFixed(1)}</span>
    </p>
  );

Rating.propTypes = {
  rating: PropTypes.number,
};

interface ReviewCardProps {
  item: {
    img: string;
    name: string;
    rating: number;
    content: string;
  };
}

const ReviewCard: React.FC<ReviewCardProps> = ({ item }) => {
  return (
    <>
      <div className="flex p-4 shadow-lg flex-col rounded-lg max-w-xs max-h-96 w-full h-full justify-between items-start transform transition-transform duration-300 hover:scale-105">
        <Rating rating={item.rating} />
        <p className="text-sm leading-normal opacity-75 mb-6 text-start">
          {item.content}
        </p>

        <div className="flex flex-col items-start">
          <div className="flex items-center mb-6">
            <img
              src={item.img}
              alt={item.name}
              className="w-10 rounded-full h-10 mr-2"
            />
            <div>
              <h5 className="font-bold my-1">{item.name}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ReviewCard.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewCard;
