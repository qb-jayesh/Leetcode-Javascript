
 const apiEndpoint = 'https://opentdb.com/api.php?amount=1&category=9&type=multiple.com/data';

 function fetchData() {
      // Fetch data from the API
     fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        // Process and use the fetched data
       console.log('Fetched data:', data);
    })
     .catch(error => {
       console.error('Error fetching data:', error);
     });
 }
    
    // Fetch data every 5 seconds (5000 milliseconds)
    //setInterval(fetchData, 5000);
    
    // Initial call to fetch data immediately
fetchData();