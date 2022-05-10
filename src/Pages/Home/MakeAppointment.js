import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
const MakeAppointment = () => {
  return (
    <section
      class=" my-36 "
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div class=" flex lg:flex-row gap-20 ">
        <img
          src={doctor}
          className="w-[460px] rounded-lg shadow-2xl mt-[-100px] hidden lg:block flex-1"
          alt="treatment"
        />
        <div className="text-white flex-1 lg:py-16 p-7">
          <p className="text-primary font-bold">Appointment</p>
          <h1 class="text-3xl font-bold">Make an appointment Today</h1>
          <p class="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button class="primary-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
