import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";
const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review: "",
      img: people1,
      location: "California",
    },
    {
      _id: 2,
      name: "Winson Herry",
      review: "",
      img: people2,
      location: "California",
    },
    {
      _id: 3,
      name: "Winson Herry",
      review: "",
      img: people3,
      location: "California",
    },
  ];

  return (
    <section className="my-10">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <p className="text-4xl  ">What Our Patients Says</p>
        </div>
        <div>
          <img src={quote} alt="" className="lg:w-48 w-24" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 ">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
