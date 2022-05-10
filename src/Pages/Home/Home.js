import React from "react";

import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Footer from "../Shared/Footer";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Team from "./Team";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className=" ">
      <Banner />
      <Info />
      <Services />
      <Team />
      <MakeAppointment />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
