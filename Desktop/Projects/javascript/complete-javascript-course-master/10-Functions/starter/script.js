'use strict';

/*const bookings = [];

const createBooking = function (flightNum, numPassengers, price){
    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');

const flight = 'LH234';
const racheal = {
    name: 'racheal nansamba',
    passport: 2435676543
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 2435676543) {
    alert('checked in')
    }else{
     alert ('wrong passport!')
    }
}
checkIn(flight, racheal);
console.log(flight);
console.log(racheal)

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000);

};

newPassport(racheal);
checkIn(flight, racheal);

const oneWord = function (str) {
    return str.replace(/ /g, '').tolowercase();
};
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn){
console.log(`original string: ${str}`);
console.log(`transformed string: ${fn(str)}`);

console.log(`transformed by: ${fn.name}`);
};
transformer('javascript is the best!', upperFirstWord);
transformer('javascript is the best!', oneWord);

const high5 = function(){
    console.log('hi');
}
document.body.addEventListener('click', high5)

const greet = function (greeting){
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('jonas');
greeterHey('steven');

greet('hello'), ('jonas');

const lufthansa = {
  airline: 'lufthansa',
  iatacode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'racheal nansamba');
lufthansa.book(635, 'john smith');
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'sarah williams');

book.call(lufthansa, 239, 'mary cooper');
console.log(lufthansa);

const swiss = {
  airline: 'swiss Air lines',
  iatacode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'mary cooper');

const flightData = [583, 'George cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'steve williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('jonas schedtman');
bookEW23('martha cooper');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

const poll = {
  question: 'what is your favorite programmimg language?',
  options: ['0: javascript', '1: python', '2: Rust', '3: c++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(write option number)`
      )
    );
    console.log(answer);

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
// [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6] });

const runOnce = function () {
  console.log('this will never run');
};
runOnce();

(function () {
  console.log('this will never run');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('this will also never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);*/

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.log(f);

h();
f();
console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are boarding all ${n} passengers`);
    console.log(`there are three groups, each with ${perGroup} passengers `);
  }, wait * 1000);
  console.log(`will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
