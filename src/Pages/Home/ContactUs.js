import React from "react";
import appointment from "../../assets/images/appointment.png";
const ContactUs = () => {
  return (
    <section
      className="text-center my-28  lg:py-16 py-2 "
      style={{
        background: `url(${appointment})`,
      }}
    >
      <h2 className="text-xl font-bold text-primary">Contact</h2>
      <h4 className="text-4xl  text-white">Stay connected with us</h4>

      <div className="flex flex-col space-y-5 justify-center items-center mt-5 lg:w-[450] w-96 mx-auto">
        <input
          type="text"
          placeholder="Email Address"
          className=" w-full py-2 px-5 rounded-xl focus:outline-none "
        />
        <input
          type="text"
          placeholder="Subject"
          className=" w-full py-2 px-5 rounded-xl focus:outline-none "
        />
        <textarea
          className="w-full rounded-xl focus:outline-none px-5 py-2 h-[150px]"
          placeholder="Your message"
        ></textarea>
        <button className="primary-btn">Submit</button>
      </div>
    </section>
  );
};

export default ContactUs;
