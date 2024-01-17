async function getUserDetails() {
  
    try {
 
        const response = await fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');
    
        const userData = await response.json();
   
        console.log(userData); 
  } 
  catch (error) {
    
    console.error('Error fetching user data:', error);
 
}

}

getUserDetails();