const ReadlineSync =require('readline-Sync');

const Hw1 =ReadlineSync.question("\nEnter three homework grades.\n");
const Hw2 = ReadlineSync.question();
const Hw3 = ReadlineSync.question();

const Qz1 = ReadlineSync.question('\nEnter three quiz grades.\n');
const Qz2 = ReadlineSync.question();
const Qz3 = ReadlineSync.question();

const Te1 = ReadlineSync.question('\nEnter three test grades.\n');
const Te2 = ReadlineSync.question();
const Te3 = ReadlineSync.question();

const Hw = (Hw1 * 0.15 + Hw2 * 0.15 + Hw3 * 0.15);
const Qz = (Qz1 * 0.35 + Qz2 * 0.35 + Qz3 * 0.35);
const Te = (Te1 * 0.50 + Te2 * 0.50 + Te3 * 0.50);

const Grade = (Hw + Qz + Te)/3;
console.log('\nYour marking period grade is ' + Grade.toFixed(2) + '%.');
