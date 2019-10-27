const ReadlineSync =require('readline-Sync');
const W =ReadlineSync.question('\nWidth: ');
const L =ReadlineSync.question('Length: ');
let Diagonal = Math.sqrt(W * W + L * L).toLocaleString('en', { minimunFractionDigits: 2, maximumFractionDigits: 2});
console.log('\nA(n) ' + W + '-by-' + L + ' inch sheet of paper has a diagonal of 13.90 inch(es).');
