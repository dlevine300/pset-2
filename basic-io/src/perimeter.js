const ReadlineSync =require('readline-Sync');
const Width =ReadlineSync.question('\nWidth: ');
const Length =ReadlineSync.question('Length: ');
const Answer =(2 * Length + 2 * Width)
const Conversion_l =Length * 2.54
const Conversion_w =Width * 2.54
const Perimeter =2*(Conversion_l + Conversion_w).toLocaleString('en', { minimunFractionDigits: 2, maximumFractionDigits: 2})
console.log('\nA(n) '+ Width + '-by-' + Length + '-inch sheet paper has an area of ' + Perimeter + ' centimeter(s).')
