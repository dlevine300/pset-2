const readlineSync = require("readline-sync");

const Length_of_board = 48;
const Width_of_borad = 24;
const DIAMETER_IN = 6;
let Area_of_board = Length_of_board * Width_of_borad
let Radius = DIAMETER_IN / 2;
let Area_of_circle = Math.PI * (Radius ** 2);
let Surface_area_of_cornhole = Area_of_board - Area_of_circle;

Surface_area_of_cornhole = Surface_area_of_cornhole.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\nThe surface area of a standard Cornhole board is " + Surface_area_of_cornhole + " square inch(es).");
