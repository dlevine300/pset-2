const ReadlineSync =require('readline-sync');

const Students =Number(ReadlineSync.question('\nStudents: '));
const Teachers =Number(ReadlineSync.question('Teachers: '));
const Bus_Capacity =Number(ReadlineSync.question('Bus Capacity: '));
const Tts = (Students + Teachers);
const Number_of_busses =(Tts / Bus_Capacity);
const Round_busses =Math.round(5.574074074074074);
const Percent_of_people_not_on_bus =Number((5.574074074074074-5));
const People_on_bus_6 = (Bus_Capacity*Percent_of_people_not_on_bus).toLocaleString('en', { minimunFractionDigits: 0, maximumFractionDigits: 0});
console.log(Round_busses + ' bus(es) is (are) needed, with ' + People_on_bus_6 + ' passenger(s) on the last bus.');
