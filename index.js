const fs = require('fs');


fs.writeFile('data.txt', 'Well Done!', (err) => {
  if (err) {
    console.error('Error writing the file:', err);
  } else {
    console.log('Well Done!');
  
    fs.writeFile('data.txt', '\nYou are the best!', { flag: 'a+' }, (err) => {
      if (err) {
        console.error('Error writing the file:', err);
      } else {
        console.log('You are the best!');
       
        fs.appendFile('data.txt', '\nYou are superb!', (err) => {
          if (err) {
            console.error('Error appending the file:', err);
          } else {
            console.log('You are superb!');
          }
        });
      }
    });
  }
});


const Person = require('./person');

const person1 = new Person('Thotyelwa', 'Mpongwana', 'mpongwanathotyelwa@gmail.com');
const person2 = new Person('Xolelwa', 'Hlaletyeni', 'hlaletyenix73@gmail.com');
const person3 = new Person('Lutho', 'Mpongwana', 'lmpongwana54@gmail.com');


console.log(person1);
console.log(person2);
console.log(person3);
