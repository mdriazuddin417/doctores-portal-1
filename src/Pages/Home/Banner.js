import React from "react";
import chair from "../../../src/assets/images/chair.png";
import bg from "../../../src/assets/images/bg.png";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero min-h-screen ">
        <div className="hero-content gap-4 flex-col lg:flex-row-reverse">
          <img src={chair} className="w-[594px] rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="primary-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
