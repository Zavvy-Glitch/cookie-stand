// 'use strict';

// function randomCustomer(minCust, maxCust)
// {
//   return Math.floor(Math.random() * (maxCust - minCust) + minCust);
// }

// function avgCookieNumbers(avgCookie, customerCount) {
//   return Math.round(avgCookie * customerCount);
// }

// function gethourSales(object) {
//   for (let i = 0; i < cityHours.length; i++) {
//     let hourCust = randomCustomer(object.minCust, object.MaxCust);
//     let avgCookieHour = cookieNumbers (object.avgCookie, hourCust);
//     object.hourSales = (avgCookieHour);
//   }
// }

// const cityHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// const seattleCookie = {
//   location: 'Seattle',
//   customer: 0,
//   minCust: 23,
//   maxCust:65,
//   hourSales: [],
//   avgCookie: 6.3,
//   cookiesHr: 0,
//   customerHr: function () {
//     this.customer = randomCustomer(this.minCust, this.MaxCust)
// },
//   avgerageCookieNumbers: function () {
//     this.cookiesHr = 
//   }

// const tokyoCookie = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust:24,
//   hourSales: [],
//   avgCookie: 1.2,
// };

// const dubaiCookie = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust:38,
//   hourSales: [],
//   avgCookie: 3.7,
// };

// const parisCookie = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust:38,
//   hourSales: [],
//   avgCookie: 2.3,
// };

// const limaCookie = {
//   location: 'Lima',
//   minCust: 2,
//   maxCust:16,
//   hourSales: [],
//   avgCookie: 4.6,
// };



// let cookieArray = [seattleCookie, tokyoCookie, dubaiCookie, parisCookie, limaCookie];

// console.log(cookieArray);
// gethourSales(cookieArray);



// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// update your html if necessary to reflect new features
`use strict`;

// grab any target from the html I am going to use as my parent for dom additions

//------------------ Global Variable for whole doc -----------------//

const kittenProfilesDivElem = document.getElementById('kittenProfiles');


// create a constructor function for kittens
  // name, age, interests, isGoodWithDogs, cats, kids, photo


//------------------ Constructor function -----------------//
function Kitten(name, interests, isGoodWithDogs, isGoodWithCats, isGoodWithKids, photo) {
  this.name = name;
  this.photo = photo;
  this.interests = interests;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;
  this.isGoodWithKids = isGoodWithKids;

  console.log('this', this);
  // within the constructor 'this' refers to the instance of the object

  // add to the kitten array
  this.kittenArray.push(this);
  console.log('this is the current version of the array', this.kittenArray);
}


// by adding the array as a property of the prototype I am keeping all things kitten related attached to the Kitten object
Kitten.prototype.kittenArray = [];


//------------------ Prototype Methods, only usable by Kittens -----------------//
// add any prototype methods I might need
  //- things specific to a single object
  // - getAge
  // - render a single kitten to the page
Kitten.prototype.getAge = function() {
  this.age = `${Math.floor(Math.random() * (12 - 3) + 3)} months`;
}

Kitten.prototype.renderKitten = function() {
  // creates and appends and fills all of the html elements I need to add a kitten to the page
  /* <table>
  <tr>
  <th>
    Kids
  </th>
  <th>
    Dogs
  </th>
  <th>
    Other Cats
  </th>
</tr>
<tr>
  <td>
    true
  </td>
  <td>
    false
  </td>
  <td>
    true
  </td>
</tr>
</table>
  */


'use strict';

// - global variables -//
// all of the targets for our page
const hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const salesTableElem = document.getElementById('salesInfo');
const theadElem = document.createElement('thead');
salesTableElem.appendChild(theadElem);
const tbodyElem = document.createElement('tbody');
salesTableElem.appendChild(tbodyElem);
const tfootElem = document.createElement('tfoot');
salesTableElem.appendChild(tfootElem);

// - constructor for the cookie stores - //

function CookieStore(location, minCust, maxCust, avgCookieSales) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSales = avgCookieSales;

  // optionally push here, that is ok
}

let seattle =  new CookieStore('Seattle', 23, 65, 6.3);
let tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
let dubai = new CookieStore('Dubai', 11, 38, 3.7);
let paris = new CookieStore('Paris', 20, 38, 2.3);
let lima = new CookieStore('Lima', 2, 16, 4.6);

