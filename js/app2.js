'use strict';
// talk about contextual this

// jose is pretty comfortable with hard coding each kitten into the javascript, but needs us to set up some functions that will render the kittens to the page

// what do I need to know about each cat?
// name
// age - randomly generate for now
// intrests
// isGoodWithKids
// isGoodWithDogs
// isGoodWithOtherCats

const seattleCookie = {
  '6am': getRandom(23, 65),
  '7am': getRandom(23, 65),
  '8am': getRandom(23, 65),
  '9am': getRandom(23, 65),
  '10am': getRandom(23, 65),
  '11am': getRandom(23, 65),
  '12pm': getRandom(23, 65),
  '1pm': getRandom(23, 65),
  '2pm': getRandom(23, 65),
  '3pm': getRandom(23, 65),
  '4pm': getRandom(23, 65),
  '5pm': getRandom(23, 65),
  '6pm': getRandom(23, 65),
  '7pm': getRandom(23, 65),
  getCookie: function() {
    console.log(this.cookie);
    this.cookie = `${getRandom(23, 65)} cookies`;
    console.log(this.cookie);
  }
};


const tokyoCookie = {
  '6am': getRandom(3, 24),
  '7am': getRandom(3, 24),
  '8am': getRandom(3, 24),
  '9am': getRandom(3, 24),
  '10am': getRandom(3, 24),
  '11am': getRandom(3, 24),
  '12pm': getRandom(3, 24),
  '1pm': getRandom(3, 24),
  '2pm': getRandom(3, 24),
  '3pm': getRandom(3, 24),
  '4pm': getRandom(3, 24),
  '5pm': getRandom(3, 24),
  '6pm': getRandom(3, 24),
  '7pm': getRandom(3, 24),
  getCookie: function() {
    console.log(this.cookie);
    this.cookie = `${getRandom(23, 65)} cookies`;
    console.log(this.cookie);
  }
};
// CONTEXTUAL THIS!!!! 
// The one I am talking about now, THIS ONE

// const jumper = {
//   name: 'Jumper',
//   age: 0,
//   interests: ['treats', 'yarn', 'birds'],
//   isGoodWithOtherCats: true,
//   isGoodWithKids: true,
//   isGoodWithDogs: true,
//   photo: './images/jumper.jpeg',
//   getCookie: function() {
//     // console.log(this.age);
//     this.age = getRandom(3,12) + ' months';
//     // console.log(this.age);
//   }
// };


// const serena = {
//   name: 'Serena',
//   age: 0,
//   interests: ['pets', 'scratches', 'hissing'],
//   isGoodWithOtherCats: false,
//   isGoodWithKids: false,
//   isGoodWithDogs: false,
//   photo: './images/serena.jpeg',
//   getCookie: function() {
//     // console.log(this.age);
//     this.age = getRandom(3,12) + ' months';
//     // console.log(this.age);
//   }
// };

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let cookieArray = [seattleCookie];
console.log(cookieArray);


console.log(cookieArray);

// const kittenProfilesDivElem = document.getElementById('kittenProfiles');

// kittenProfilesDivElem.textContent = 'hi!';
// <!-- <article>
// create an article element
//           <img> parent is article
//           <h2></h2> parent is article
//           <p></p>
//           <ul>
//             <li></li> parent is ul
//           </ul>
//         </article> -->

// function renderCookies(cookies) {
//   const articleElem = document.createElement('article');
//   // parent.appendChild(childElement)
//   // if I don't append it, it exists in memory but we haven't added it to the screen
//   kittenProfilesDivElem.appendChild(articleElem);
//   // ANYTIME we need to create a single element we do this
//   const imgElem = document.createElement('img');
//   imgElem.src = cookies.photo;
//   articleElem.appendChild(imgElem);
//   const h2Elem = document.createElement('h2');
//   h2Elem.textContent = cookies.name;
//   articleElem.appendChild(h2Elem);
//   const pElem = document.createElement('p');
//   pElem.textContent = `age: ${cookies.age} old`;
//   articleElem.appendChild(pElem);
//   // we need to make our ul and append it to the article
//   // within the up we need to create new li's for each interest in our array
//   const ulElem = document.createElement('ul');
//   articleElem.appendChild(ulElem);
//   // kitten.interests is my array name
//   for (let i = 0; i < cookies.interests.length;) {
//     const liElem = document.createElement('li');
//     liElem.textContent = cookies.interests[i];
//     ulElem.appendChild(liElem);
//   }
// }


for (let i = 0; i < cookieArray.length;) {
  let currentCookie = cookieArray[i];
  currentCookie.getRandom();
  // renderCookies(currentCookie);
}
