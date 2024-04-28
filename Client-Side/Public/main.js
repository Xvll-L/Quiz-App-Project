
// quiz page
const countCity = document.querySelector("#count-city");
const scoreCity = document.querySelector("#score-city");
const answersButtonsCity = document.querySelectorAll(".answers-box");
const countryNameElement = document.getElementById('country-name');


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
        button.dataset.correct = (answersOptions[index] === country.Cityname);
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });

    
}




let i = 0;
answersButtonsCity.forEach(button => {
  button.addEventListener("click", function(e) {
    console.log(e.target);
    if (i < 8) {
      i++;
      count.textContent = `City quiz - ${i}/8`;
      // Fetch a new question and update the answer options
      fetchQuestion();
    }
  });
});

// Fetch the first question when the page loads
const cityLink = document.getElementById('CITY');

cityLink.addEventListener('click', function() {
  fetchQuestion(); 
});


function fetchFlags() {
  fetch('http://localhost:8080/api/flagQ')
    .then(response => response.json)
    .then(data => {
        asmersFlag = data;

        console.log(asmersFlag)
    })
    .catch(error => {
      console.log('Error:', error)
    })
}
const flagLink = document.getElementById('FLAG');

flagQuizLink.addEventListener('click', function() {
  fetchFlags(); 
});
