import React from "react";
import Service from "./Service";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
const Services = () => {
  const services = [
    {
      id: 1,
      img: fluoride,
      title: "Fluoride Treatment",
      text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      img: cavity,
      title: "Cavity Filling",
      text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      img: whitening,
      title: "Teeth Whitening",
      text: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className=" my-20">
      <div className="text-center font-bold">
        <h3 className=" text-primary text-xl ">Our Service</h3>
        <p className=" text-4xl">Services We Provide</p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 pt-10">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
