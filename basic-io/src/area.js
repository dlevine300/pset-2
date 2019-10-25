const ReadlineSync =require('readline-Sync');
const Width =ReadlineSync.question('\nWidth: ');
const Length =ReadlineSync.question('Length: ');
const Answer =(Length * Width)
const Conversion_l =Length * 25.4
const Conversion_w =Width * 25.4
const Area =(Conversion_l * Conversion_w).toLocaleString('en', { minimunFractionDigits: 2, maximumFractionDigits: 2})
console.log('\nA(n) '+ Width + '-by-' + Length + '-inch sheet paper has an area of ' + Area + ' square millimeter(s).')
