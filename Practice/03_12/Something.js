class Car {
  constructor(model, year, color, MSRP, horsepower, MPG, curbWeight, engine) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.MSRP = MSRP;
    this.horsepower = horsepower;
    this.MPG = MPG;
    this.curbWeight = curbWeight;
    this.engine = engine;
    this.start = function () {
      console.log(`${this.model} has started!! VROOM VROOM`);
    };
  }
}

export default Car;
