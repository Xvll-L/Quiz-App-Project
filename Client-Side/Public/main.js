// quiz page
const countCity = document.querySelector("#count-city");
const scoreCity = document.querySelector("#score-city");
const answersButtonsCity = document.querySelectorAll(".answers-box");
const countryNameElement = document.getElementById('country-name');

let score = 0;

// Function to fetch a new question and update the answer options for cityQ
function fetchQuestion() {
  fetch('http://localhost:8080/api/cityQ')
    .then(response => response.json())
    .then(data => {
      console.log('API response:', data);
      
      const country = data[0];
      
      console.log('Selected country:', country);
      console.log('Country name:', country.CountryName);
      console.log('City name#:', country.CityName);
      console.log('City name2#####:', country.Cityname);
      
      countryNameElement.textContent = country.CountryName;

      const answersOptions = [
        country.Cityname,
        data[1].Cityname,
        data[2].Cityname,
        data[3].Cityname
      ];
      
      console.log('AnswersOptions:', answersOptions);
      console.log('answersOptions[0]:', answersOptions[0]);

      // Shuffle the answer options randomly
      for (let i = answersOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answersOptions[i], answersOptions[j]] = [answersOptions[j], answersOptions[i]];
      }

      console.log('Shuffled answersOptions:', answersOptions);
      console.log('answersOptions[0] after shuffling:', answersOptions[0]);

      // Update the answer buttons with the shuffled options (Fisher–Yates shuffle algos)
      answersButtonsCity.forEach((button, index) => {
        button.textContent = answersOptions[index];
        button.setAttribute('data-correct', answersOptions[index] === country.Cityname);
        button.style.backgroundColor = 'white'; // Reset button color
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

let i = 0;

// Function to update the count and fetch a new city question
function updateCityQuestion() {
  i++;
  countCity.textContent = `City quiz - ${i}/8`;
  fetchQuestion();
}

// Fetch the first city question when the page is loaded
fetchQuestion();

answersButtonsCity.forEach(button => {
  button.addEventListener("click", function(e) {
    console.log(e.target);
    if (i < 8) {
      if (button.getAttribute('data-correct') === 'true') {
        button.style.backgroundColor = 'green'; 
        score++; 
      } else {
        button.style.backgroundColor = 'red'; 
      }
      scoreCity.textContent = `Score ${score}/8`; 
      setTimeout(() => {
        updateCityQuestion();
      }, 1000);
    }
  });
});

const countFlag = document.querySelector("#flag-count");
const scoreFlag = document.querySelector("#score-flag");
const answersButtonsFlag = document.querySelectorAll(".answers-box-flag");
const flagImageElement = document.querySelector('#flagImage');

function fetchFlags() {
  fetch('http://localhost:8080/api/flagQ')
    .then(response => response.json())
    .then(data => {
      console.log('API response:', data);
      const flag = data[0];
      console.log('Selected flag:', flag);
      console.log('Flag name:', flag.FlagName);
      console.log('Flag image:', flag.flagImage);

      flagImageElement.src = 'flagIMG/' + flag.flagImage;

      const flagAnswersOptions = [
        flag.FlagName,
        data[1].FlagName,
        data[2].FlagName,
        data[3].FlagName
      ];

      

      // Shuffle the answer options randomly
      for (let i = flagAnswersOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flagAnswersOptions[i], flagAnswersOptions[j]] = [flagAnswersOptions[j], flagAnswersOptions[i]];
      }

      console.log('Shuffled answersOptions:', flagAnswersOptions);
      console.log('answersOptions[0] after shuffling:', flagAnswersOptions[0]);

      // Update the answer buttons with the shuffled options
      answersButtonsFlag.forEach((button, index) => {
        button.textContent = flagAnswersOptions[index];
        button.dataset.correct = (flagAnswersOptions[index] === flag.FlagName);
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

fetchFlags()

let f = 1;
answersButtonsFlag.forEach(button => {
  button.addEventListener("click", function(e) {
    console.log(e.target);
    if (f < 8) {
      f++;

      console.log("flag count", f)
      countFlag.textContent = `Flag quiz - ${f}/8`;

      fetchFlags()
    }
  });
});


const countCountry = document.querySelector("#count-country");
//const scoreCountry
const answersButtonsCountry = document.querySelectorAll(".answers-box-country");
const countryImageElement = document.querySelector('#countryImage');

function fetchCountryQuestion() {
  fetch('http://localhost:8080/api/countryQ')
    .then(response => response.json())
    .then(data => {
      console.log('API response:', data);
      const country = data[0];
      console.log('Selected country:', country);
      console.log('Country name:', country.CountryName);
      console.log('Country image:', country.CountryImage);

      countryImageElement.src = 'countryIMG/' + country.CountryImage;

      const countryAnswersOptions = [
        country.CountryName,
        data[1].CountryName,
        data[2].CountryName,
        data[3].CountryName
      ];

      // Shuffle the answer options randomly
      for (let i = countryAnswersOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [countryAnswersOptions[i], countryAnswersOptions[j]] = [countryAnswersOptions[j], countryAnswersOptions[i]];
      }

      console.log('Shuffled answersOptions:', countryAnswersOptions);
      console.log('answersOptions[0] after shuffling:', countryAnswersOptions[0]);

      // Update the answer buttons with the shuffled options
      answersButtonsCountry.forEach((button, index) => {
        button.textContent = countryAnswersOptions[index];
        button.dataset.correct = (countryAnswersOptions[index] === country.CountryName);
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

let c = 0;
answersButtonsCountry.forEach(button => {
  button.addEventListener("click", function(e) {
    console.log(e.target);
    if (c < 8) {
      c++;
      countCountry.textContent = `Country quiz - ${c}/8`;
      fetchCountryQuestion();
    }
  });
});

fetchCountryQuestion()

//flagLink.addEventListener('click', function(event) {
  //event.preventDefault();
  fetchFlags(); 
  console.log("click flag")
//});


//const cityLink = document.getElementById('CITY');

//console.log(cityLink)

//cityLink.addEventListener('click', function(event) {
  //event.preventDefault();
  //fetchQuestion(); 
//});
