const ReadlineSync = require("readline-sync");

const Name = ReadlineSync.question("\nHi! What's your name?\n");
console.log("\nHello, " + Name + "!");
