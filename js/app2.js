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
function renderSeattle(){
  const rowElem2=document.createElement("tr")
  tableElem.appendChild(rowElem2)
   for (let i = 0; i < CookieStores.prototype.renderCookieStores.length; i++){
     let cellElem2 = document.createElement("th")
     rowElem2.appendChild(cellElem2)

   }

  }





// ---------------------------this is for reference -------------------//
// const tableElem = document.createElement('table');
//   articleElem.appendChild(tableElem);
//   const row1 = document.createElement('tr');
//   const row2 = document.createElement('tr');
//   tableElem.appendChild(row1);
//   tableElem.appendChild(row2);
//   const row1Cell1Elem = document.createElement('th');
//   row1Cell1Elem.textContent = 'Good with Dogs';
//   row1.appendChild(row1Cell1Elem);
//   const row1Cell2Elem = document.createElement('th');
//   row1Cell2Elem.textContent = 'Good with Cats';
//   row1.appendChild(row1Cell2Elem);
//   const row1Cell3Elem = document.createElement('th');
//   row1Cell3Elem.textContent = 'Good with Kids';
//   row1.appendChild(row1Cell3Elem);

//   const row2Cell1Elem = document.createElement('td');
//   row2Cell1Elem.textContent = this.isGoodWithDogs;
//   row2.appendChild(row2Cell1Elem);
//   const row2Cell2Elem = document.createElement('td');
//   row2Cell2Elem.textContent = this.isGoodWithCats;
//   row2.appendChild(row2Cell2Elem);
//   const row2Cell3Elem = document.createElement('td');
//   row2Cell3Elem.textContent = this.isGoodWithKids;
//   row2.appendChild(row2Cell3Elem);





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
