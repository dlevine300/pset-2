const readlineSync = require("readline-sync");

const name = readlineSync.question("What is your name?\n ");
console.log("\nHello, " + name + "!");
