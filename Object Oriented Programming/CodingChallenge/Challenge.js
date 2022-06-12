const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);
Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log("Speed Increase 10: " + this.speed);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log("Speed slower 5 : " + this.speed);
};

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
