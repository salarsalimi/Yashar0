// Load jQuery dynamically
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.4.min.js';
script.onload = function() {
    // jQuery is now loaded, use it to update the DOM
    $(document).ready(function () {
        // Use jQuery to update the page title
        $('title').text('New Page Title');
    });
};

// Append the script element to the document head
document.head.appendChild(script);
