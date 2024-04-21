// quiz page
const count = document.querySelector("#count");
const buttons = document.querySelectorAll(".answers-box");
const countryNameElement = document.getElementById('country-name');
const answerButtonsElements = document.querySelectorAll('.answers-box');

// Function to fetch a new question and update the answer options
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

      // Update the answer buttons with the shuffled options
      answerButtonsElements.forEach((button, index) => {
        button.textContent = answersOptions[index];
        button.dataset.correct = (answersOptions[index] === country.CityName);
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

let i = 0;
buttons.forEach(button => {
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
fetchQuestion();