CookieStore.prototype.stores = [];
CookieStore.prototype.stores.push(seattle, tokyo, dubai, paris, lima);

// - prototype methods - //

// determine an avg cust number
CookieStore.prototype.custPerHour = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
}
// create sales array
CookieStore.prototype.createSalesArray = function() {
  this.hourlySales = [];
  for (let i = 0; i < hoursOfOperation.length; i++) {
    let sale = Math.floor(this.custPerHour() * this.avgCookieSales);
    this.hourlySales.push(sale);
  }
}

// render one stores row
CookieStore.prototype.renderStoreRow = function() {
  // access the body tbodyElem - parent
  // make a variable to hold the daily totals
  let dailyTotal = 0;
  // create a row
  const rowElem = document.createElement('tr');
  // append the row to the parent
  tbodyElem.appendChild(rowElem);
  // make th for location
  const locationThElem = document.createElement('th');
  locationThElem.textContent = this.location;
  rowElem.appendChild(locationThElem)
  // iterate through this.hourlySales to add td to my row
  for (let i = 0; i < this.hourlySales.length; i++) {
    dailyTotal += this.hourlySales[i];
    const tdElem = document.createElement('td');
    tdElem.textContent = this.hourlySales[i];
    rowElem.appendChild(tdElem);
  }
  // add up all the sales for the day and put them in a final cell for totals
  const tdElemTotal = document.createElement('td');
  tdElemTotal.textContent = dailyTotal
  rowElem.appendChild(tdElemTotal);
}


// - global functions - //

function updateStoresWithSales(stores) {
  for (let i = 0; i < stores.length; i++) {
    stores[i].createSalesArray();
  }
}

// puts the header up - hours of operation
function renderHeader() {
  //theadElem -parent
  // make a row to go in my thead
  const rowElem = document.createElement('tr');
  theadElem.appendChild(rowElem);
  // a blank cell
  const blankThElem = document.createElement('th');
  rowElem.appendChild(blankThElem);
  // iterate through my hours of operation and add th's for each hour
  for (let i = 0; i < hoursOfOperation.length; i++) {
    const thElem = document.createElement('th');
    thElem.textContent = hoursOfOperation[i];
    rowElem.appendChild(thElem);
  }
  const thElemTotals = document.createElement('th');
    thElemTotals.textContent = 'Totals'
    rowElem.appendChild(thElemTotals);
}


// make a function calls render on all of the store rows
function renderAllStoreRows(stores) {
  for (let i = 0; i < stores.length; i++) {
    stores[i].renderStoreRow();
    // seattle.renderStoreRow()
  }
}

// renders a footer
function createFooter() {
  // access the footer elem tfootElem parent
  // variable for hourly total
  let hourlyTotal = 0;
  // variable for all hours total
  let grandTotal = 0;
  // I make tr for the data to go to and append to footer
  const rowElem = document.createElement('tr');
  tfootElem.appendChild(rowElem);
  // I need to look at every hour of the day
  //--
  for (let i = 0; i < hoursOfOperation.length; i++) {
  // for each hour of the day I need to look at the sales for each store AT THAT HOUR
  //--
    for (let j = 0; j < CookieStore.prototype.stores.length; j++) {
      // let timeOfSale = .hourlySales[i];
      // let currentStore = CookieStore.prototype.stores[j];
      let currentStoreAtCurrentHour = CookieStore.prototype.stores[j].hourlySales[i];
      hourlyTotal += currentStoreAtCurrentHour;
    }
  // add a th for every hourly total
  // reset the hourly total to 0
  //---
  const hourlyThElem = document.createElement('th');
  hourlyThElem.textContent = hourlyTotal;
  rowElem.appendChild(hourlyThElem);
  grandTotal += hourlyTotal;
  hourlyTotal = 0;
  }
  // add a th for the grand total
  const grandThElem = document.createElement('th');
  grandThElem.textContent = grandTotal;
  rowElem.appendChild(grandThElem);
}

// - call our functions - //

updateStoresWithSales(CookieStore.prototype.stores);
console.log(CookieStore.prototype.stores);
renderHeader();
renderAllStoreRows(CookieStore.prototype.stores);
createFooter();