'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// Fetch function to make Ajax calls
// Fetch returns a promise <pending>

const getCountry = function (country) {
  const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(res => res.json())
    .then(data => renderCountry(data[0]));
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