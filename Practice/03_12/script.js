/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objects by calling their properties and using their methods in the console.
 */
import backpack from "./Backpack.js";
import car from "./Something.js";
const newBackPack = new backpack("Nike");
const newCar = new car(
  "Audi TT",
  2022,
  "silver",
  "$50,500",
  "228 hp",
  "23 city / 30 highway",
  "3,197 to 3,395 lbs",
  "2.0 L 4-cylinder",
  "December 5, 2021 8:00PM PST"
);
console.log(newCar.model);
console.log(newBackPack.name);
