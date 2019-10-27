const ReadlineSync =require('readline-Sync');
const Hourly_wage = Number (ReadlineSync.question('\nHourly wage: '));
const Monday = Number (ReadlineSync.question('\nMonday: '));
const Tuesday = Number (ReadlineSync.question('Tuesday: '));
const Wednesday = Number (ReadlineSync.question('Wednesday: '));
const Thursday = Number (ReadlineSync.question('Thursday: '));
const Friday = Number (ReadlineSync.question('Friday: '));
const Saturday = Number (ReadlineSync.question('Saturday: '));
const Sunday = Number (ReadlineSync.question('Sunday: '));


let Total =(Monday * Hourly_wage)+(Tuesday * Hourly_wage)+(Wednesday * Hourly_wage)+(Thursday * Hourly_wage)+(Friday * Hourly_wage)+(Saturday * Hourly_wage)+(Sunday * Hourly_wage);
Total =Total.toLocaleString('en', { minimunFractionDigits: 2, maximumFractionDigits: 2});


console.log("\nYou'll make $" + Total + " this week.");
