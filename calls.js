function Clock () {
}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS

  console.log(this.hours + ":" + this.minutes + ":" + this.seconds)
};

Clock.prototype.run = function () {
  // 1. Set the currentTime.
  this.date = new Date();
  this.seconds = this.date.getSeconds();
  this.minutes = this.date.getMinutes();
  this.hours = this.date.getHours();
  // 2. Call printTime.
  this.printTime();
  // 3. Schedule the tick interval.
  setInterval(clock._tick.bind(clock), Clock.TICK);
};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  this.seconds += 5;
  if (this.seconds > 59) {
    this.seconds -= 60;
    this.minutes += 1;
    if (this.minutes > 59){
      this.minutes -= 60;
      this.hours += 1;
    }
  }
  // 2. Call printTime.
  this.printTime();
};

var clock = new Clock();
clock.run();
