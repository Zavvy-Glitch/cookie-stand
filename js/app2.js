'use strict';

console.log('hello')

//------------------ Global Variable for whole doc -----------------//
const cityHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

const cookiesProfilesDivElem = document.getElementById('salmonCookieSales');
const theadElement = document.createElement('thead');
cookiesProfilesDivElem.appendChild(theadElement);
const tbodyElement = document.createElement('tbody');
cookiesProfilesDivElem.appendChild(tbodyElement);
const tfootElement = document.createElement('tfoot');
cookiesProfilesDivElem.appendChild(tfootElement);


//------------------ Constructor function -----------------//
function CookieStores(location, minCust, maxCust, avgCookiesPerHour) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.hourlyCookiesSales = [];
    
}

console.log(CookieStores);

const Seattle = new CookieStores('Seattle', 23, 65, 6.3);
const Tokyo = new CookieStores('Tokyo', 3, 24, 1.2);
const Dubai = new CookieStores('Dubai', 11, 38, 3.7);
const Paris = new CookieStores('Paris', 20, 38, 2.3);
const Lima = new CookieStores('Lima', 2, 16, 4.6);


CookieStores.prototype.stores = [];
CookieStores.prototype.stores.push(Seattle, Tokyo, Dubai, Paris, Lima)

console.log(CookieStores.prototype.stores);

//------------------ Prototype Methods, only usable by CookieStores -----------------//

CookieStores.prototype.getCustomer = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};

CookieStores.prototype.avgCookiesSalesArray = function () {
  for (let i = 0; i < cityHours.length; i++) {
    let sale = Math.floor(this.getCustomer() * this.avgCookiesPerHour);
    this.hourlyCookiesSales.push(sale);
  }
  console.log(this.hourlyCookiesSales);
}

console.log(CookieStores.prototype.avgCookiesSalesArray)
//------------------ global function -----------------//

function pushAllCookieStores(stores) {
  // console.log(stores);
  for (let i = 0; i < stores.length; i++) {
    // console.log('here')
    stores[i].avgCookiesSalesArray();
  }
}

console.log(pushAllCookieStores)

//---------------------------- start of table rendering ----------------------------//

function headerRendering (){
  const rowElement = document.createElement ('tr')
  const emptyElem = document.createElement('th')
  rowElement.appendChild(emptyElem);
  for (let i = 0; i < cityHours.length; i++){
    const thElement = document.createElement('th');
    thElement.textContent = cityHours[i];
    rowElement.appendChild(thElement);
  }
  const theElementTotal = document.createElement('th');
  theElementTotal.textContent = 'Totals'
  rowElement.appendChild(theElementTotal);
  theadElement.appendChild(rowElement);
  
}

function storeRowRenderingsAll(stores) {
  for (let i = 0; i < stores.length; i++){
    stores[i].storeRowRendering();
  }
}

function footerRender(){
  // let cityHours = 0;
  let grandTotals = 0;
  const rowElement = document.createElement('tr')
  const emptyElem = document.createElement('th')
  emptyElem.textContent = 'Total'
  rowElement.appendChild(emptyElem);
  for (let i = 0; i < cityHours.length; i++) {
    let hourTotal = 0;
    for (let j = 0; j < CookieStores.prototype.stores.length; j++){
      let currentStoreHours = CookieStores.prototype.stores[j].hourlyCookiesSales[i];
      hourTotal += currentStoreHours; 
    }
    const hourlyElem = document.createElement('th');
    hourlyElem.textContent = hourTotal;
    grandTotals += hourTotal;
    rowElement.appendChild(hourlyElem);
  }

  const grandElem = document.createElement('th');
  grandElem.textContent = grandTotals;
  rowElement.appendChild(grandElem);
  tfootElement.appendChild(rowElement);
}

CookieStores.prototype.storeRowRendering =function() {
  let dailyTotal = 0;
  const rowElement = document.createElement('tr')
  const locationElement = document.createElement('th')
  locationElement.textContent = this.location;
  rowElement.appendChild(locationElement);
  console.log(this.hourlyCookiesSales)
  for (let i = 0; i < this.hourlyCookiesSales.length; i++){
    dailyTotal += this.hourlyCookiesSales[i];
    const tdElement = document.createElement('td');
    tdElement.textContent = this.hourlyCookiesSales[i];
    rowElement.appendChild(tdElement);
  }

  const tdElementTotal = document.createElement('td');
  tdElementTotal.textContent = dailyTotal
  rowElement.appendChild(tdElementTotal);
  tbodyElement.appendChild(rowElement);
}


//------------------ call function -----------------//
// renderTheWholeCookieStores()
pushAllCookieStores(CookieStores.prototype.stores);
console.log(CookieStores.prototype.stores);
storeRowRenderingsAll(CookieStores.prototype.stores);
headerRendering();
footerRender();