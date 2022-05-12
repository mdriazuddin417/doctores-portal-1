import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from "../../assets/images/bg.png";
const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      class="hero min-h-screen my-10"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div class="hero-content flex-col lg:flex-row-reverse gap-12">
        <img
          src={chair}
          class="lg:w-[594px] w-[374px] rounded-lg shadow-2xl "
          alt=""
        />
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            className="shadow-xl rounded-lg p-5"
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
