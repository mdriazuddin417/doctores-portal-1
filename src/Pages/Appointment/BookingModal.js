import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;

    const userName = e.target.name.value;
    const number = e.target.number.value;
    const email = e.target.email.value;

    fetch("http://localhost:5000/booking", {
      method: "POST",
      body: JSON.stringify({
        slot,
        userName,
        name,
        number,
        email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    //to close the modal
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />

      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary">Booking for: {name}</h3>
          <form
            className="grid grid-cols-1 gap-3 justify-items-center mt-4"
            onSubmit={handleBooking}
          >
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="number"
              class="input input-bordered w-full max-w-xs"
            />

            <input
              type="submit"
              value={"Submit"}
              class="btn btn-secondary text-white w-full max-w-xs"
            />
          </form>
          <div class="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
