const fs = require('fs');


fs.writeFileSync('./data.txt', 'Well Done!');
 fs.writeFileSync('./data.txt', '\nYou are the best!')
       
fs.appendFileSync('./data.txt', '\nYou are superb!')
        


const Person = require('./person');

const person1 = new Person('Thotyelwa', 'Mpongwana', 'mpongwanathotyelwa@gmail.com');
const person2 = new Person('Xolelwa', 'Hlaletyeni', 'hlaletyenix73@gmail.com');
const person3 = new Person('Lutho', 'Mpongwana', 'lmpongwana54@gmail.com');


console.log(person1);
console.log(person2);
console.log(person3);
