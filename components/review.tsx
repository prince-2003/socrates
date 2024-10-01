import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "John Doe",
    role: "Software Engineer",
    imgSrc: "/images/person1.jpg",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
  },
  {
    name: "Jane Doe",
    role: "Frontend Developer",
    imgSrc: "/images/person2.jpg",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
  },
  {
    name: "John Smith",
    role: "Backend Developer",
    imgSrc: "/images/person3.jpg",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
  },
  {
    name: "Jane Smith",
    role: "Fullstack Developer",
    imgSrc: "/images/person4.jpg",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
  },
];

export default function Review() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      const heights = cardRefs.current.map((ref) => ref?.clientHeight || 0);
      setMaxHeight(Math.max(...heights));
    }
  }, [reviews]);

  return (
    <section className="w-[96vw] m-2 rounded-xl  p-10 md:p-20 bg-gray-100">
      
    </section>
  );
}