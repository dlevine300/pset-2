const readlineSync =require('readline-Sync');
const width =readlineSync.question('\nWidth: ');
const length =readlineSync.question('Length: ');
const answer =(2 * length + 2 * width)
const conversion_l =length * 2.54
const conversion_w =width * 2.54
const perimeter =2*(conversion_l + conversion_w).toLocaleString('en', { minimunFractionDigits: 2, maximumFractionDigits: 2})
console.log('\nA(n) '+ width + '-by-' + length + '-inch sheet paper has an area of ' + perimeter + ' centimeter(s).')
