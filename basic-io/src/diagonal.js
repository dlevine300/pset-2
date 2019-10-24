const readlineSync =require('readline-Sync');
const w =readlineSync.question('\nWidth: ')
const l =readlineSync.question('Length: ')
let diagonal = Math.sqrt(w * w + l * l).toLocaleString('en', { minimunFractionDigits: 2, maximumFractionDigits: 2})
console.log('\nA(n) ' + w + '-by-' + l + ' inch sheet of paper has a diagonal of 13.90 inch(es).')
