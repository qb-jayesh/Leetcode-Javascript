const apiEndpoint = 'https://opentdb.com/api.php?amount=1&category=9&type=multiple';

function fetchData() {
  
  fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
        
      console.log('Fetched data:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

setInterval(fetchData, 5000);

fetchData();
