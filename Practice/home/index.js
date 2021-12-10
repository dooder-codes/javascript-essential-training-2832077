function objectConstructor(day, month, year) {
  this.day = day;
  this.month = month;
  this.year = year;
  this.changeDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  };
  this.printDate = function () {
    console.log(this.day, ",", this.month, "", this.year);
  };
}
const newDate = new objectConstructor(9, 12, 2021);
newDate.printDate();
