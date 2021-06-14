'use strict';

const cityHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


const seattleCookie = {
  location: 'Seattle',
  minCust: 23,
  maxCust:65,
  hourSales: [],
  avgCookie: 6.3,
};

const tokyoCookie = {
  location: 'Tokyo',
  minCust: 3,
  maxCust:24,
  hourSales: [],
  avgCookie: 1.2,
};

const dubaiCookie = {
  location: 'Dubai',
  minCust: 11,
  maxCust:38,
  hourSales: [],
  avgCookie: 3.7,
};

const parisCookie = {
  location: 'Paris',
  minCust: 20,
  maxCust:38,
  hourSales: [],
  avgCookie: 2.3,
};

const limaCookie = {
  location: 'Lima',
  minCust: 2,
  maxCust:16,
  hourSales: [],
  avgCookie: 4.6,
};



function randomCustomer(minCust, maxCust)
{
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}

function cookieNumbers(avgCookie, customerCount) {
  return Math.round(avgCookie * customerCount);
}

function gethourSales(object) {
  for (let i = 0; i < cityHours.length; i++) {
    let hourCust = randomCustomer(object.minCust, object.MaxCust);
    let avgCookieHour = cookieNumbers (object.avgCookie, hourCust);
    object.hourSales = (avgCookieHour);
  }
}

let cookieArray = [seattleCookie, tokyoCookie, dubaiCookie, parisCookie, limaCookie];

console.log(cookieArray);
gethourSales(cookieArray);

// const seattleCookie = {
  //   '6am': getRandom(23, 65),
  //   '7am': getRandom(23, 65),
  //   '8am': getRandom(23, 65),
  //   '9am': getRandom(23, 65),
  //   '10am': getRandom(23, 65),
  //   '11am': getRandom(23, 65),
//   '12pm': getRandom(23, 65),
//   '1pm': getRandom(23, 65),
//   '2pm': getRandom(23, 65),
//   '3pm': getRandom(23, 65),
//   '4pm': getRandom(23, 65),
//   '5pm': getRandom(23, 65),
//   '6pm': getRandom(23, 65),
//   '7pm': getRandom(23, 65),
//   getCookie: function() {
//     console.log(this.cookie);
//     this.cookie = `${getRandom(23, 65)} cookies`;
//     console.log(this.cookie);
//   }
// };


// const tokyoCookie = {
//   '6am': getRandom(3, 24),
//   '7am': getRandom(3, 24),
//   '8am': getRandom(3, 24),
//   '9am': getRandom(3, 24),
//   '10am': getRandom(3, 24),
//   '11am': getRandom(3, 24),
//   '12pm': getRandom(3, 24),
//   '1pm': getRandom(3, 24),
//   '2pm': getRandom(3, 24),
//   '3pm': getRandom(3, 24),
//   '4pm': getRandom(3, 24),
//   '5pm': getRandom(3, 24),
//   '6pm': getRandom(3, 24),
//   '7pm': getRandom(3, 24),
//   getCookie: function() {
//     console.log(this.cookie);
//     this.cookie = `${getRandom (3, 24)} cookies`;
//     console.log(this.cookie);
//   }
// };

// const dubaiCookie = {
//   '6am': getRandom(11, 24),
//   '7am': getRandom(11, 24),
//   '8am': getRandom(11, 24),
//   '9am': getRandom(11, 24),
//   '10am': getRandom(11, 24),
//   '11am': getRandom(11, 24),
//   '12pm': getRandom(11, 24),
//   '1pm': getRandom(11, 24),
//   '2pm': getRandom(11, 24),
//   '3pm': getRandom(11, 24),
//   '4pm': getRandom(11, 24),
//   '5pm': getRandom(11, 24),
//   '6pm': getRandom(11, 24),
//   '7pm': getRandom(11, 24),
//   getCookie: function() {
//     console.log(this.cookie);
//     this.cookie = `${getRandom(11, 24)} cookies`;
//     console.log(this.cookie);
//   }
// };

// const parisCookie = {
//   '6am': getRandom(20, 38),
//   '7am': getRandom(20, 38),
//   '8am': getRandom(20, 38),
//   '9am': getRandom(20, 38),
//   '10am': getRandom(20, 38),
//   '11am': getRandom(20, 38),
//   '12pm': getRandom(20, 38),
//   '1pm': getRandom(20, 38),
//   '2pm': getRandom(20, 38),
//   '3pm': getRandom(20, 38),
//   '4pm': getRandom(20, 38),
//   '5pm': getRandom(20, 38),
//   '6pm': getRandom(20, 38),
//   '7pm': getRandom(20, 38),
//   getCookie: function() {
//     console.log(this.cookie);
//     this.cookie = `${getRandom(20, 38)} cookies`;
//     console.log(this.cookie);
//   }
// };

// const limaCookie = {
//   '6am': getRandom(2, 16),
//   '7am': getRandom(2, 16),
//   '8am': getRandom(2, 16),
//   '9am': getRandom(2, 16),
//   '10am': getRandom(2, 16),
//   '11am': getRandom(2, 16),
//   '12pm': getRandom(2, 16),
//   '1pm': getRandom(2, 16),
//   '2pm': getRandom(2, 16),
//   '3pm': getRandom(2, 16),
//   '4pm': getRandom(2, 16),
//   '5pm': getRandom(2, 16),
//   '6pm': getRandom(2, 16),
//   '7pm': getRandom(2, 16),
//   getCookie: function() {
//     console.log(this.cookie);
//     this.cookie = `${getRandom(2, 16)} cookies`;
//     console.log(this.cookie);
//   }
// };
// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

