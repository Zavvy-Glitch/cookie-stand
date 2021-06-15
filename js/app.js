'use strict';

function randomCustomer(minCust, maxCust)
{
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}

function avgCookieNumbers(avgCookie, customerCount) {
  return Math.round(avgCookie * customerCount);
}

function gethourSales(object) {
  for (let i = 0; i < cityHours.length; i++) {
    let hourCust = randomCustomer(object.minCust, object.MaxCust);
    let avgCookieHour = cookieNumbers (object.avgCookie, hourCust);
    object.hourSales = (avgCookieHour);
  }
}

const cityHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


const seattleCookie = {
  location: 'Seattle',
  customer: 0,
  minCust: 23,
  maxCust:65,
  hourSales: [],
  avgCookie: 6.3,
  cookiesHr: 0,
  customerHr: function () {
    this.customer = randomCustomer(this.minCust, this.MaxCust)
},
  avgerageCookieNumbers: function () {
    this.cookiesHr = 
  }

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



let cookieArray = [seattleCookie, tokyoCookie, dubaiCookie, parisCookie, limaCookie];

console.log(cookieArray);
gethourSales(cookieArray);

