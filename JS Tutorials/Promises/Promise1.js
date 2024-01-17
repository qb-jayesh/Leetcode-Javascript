function fetchData() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
        fetch('https://opentdb.com/api.php?amount=1&category=9&type=multiple')
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            return response.json();
          })
          .then(data => {
            // Check if the 'results' array exists in the response
            if (data.results && data.results.length > 0) {
              // Resolve the promise with the first question from the 'results' array
              resolve(data.results[0]);
            } else {
              // If 'results' array is missing or empty, reject the promise
              reject(new Error('No questions found in the response'));
            }
          })
          .catch(error => {
            // Reject the promise if there's an error
            reject(error);
          });
      },1000);
    });
  }
  
  // Using the promise
  fetchData()
    .then((result) => {
      console.log(result.question);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  