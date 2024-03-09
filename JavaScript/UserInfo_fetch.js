// Function to get user information
function getUserInformation() {
    var apiUrl = 'https://ipinfo.io/json';

    // Make a GET request to the ipinfo.io API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process and display the user information
            displayUserInformation(data);
        })
        .catch(error => {
            console.error('Error fetching user information:', error);
        });
}

// Function to display user information in the console
function displayUserInformation(data) {
    console.log('IP Address:', data.ip);
    console.log('Location:', data.city + ', ' + data.region + ', ' + data.country);
    console.log('User Agent:', navigator.userAgent);
    console.log('ISP:', data.org);
    console.log('AS (Autonomous System):', data.as);
    console.log('Hostname:', data.hostname);
    console.log('Coordinates:', data.loc);
    console.log('Postal Code:', data.postal);
}

// Call the function to get user information
getUserInformation();
