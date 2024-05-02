

document.getElementById('quiz-type').addEventListener('change', function() {
    const selectedQuizType = this.value;
    console.log("qioz pick ", selectedQuizType)

    clearDataTable();

    if (selectedQuizType === 'City') {
      callCityAPI();
    } else if (selectedQuizType === 'Flag') {
      //callFlagAPI();
    } else if (selectedQuizType === 'Country') {
     // callCountryAPI();
    }
  });
  

function callCityAPI() {
  fetch('http://localhost:8080/api/cityEdit')
      .then(response => response.json())
      .then(data => {
        const nameHeader = document.getElementById('name-val');
        nameHeader.textContent = 'City Name';
        
        const tableBody = document.querySelector('#data-table tbody');
        
        data.forEach(item => {
          const row = document.createElement('tr');
          const idCell = document.createElement('td');
          const nameCell = document.createElement('td');
          const actionsCell = document.createElement('td');
          
          idCell.textContent = item.cityID;
          nameCell.textContent = item.Cityname;
          actionsCell.textContent = 'Edit | Delete';
          
          row.appendChild(idCell);
          row.appendChild(nameCell);
          row.appendChild(actionsCell);
          
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  function clearDataTable() {
    const tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = '';
  }