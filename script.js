'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// Ajax Call: XMLHttpRequest
// 1. Invoke the XMLHttpRequest method
const request = new XMLHttpRequest();
// 2. Invoke the open() method and pass as arguments 'GET' and 'url of the API'
request.open('GET', 'https://restcountries.eu/rest/v2/name/colombia');
// 3. Send the request to get the info of the url with send() method
request.send();
// 4. Add a handler event like addEventListener to wait for that event 'load' and as soon as the data arrives the callback function will be called
request.addEventListener('load', function () {
    // 5. The load will bring a JSON format (string) that can be converted in an Object with parse
    const data = JSON.parse(this.responseText);
    console.log(data)
  
  
});

///////////////////////////////////////
