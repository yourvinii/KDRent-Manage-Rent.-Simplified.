import React from "react";
import TestimonialCard from "../common/TestimonialCard";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      review: "Found a house in just 2 days.",
    },
    {
      id: 2,
      name: "Sarah Smith",
      review: "The chat feature made communication easy.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      review: "Very smooth and secure rental experience.",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h3 className="font-semibold text-2xl">See What Our User's Say</h3>
      <div className=" grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {testimonials.map((t) => (
          <TestimonialCard name={t.name} review={t.review} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
