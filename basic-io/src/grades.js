const readlineSync =require('readline-Sync');

const hw1 =readlineSync.question("\nEnter three homework grades.\n");
const hw2 = readlineSync.question();
const hw3 = readlineSync.question();

const qz1 = readlineSync.question('\nEnter three quiz grades.\n');
const qz2 = readlineSync.question();
const qz3 = readlineSync.question();

const te1 = readlineSync.question('\nEnter three test grades.\n');
const te2 = readlineSync.question();
const te3 = readlineSync.question();

const hw = (hw1 * 0.15 + hw2 * 0.15 + hw3 * 0.15);
const qz = (qz1 * 0.35 + qz2 * 0.35 + qz3 * 0.35);
const te = (te1 * 0.50 + te2 * 0.50 + te3 * 0.50);

const grade = (hw + qz+ te)/3
console.log('\nYour marking period grade is ' + grade.toFixed(2) + '%.')
