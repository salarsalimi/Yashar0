// GET JSON data from a REST API and then update DOM to show that data

// Function to make an XMLHttpRequest to a REST API
function fetchDataFromAPI(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Parse JSON response
                var responseData = JSON.parse(xhr.responseText); // Turning String Data to JSON
                // Call the callback function with the data
                alert(xhr.responseText);
                callback(responseData);
            } else {
                console.error('Error fetching data from the API. Status code: ' + xhr.status);
            }
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}

// Function to update the DOM with the fetched data
function updateDOMWithData(data) {
   
// Check if data is an object
if (typeof data === 'object' && data !== null) {
    // Iterate over each property in the object and update the DOM
    for (var key in data) {
    
        var paragraph = document.createElement('p');
        paragraph.textContent = JSON.stringify(data)
        document.body.appendChild(paragraph);
    
    }
}
}

// Example usage
let apiUrl = "https://reqres.in/api/users?page=2"; // Replace with your API endpoint
fetchDataFromAPI(apiUrl, updateDOMWithData);
