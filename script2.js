'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// Fetch function to make Ajax calls
// Fetch returns a promise <pending>

const getCountry = function (country) {
  // Country 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(res => {
      console.log(res);
      // To handle error manually 
      if (!res.ok) throw new Error(`Country not found' ${res.ok})`);

      return res.json();
    })
    // This then method returns a new promise
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];

      if (!neighbor) return;

      //Country 2: return the promise and handle it outside the functio to avoid the callback hell
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data))
    .catch(err => {
      console.log(`${err}`);
    });
};

getCountry('Colombia');

// Render function
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
