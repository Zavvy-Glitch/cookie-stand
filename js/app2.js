'use strict';

console.log('hello')
const tableElem = document.getElementById("table")

//------------------ global function -----------------//

function renderTheWholeCookieStores() {
  for (let i = 0; i < CookieStores.prototype.cookieArray.length; i++) {
    let currentCookieStores = CookieStores.prototype.cookieArray[i];
    currentCookieStores.getCustomer();
    currentCookieStores.renderCookieStores();
  }
}

// ----------------------------- functions from previous JS -----------------------//

CookieStores.prototype.getCustomer = function avgCookieNumbers(avgCookie, customerCount) {
  return Math.round(avgCookie * customerCount);
}

CookieStores.prototype.getCustomer = function gethourSales(object) {
  for (let i = 0; i < cityHours.length; i++) {
    let hourCust = randomCustomer(object.minCust, object.MaxCust);
    let avgCookieHour = cookieNumbers (object.avgCookie, hourCust);
    object.hourSales = (avgCookieHour);
  }
}

const cityHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


//------------------ Global Variable for whole doc -----------------//

const cookiesProfilesDivElem = document.getElementById('salmonCookieSales');



// create a constructor function for Cookie Stores



//------------------ Constructor function -----------------//
function CookieStores(location, minCust, maxCust, avgCookiesPerHour) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerHour = avgCookiesPerHour;

  console.log('this', this);

  this.cookieArray.push(this);

  // console.log('this is the current version of the array', this.cookieArray);
}


CookieStores.prototype.cookieArray = [];


//------------------ Prototype Methods, only usable by CookieStores -----------------//

CookieStores.prototype.getCustomer = function() {
  this.customer = `${Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust)} customers`;
};

CookieStores.prototype.renderCookieStores = function() { 
   
}

//---------------------------- start of table rendering ----------------------------//

function renderHeader (){
  const rowElem1 = document.createElement("tr")
  tableElem.appendChild(rowElem1)
  for (let i = 0; i < cityHours.length; i++){
    let cellElem1 = document.createElement("td")
    rowElem1.appendChild(cellElem1)
    cellElem1.textContent = cityHours[i]
  }


}

function renderSeattle (){
  const rowElem2 = document.createElement("tr")
  tableElem.appendChild(rowElem2)
  for (let i = 1; i < CookieStores.prototype.cookieArray.length; i++){
    let cellElem2 = document.createElement("td")
    rowElem2.appendChild(cellElem2)
    cellElem2.textContent = CookieStores.prototype.cookieArray[i]
    console.log(renderSeattle)
  }
}




//------------------ declare CookieStores -----------------//

const Seattle = new CookieStores('Seattle', 23, 65, 6.3);

const Tokyo = new CookieStores('Tokyo', 3, 24, 1.2);

const Dubai = new CookieStores('Dubai', 11, 38, 3.7);

const Paris = new CookieStores('Paris', 20, 38, 2.3);

const Lima = new CookieStores('Lima', 2, 16, 4.6);

// CookieStores.prototype.cookieArray.push(new CookieStores(Seattle, 23, 65, 6.3)),

// put in an array *
// call all my functions
console.log('this is the cookie array', CookieStores.prototype.cookieArray),




//------------------ call function -----------------//
renderTheWholeCookieStores()
CookieStores.prototype.getCustomer()
renderHeader()
renderSeattle()
