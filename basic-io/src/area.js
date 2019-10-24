const readlineSync =require('readline-Sync');
const width =readlineSync.question('\nWidth: ');
const length =readlineSync.question('Length: ');
const answer =(length * width)
const conversion_l =length * 25.4
const conversion_w =width * 25.4
const area =(conversion_l * conversion_w).toLocaleString('en', { minimunFractionDigits: 2, maximumFractionDigits: 2})
console.log('\nA(n) '+ width + '-by-' + length + '-inch sheet paper has an area of ' + area + ' square millimeter(s).')
