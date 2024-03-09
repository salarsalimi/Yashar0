function imgload () {// Create an image element
var img = document.createElement("img");

// Set the source attribute of the image
img.src = 'https://memoryleaks.ir/wp-content/themes/yashar/assets/img/logo.png';
img.width = 300; // Example width
img.height = 200; // Example height

// Define a function to be called when the image is loaded
function imageLoaded() {
    alert('Image loaded!');
    }

function imageError() {
    alert('Error loading image!');
    }

// Attach the event listener for the 'load' event
img.addEventListener('load', imageLoaded);
img.addEventListener('error', imageError);

// Append the image to the body or any other container element
document.body.appendChild(img);

}
