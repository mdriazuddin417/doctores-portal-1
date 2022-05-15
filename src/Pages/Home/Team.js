import React from "react";
import img from "../../assets/images/treatment.png";

const Team = () => {
  return (
    <div className="hero my-32 ">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <img
          src={img}
          className="w-[460px] rounded-lg shadow-2xl"
          alt="treatment"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="primary-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Team;
