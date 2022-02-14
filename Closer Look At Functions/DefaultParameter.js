"use strict";
const bookings = [];
//Default parameter digunakan jika kita tidak mempassing nilai ke function namun nilai
//  parameter yang terjadi tidak undefined
const createBooking = function (
  flightNum,
  numPass = 10,
  price = 120 * numPass
) {
  const booking = {
    flightNum,
    numPass,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH33", 1, 2);
