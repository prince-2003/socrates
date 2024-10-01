import React from "react";
import ReviewCard from "./ui/reviewcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const review = [
  {
    img: "/assets/team_placeholder.jpg",
    name: "Amy Jones",
    rating: 3.5,
    content:
      "Socrates platform is a great platform for learning and teaching. It has a lot of features that make it easy to use and understand. The platform is very user-friendly and the customer service is excellent. I would recommend this platform to anyone who is looking for a great learning experience.",
  },
  {
    img: "/assets/team_placeholder.jpg",
    name: "Rishab Pant",
    rating: 5,
    content:
      "coding was made easy with Socrates platform. I was able to learn coding in a very short time. The platform is very user-friendly and the customer service is excellent. I would recommend this platform to anyone who is looking for a great learning experience.",
  },
  {
    img: "/assets/team_placeholder.jpg",
    name: "Tammy Beaumont",
    rating: 4.5,
    content:
      "The platform is very user-friendly and the customer service is excellent. I would recommend this platform to anyone who is looking for a great learning experience.",
  },
];

export const Review = () => {
  return (
    <section id="review" className="py-14 md:py-24 w-[96vw] m-2 rounded-xl p-10 md:p-20 bg-gray-100 dark:bg-[#0b1727] text-zinc-900 dark:text-white  overflow-hidden">
      <div className="flex flex-col gap-10 md:gap-20 items-center ">
        <div className=" flex flex-col gap-1 items-center ">
          <div className="inline-flex gap-1 items-center bg-black/5 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl px-4 py-2 text-black text-[.8rem] md:text-[1rem] max-w-max">
            <span className="bg-black/5 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-md px-2 text-black">
              <FontAwesomeIcon icon={faUser} />
            </span>
            Customers
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            See What Our Customers <br /> Are Saying
          </h2>
          <p className="text-center text-lg md:text-xl font-light">
            Here's what some of our customers say about our platform.
          </p>
        </div>
        <div className="grid grid-cols-1 flex-col-reverse md:grid-cols-2 lg:grid-cols-3 gap-4">
          {review.map((item, i) => (
            <ReviewCard item={item} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
