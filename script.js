'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// Ajax Call: XMLHttpRequest

// Function to render the country
// Optional: work with the JSON information to fit some data
const renderCountry = function (data) {
  const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)} Millions</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// Function to request the country and neighbor to an API
const getNeighborAndCountry = function (country) {

  //Ajax call country 1
  // 1. Invoke the XMLHttpRequest method
  const request = new XMLHttpRequest();
  // 2. Invoke the open() method and pass as arguments 'GET' and 'url of the API'
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  // 3. Send the request to get the info of the url with send() method
  request.send();
  // 4. Add a handler event like addEventListener to wait for that event 'load' and as soon as the data arrives the callback function will be called
  request.addEventListener('load', function () {
    // 5. The load will bring a JSON format (string) that can be converted in an Object with parse
    // Optional: destructuring the array [] to get only the object

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbor country 2
    const [neighbor] = data.borders;
    if(!neighbor) return;

    // Ajax call country 2

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
    request2.send();
    // Callback function inside another one
    request2.addEventListener('load', function() {
      console.log(this.responseText);
    })

  });
};

getNeighborAndCountry('Colombia');

///////////////////////////////////////
